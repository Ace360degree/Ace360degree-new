import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/policy-page";

export const Route = createFileRoute("/terms-condition")({
  head: () => ({
    meta: [
      { title: "Terms & Condition - Ace360degree" },
      {
        name: "description",
        content:
          "Review the terms and conditions for using the Ace360degree website and services.",
      },
      { property: "og:title", content: "Terms & Condition - Ace360degree" },
      {
        property: "og:description",
        content:
          "The terms that govern use of the Ace360degree website and services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-condition" },
    ],
    links: [{ rel: "canonical", href: "/terms-condition" }],
  }),
  component: TermsConditionPage,
});

function TermsConditionPage() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      summary={
        'Welcome to Ace360degree ("Company", "we", "our", "us"). These Terms & Conditions govern your access to and use of our website, products and professional services. By accessing our website or engaging our services, you agree to these Terms.'
      }
      sections={[
        {
          title: "1. Company Information",
          paragraphs: [
            "Ace360degree",
            "Altreen 360 Creative Solutions Pvt. Ltd.",
            "Mumbai, Maharashtra, India",
          ],
          bullets: [
            "Branding",
            "Website Design & Development",
            "Mobile Application Development",
            "CRM & ERP Development",
            "Digital Marketing",
            "Search Engine Optimization (SEO)",
            "Performance Marketing",
            "Social Media Marketing",
            "UI/UX Design",
            "AI & Business Automation",
            "Creative Design",
            "Content Marketing",
            "Video Production",
            "Consulting Services",
          ],
        },
        {
          title: "2. Service Engagement",
          paragraphs: ["Every project begins only after:"],
          bullets: [
            "Written approval",
            "Proposal acceptance",
            "Purchase Order (if applicable)",
            "Initial payment as agreed",
          ],
        },
        {
          title: "3. Scope of Work",
          paragraphs: ["The agreed proposal defines:"],
          bullets: [
            "Deliverables",
            "Timeline",
            "Payment terms",
            "Revisions",
            "Technology stack",
            "Responsibilities",
          ],
        },
        {
          title: "4. Client Responsibilities",
          paragraphs: ["The client agrees to provide:"],
          bullets: [
            "Brand assets",
            "Content",
            "Images",
            "Access credentials",
            "Domain & Hosting details",
            "Third-party approvals",
            "Timely feedback",
          ],
        },
        {
          title: "5. Payments",
          paragraphs: ["Unless otherwise agreed:"],
          bullets: [
            "Advance payment is mandatory before work begins.",
            "Remaining payments shall follow milestone schedules.",
            "GST shall be charged wherever applicable.",
            "Delayed payments may attract interest of up to 18% per annum.",
          ],
        },
        {
          title: "6. Intellectual Property",
          paragraphs: ["Upon full payment:"],
          bullets: [
            "Final approved deliverables become the client's property unless otherwise specified.",
            "Ace360degree retains ownership of:",
            "Source code frameworks",
            "Internal tools",
            "Libraries",
            "Methodologies",
            "Proprietary templates",
            "AI workflows",
            "Third-party licenses remain governed by their respective owners.",
          ],
        },
        {
          title: "7. Third-Party Services",
          paragraphs: ["Projects may integrate:"],
          bullets: [
            "Google",
            "Meta",
            "Microsoft",
            "AWS",
            "Shopify",
            "WordPress",
            "Razorpay",
            "OpenAI",
            "Other APIs",
          ],
        },
        {
          title: "8. Delivery & Acceptance",
          paragraphs: ["A project shall be deemed accepted if:"],
          bullets: [
            "Client provides written approval, or",
            "No revision request is received within seven (7) business days after delivery.",
          ],
        },
        {
          title: "9. Warranty",
          paragraphs: ["Unless specifically mentioned:"],
          bullets: [
            "Website bugs reported within 30 days after deployment will be corrected without additional development charges.",
            "New features, enhancements, or third-party issues are excluded.",
          ],
        },
        {
          title: "10. Limitation of Liability",
          paragraphs: [
            "Ace360degree shall not be liable for:",
            "Our maximum liability shall not exceed the amount paid by the client for the relevant project.",
          ],
          bullets: [
            "Business losses",
            "Revenue loss",
            "Data loss",
            "SEO ranking fluctuations",
            "Advertising performance",
            "Indirect or consequential damages",
          ],
        },
        {
          title: "11. Confidentiality",
          paragraphs: ["Both parties agree to maintain confidentiality regarding:"],
          bullets: [
            "Business information",
            "Strategies",
            "Pricing",
            "Technical documentation",
            "Source materials",
            "Customer information",
          ],
        },
        {
          title: "12. Portfolio Rights",
          paragraphs: ["Unless restricted through a written NDA, Ace360degree reserves the right to showcase completed work in:"],
          bullets: [
            "Portfolio",
            "Presentations",
            "Awards",
            "Marketing material",
            "Social media",
          ],
        },
        {
          title: "13. Suspension & Termination",
          paragraphs: ["We reserve the right to terminate services for:"],
          bullets: [
            "Non-payment",
            "Illegal activities",
            "Abuse",
            "Fraud",
            "Misrepresentation",
            "Copyright infringement",
          ],
        },
        {
          title: "14. Governing Law",
          paragraphs: [
            "These Terms shall be governed by the laws of India.",
            "Jurisdiction shall exclusively lie in the courts of Mumbai, Maharashtra.",
          ],
        },
        {
          title: "15. Changes",
          paragraphs: [
            "Ace360degree may update these Terms at any time. Continued use constitutes acceptance of the revised Terms.",
          ],
        },
      ]}
    />
  );
}
