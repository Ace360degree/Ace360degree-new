import { createServerFn } from "@tanstack/react-start";

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
      }>
    >;
  };
}

export interface BlogCard {
  kind: "post" | "page";
  title: string;
  category: string;
  date: string;
  read: string;
  excerpt: string;
  image: string;
  slug: string;
}

const DEFAULT_API_URL = "https://ace360degree.com/content/wp-json/wp/v2";

const getApiUrl = () => {
  return import.meta.env.VITE_WP_API_URL || DEFAULT_API_URL;
};

const getLocationsApiUrl = () => {
  return import.meta.env.VITE_WP_LOCATIONS_API_URL || DEFAULT_API_URL;
};

export function getWordPressSiteUrl() {
  const apiUrl = getApiUrl();
  const marker = "/wp-json/wp/v2";
  const markerIndex = apiUrl.indexOf(marker);

  if (markerIndex !== -1) {
    return apiUrl.slice(0, markerIndex).replace(/\/+$/, "");
  }

  try {
    const parsed = new URL(apiUrl);
    return parsed.origin;
  } catch {
    return "";
  }
}

function isRewritableWpPath(value: string) {
  return (
    value.startsWith("/") ||
    value.startsWith("wp-content/") ||
    value.startsWith("wp-includes/") ||
    value.startsWith("./") ||
    value.startsWith("../")
  );
}

function resolveWpUrl(value: string) {
  const trimmed = value.trim();
  if (
    !trimmed ||
    trimmed.startsWith("data:") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:") ||
    trimmed.startsWith("#") ||
    /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmed)
  ) {
    return value;
  }

  if (trimmed.startsWith("http://")) {
    try {
      const parsed = new URL(trimmed);
      if (parsed.hostname.endsWith("ace360degree.com")) {
        parsed.protocol = "https:";
        return parsed.toString();
      }
    } catch {
      return value;
    }
  }

  if (!isRewritableWpPath(trimmed)) {
    return value;
  }

  const baseUrl = getWordPressSiteUrl();
  if (!baseUrl) {
    return value;
  }

  try {
    return new URL(trimmed, `${baseUrl}/`).toString();
  } catch {
    return value;
  }
}

function resolveSrcset(value: string) {
  return value
    .split(",")
    .map((candidate) => {
      const trimmed = candidate.trim();
      if (!trimmed) return trimmed;

      const [url, ...rest] = trimmed.split(/\s+/);
      return [resolveWpUrl(url), ...rest].join(" ");
    })
    .join(", ");
}

function bytesToBase64(bytes: Uint8Array) {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(bytes).toString("base64");
  }

  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary);
}

type FetchImageInput = {
  url: string;
};

const fetchImageAsDataUrl = createServerFn({ method: "GET" })
  .validator((input: FetchImageInput) => input)
  .handler(async ({ data }) => {
    const res = await fetch(data.url);
    if (!res.ok) {
      return null;
    }

    const contentType = res.headers.get("content-type") || "application/octet-stream";
    const bytes = new Uint8Array(await res.arrayBuffer());
    return `data:${contentType};base64,${bytesToBase64(bytes)}`;
  });

export function normalizeWpContentHtml(html: string) {
  return html
    .replace(/\b(?:src|data-src|data-lazy-src|poster)=["']([^"']+)["']/gi, (match, value) => {
      const resolved = resolveWpUrl(value);
      return match.replace(value, resolved);
    })
    .replace(/\bsrcset=["']([^"']+)["']/gi, (match, value) => {
      const resolved = resolveSrcset(value);
      return match.replace(value, resolved);
    });
}

export async function inlineWpContentImages(html: string) {
  const imageRegex = /<img\b[^>]*>/gi;
  const imageTags = html.match(imageRegex) || [];
  if (imageTags.length === 0) {
    return html;
  }

  const sourceMap = new Map<string, string>();
  const urls = new Set<string>();

  for (const tag of imageTags) {
    const srcMatch = tag.match(/\b(?:src|data-src|data-lazy-src)=["']([^"']+)["']/i);
    if (!srcMatch) continue;

    const resolved = resolveWpUrl(srcMatch[1]);
    if (resolved) {
      urls.add(resolved);
    }
  }

  await Promise.all(
    [...urls].map(async (url) => {
      const dataUrl = await fetchImageAsDataUrl({ data: { url } });
      if (dataUrl) {
        sourceMap.set(url, dataUrl);
      }
    }),
  );

  return html.replace(imageRegex, (tag) => {
    const srcMatch = tag.match(/\b(?:src|data-src|data-lazy-src)=["']([^"']+)["']/i);
    if (!srcMatch) {
      return tag;
    }

    const resolved = resolveWpUrl(srcMatch[1]);
    const inlineSrc = sourceMap.get(resolved);
    if (!inlineSrc) {
      return normalizeWpContentHtml(tag);
    }

    let nextTag = tag.replace(/\b(?:src|data-src|data-lazy-src)=["'][^"']+["']/i, `src="${inlineSrc}"`);
    nextTag = nextTag.replace(/\sdata-src=["'][^"']+["']/i, "");
    nextTag = nextTag.replace(/\sdata-lazy-src=["'][^"']+["']/i, "");
    nextTag = nextTag.replace(/\ssrcset=["'][^"']+["']/i, "");
    return nextTag;
  });
}

