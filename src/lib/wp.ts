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
