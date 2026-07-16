import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/policy-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Ace360degree" },
      {
        name: "description",
        content:
          "Learn how Ace360degree collects, uses and protects personal information.",
      },
      { property: "og:title", content: "Privacy Policy - Ace360degree" },
      {
        property: "og:description",
        content:
          "How Ace360degree handles personal information, cookies and communication preferences.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      summary="Ace360degree values your privacy and is committed to protecting your personal information."
      sections={[
        {
          title: "1. Information We Collect",
          paragraphs: ["We may collect:"],
          bullets: [
            "Name",
            "Company name",
            "Email address",
            "Phone number",
            "Billing information",
            "IP address",
            "Browser information",
            "Device information",
            "Website usage analytics",
          ],
        },
        {
          title: "2. How We Use Information",
          paragraphs: ["Your information may be used for:"],
          bullets: [
            "Service delivery",
            "Customer support",
            "Project communication",
            "Billing",
            "Marketing communications",
            "Improving website performance",
            "Security monitoring",
            "Legal compliance",
          ],
        },
        {
          title: "3. Legal Basis",
          paragraphs: ["Where applicable, we process data under:"],
          bullets: [
            "Consent",
            "Contractual necessity",
            "Legitimate business interests",
            "Legal obligations",
          ],
        },
        {
          title: "4. Cookies",
          paragraphs: ["Our website uses cookies to:"],
          bullets: [
            "Improve performance",
            "Remember preferences",
            "Measure traffic",
            "Analyse visitor behaviour",
            "Enhance user experience",
          ],
        },
        {
          title: "5. Data Security",
          paragraphs: [
            "We implement reasonable technical and organisational safeguards including:",
          ],
          bullets: [
            "Secure hosting",
            "Access controls",
            "Encrypted communication where applicable",
            "Regular software updates",
            "Firewall protection",
            "No online system is completely secure; therefore, absolute security cannot be guaranteed.",
          ],
        },
        {
          title: "6. Data Sharing",
          paragraphs: [
            "We do not sell personal information.",
            "Information may be shared with trusted service providers including:",
          ],
          bullets: [
            "Payment processors",
            "Cloud hosting providers",
            "Analytics providers",
            "CRM systems",
            "Government authorities where legally required",
          ],
        },
        {
          title: "7. Data Retention",
          paragraphs: ["Information is retained only for:"],
          bullets: [
            "Project completion",
            "Legal compliance",
            "Accounting requirements",
            "Contractual obligations",
          ],
        },
        {
          title: "8. Your Rights",
          paragraphs: ["Subject to applicable law, you may request:"],
          bullets: [
            "Access to your data",
            "Correction of inaccurate information",
            "Deletion where legally permissible",
            "Withdrawal of consent",
            "Restriction of processing",
          ],
        },
        {
          title: "9. International Transfers",
          paragraphs: [
            "Where services involve international vendors or cloud infrastructure, data may be processed outside India while maintaining appropriate safeguards.",
          ],
        },
        {
          title: "10. Children's Privacy",
          paragraphs: [
            "Our services are intended for individuals aged 18 years or older.",
            "We do not knowingly collect personal information from children.",
          ],
        },
        {
          title: "11. Contact",
          paragraphs: [
            "For privacy-related requests, please contact privacy@ace360degree.com.",
          ],
        },
      ]}
    />
  );
}
