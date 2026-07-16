import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/policy-page";

export const Route = createFileRoute("/refunds")({
  head: () => ({
    meta: [
      { title: "Refund Policy - Ace360degree" },
      {
        name: "description",
        content:
          "Review the refund policy structure for Ace360degree services and engagements.",
      },
      { property: "og:title", content: "Refund Policy - Ace360degree" },
      {
        property: "og:description",
        content:
          "Refund terms for project-based services, cancellations and approved returns.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/refunds" },
    ],
    links: [{ rel: "canonical", href: "/refunds" }],
  }),
  component: RefundsPage,
});

function RefundsPage() {
  return (
    <PolicyPage
      title="Refund & Cancellation Policy"
      summary="Ace360degree provides customised professional services. As such, refunds are governed by the nature of work performed."
      sections={[
        {
          title: "1. Project Commencement",
          paragraphs: [
            "Project commencement occurs upon receipt of the agreed advance payment.",
          ],
        },
        {
          title: "2. Advance Payments",
          paragraphs: [
            "Advance payments are generally non-refundable because resources, planning, research, strategy, and production activities begin immediately after project initiation.",
          ],
        },
        {
          title: "3. Cancellation",
          paragraphs: [
            "Either party may cancel a project through written notice.",
            "In such cases, the client shall remain liable for payment of all work completed up to the cancellation date, including third-party costs already incurred.",
          ],
        },
        {
          title: "4. No Refunds For",
          paragraphs: ["No refunds shall be provided for:"],
          bullets: [
            "Completed deliverables",
            "Approved work",
            "Digital products",
            "Consultancy services",
            "Discovery workshops",
            "Strategy sessions",
            "Domain registrations",
            "Hosting services",
            "Third-party software licences",
            "Advertising spend",
            "API subscriptions",
            "Purchased stock assets",
          ],
        },
        {
          title: "5. Discretionary Refunds",
          paragraphs: [
            "Where Ace360degree determines that no work has commenced and no third-party expenses have been incurred, a refund may be considered at the sole discretion of the Company after deducting applicable administrative and banking charges.",
          ],
        },
        {
          title: "6. Refund Processing",
          paragraphs: [
            "Any eligible approved refund will normally be processed within 15 to 30 business days using the original mode of payment, subject to applicable banking procedures.",
          ],
        },
        {
          title: "7. Governing Law",
          paragraphs: [
            "Disputes relating to payments, cancellations, or refunds shall be governed by the laws of India, with exclusive jurisdiction in the courts of Mumbai, Maharashtra.",
          ],
        },
      ]}
    />
  );
}