type FetchWpJsonInput = {
  url: string;
};

const fetchWpJson = createServerFn({ method: "GET" })
  .validator((input: FetchWpJsonInput) => input)
  .handler(async ({ data }) => {
    const res = await fetch(data.url);
    if (!res.ok) {
      throw new Error(`Failed to fetch WordPress data from ${data.url}`);
    }

    return res.json();
  });

async function fetchWpArray(url: string): Promise<WPPost[]> {
  return (await fetchWpJson({ data: { url } })) as WPPost[];
}

async function fetchWpSingle(url: string): Promise<WPPost | null> {
  const data = (await fetchWpJson({ data: { url } })) as WPPost[];
  return data.length > 0 ? data[0] : null;
}

export function decodeHtmlEntities(value: string) {
  const namedEntities: Record<string, string> = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };

  return value.replace(/&(#?\w+);/g, (match, entity: string) => {
    if (entity.startsWith("#x")) {
      const codePoint = Number.parseInt(entity.slice(2), 16);
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint);
    }

    if (entity.startsWith("#")) {
      const codePoint = Number.parseInt(entity.slice(1), 10);
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint);
    }

    return namedEntities[entity] ?? match;
  });
}

export function stripHtml(value: string) {
  return decodeHtmlEntities(
    value
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

export function formatWpDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(new Date(date))
    .toUpperCase();
}

export function getPrimaryCategory(post: WPPost) {
  const categories = post._embedded?.["wp:term"]?.[0] || [];
  return categories.length > 0 ? stripHtml(categories[0].name) : "Uncategorized";
}

export function getFeaturedImage(post: WPPost, fallbackImage = "") {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || fallbackImage;
}

export function getReadTime(post: WPPost) {
  const words = stripHtml(post.content.rendered).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

export function getExcerpt(post: WPPost) {
  const excerpt = stripHtml(post.excerpt.rendered);
  if (excerpt) {
    return excerpt;
  }

  const content = stripHtml(post.content.rendered);
  return content.length > 180 ? `${content.slice(0, 177).trim()}...` : content;
}

export function toBlogCard(post: WPPost, fallbackImage = ""): BlogCard {
  return {
    kind: "post",
    title: stripHtml(post.title.rendered),
    category: getPrimaryCategory(post),
    date: formatWpDate(post.date),
    read: getReadTime(post),
    excerpt: getExcerpt(post),
    image: getFeaturedImage(post, fallbackImage),
    slug: post.slug,
  };
}

export async function getPosts(): Promise<WPPost[]> {
  try {
    const url = `${getApiUrl()}/posts?_embed`;
    return await fetchWpArray(url);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPages(): Promise<WPPost[]> {
  try {
    const url = `${getApiUrl()}/pages?_embed`;
    return await fetchWpArray(url);
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const url = `${getApiUrl()}/posts?slug=${slug}&_embed`;
    return await fetchWpSingle(url);
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function getPageBySlug(slug: string): Promise<WPPost | null> {
  try {
    const url = `${getApiUrl()}/pages?slug=${slug}&_embed`;
    return await fetchWpSingle(url);
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}

export async function getBlogEntries(): Promise<WPPost[]> {
  const [posts, pages] = await Promise.all([getPosts(), getPages()]);
  return [...posts, ...pages].sort((left, right) => {
    return new Date(right.date).getTime() - new Date(left.date).getTime();
  });
}

export async function getBlogEntryBySlug(slug: string): Promise<WPPost | null> {
  const post = await getPostBySlug(slug);
  if (post) {
    return post;
  }

  return getPageBySlug(slug);
}

export async function getLocationPageBySlug(slug: string): Promise<WPPost | null> {
  try {
    const url = `${getLocationsApiUrl()}/pages?slug=${slug}&_embed`;
    return await fetchWpSingle(url);
  } catch (error) {
    console.error("Error fetching location page:", error);
    return null;
  }
}

export async function getLocationChildPages(parentId: number): Promise<WPPost[]> {
  try {
    const url = `${getLocationsApiUrl()}/pages?parent=${parentId}&per_page=100&_embed`;
    return await fetchWpArray(url);
  } catch (error) {
    console.error("Error fetching location child pages:", error);
    return [];
  }
}

export async function getLocationPages(): Promise<WPPost[]> {
  try {
    const url = `${getLocationsApiUrl()}/pages?per_page=100&_embed`;
    return await fetchWpArray(url);
  } catch (error) {
    console.error("Error fetching location pages:", error);
    return [];
  }
}

export async function getChildPages(parentId: number): Promise<WPPost[]> {
  try {
    const url = `${getApiUrl()}/pages?parent=${parentId}&per_page=100&_embed`;
    return await fetchWpArray(url);
  } catch (error) {
    console.error("Error fetching child pages:", error);
    return [];
  }
}
