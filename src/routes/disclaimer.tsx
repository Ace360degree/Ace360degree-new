import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/policy-page";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer - Ace360degree" },
      {
        name: "description",
        content:
          "Read the disclaimer for content published on the Ace360degree website.",
      },
      { property: "og:title", content: "Disclaimer - Ace360degree" },
      {
        property: "og:description",
        content:
          "General disclaimers for website content, external links and service information.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <PolicyPage
      title="Disclaimer"
      summary="The information provided on this website is for general informational purposes only."
      sections={[
        {
          title: "1. General Information",
          paragraphs: [
            "While Ace360degree makes every effort to ensure accuracy, we do not warrant that all information is complete, current, or error-free.",
          ],
        },
        {
          title: "2. Results and Outcomes",
          paragraphs: [
            "Marketing results, SEO rankings, advertising performance, lead generation, revenue growth, and business outcomes depend on numerous external factors beyond our control.",
            "Therefore, no guarantee of specific results is made unless expressly stated in a written agreement.",
          ],
        },
        {
          title: "3. Client Content",
          paragraphs: [
            "Clients remain solely responsible for the legality, accuracy, ownership, and compliance of all content, trademarks, images, videos, logos, documents, and other materials they provide.",
            "Ace360degree assumes no responsibility for copyright infringement or intellectual property disputes arising from client-supplied content.",
          ],
        },
        {
          title: "4. Third-Party Services",
          paragraphs: [
            "Third-party platforms, including search engines, advertising networks, social media platforms, payment gateways, hosting providers, and software vendors, operate under their own terms and policies.",
            "We are not responsible for service interruptions, account suspensions, policy changes, API modifications, security incidents, or pricing changes implemented by such providers.",
          ],
        },
        {
          title: "5. External Links",
          paragraphs: [
            "Our website may contain links to third-party websites for convenience.",
            "Ace360degree neither controls nor endorses the content, products, or services available on those websites and accepts no liability arising from their use.",
          ],
        },
        {
          title: "6. Limitation of Liability",
          paragraphs: [
            "To the fullest extent permitted by law, Ace360degree shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from the use of our website or services.",
          ],
        },
        {
          title: "7. Changes",
          paragraphs: [
            "All information, designs, pricing, proposals, presentations, and marketing materials remain subject to change without prior notice.",
          ],
        },
      ]}
    />
  );
}
