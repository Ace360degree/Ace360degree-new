import { createFileRoute } from "@tanstack/react-router";
import { WebsiteDevUSPage } from "./website-development-united-states";

export const Route = createFileRoute("/united-states/website-development-company")(
  {
    component: WebsiteDevUSPage,
    head: () => ({
      meta: [
        {
          title:
            "Website Development Company in United States | Custom Business Websites | Ace360degree",
        },
        {
          name: "description",
          content:
            "Looking for a professional website development company in the United States? Ace360degree builds responsive, SEO-friendly, high-performance websites, ecommerce platforms, and custom web applications designed to grow your business.",
        },
        {
          property: "og:title",
          content:
            "Website Development Company in United States | Ace360degree",
        },
        {
          property: "og:description",
          content:
            "High-performance websites that convert visitors into customers. Custom websites, ecommerce and web applications for businesses across the United States.",
        },
        { property: "og:type", content: "website" },
      ],
      links: [
        {
          rel: "canonical",
          href: "/united-states/website-development-company",
        },
      ],
    }),
  }
);
