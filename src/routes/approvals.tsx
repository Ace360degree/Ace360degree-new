import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/policy-page";

export const Route = createFileRoute("/approvals")({
  head: () => ({
    meta: [
      { title: "Approvals Policy - Ace360degree" },
      {
        name: "description",
        content:
          "Read the approvals policy for Ace360degree projects and deliverables.",
      },
      { property: "og:title", content: "Approvals Policy - Ace360degree" },
      {
        property: "og:description",
        content:
          "How Ace360degree handles written approvals, review timelines and client responsibility.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/approvals" },
    ],
    links: [{ rel: "canonical", href: "/approvals" }],
  }),
  component: ApprovalsPage,
});

function ApprovalsPage() {
  return (
    <PolicyPage
      title="Approvals Policy"
      summary="To ensure timely execution of projects, Ace360degree follows a structured approval process."
      sections={[
        {
          title: "1. Approval Channels",
          paragraphs: [
            "All project approvals should be provided through an agreed communication channel such as email, project management software, or other documented written communication.",
          ],
        },
        {
          title: "2. Client Review",
          paragraphs: [
            "The client is responsible for reviewing all submitted deliverables, including designs, content, website layouts, advertisements, videos, creatives, user interfaces, functionality, and technical documentation before granting approval.",
          ],
        },
        {
          title: "3. Final Approval",
          paragraphs: [
            "Once written approval is received, the approved item will be considered final.",
            "Any subsequent modifications requested after approval may be treated as additional work and billed separately unless covered within the agreed project scope.",
          ],
        },
        {
          title: "4. No Response Timeline",
          paragraphs: [
            "If feedback is not received within seven (7) business days after submission, the deliverable may be considered approved for the purpose of maintaining agreed project timelines.",
          ],
        },
        {
          title: "5. Client Responsibility",
          paragraphs: [
            "Ace360degree is not responsible for errors, omissions, spelling mistakes, factual inaccuracies, compliance issues, or regulatory concerns that remain in materials after the client has approved them.",
          ],
        },
        {
          title: "6. Regulatory Approvals",
          paragraphs: [
            "Where projects involve regulatory approvals, trademarks, legal clearances, industry-specific certifications, or government permissions, obtaining such approvals remains the client's responsibility unless specifically included within the service agreement.",
          ],
        },
        {
          title: "7. Delays",
          paragraphs: [
            "Delays in approvals from the client may proportionately extend project delivery schedules without penalty to Ace360degree.",
          ],
        },
      ]}
    />
  );
}
