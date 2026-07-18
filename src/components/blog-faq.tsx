import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

type FAQ = {
  question: string;
  answerHtml?: string;
  answer?: string;
};

const DEFAULT_FAQS: FAQ[] = [
  {
    question: "Do you only work with B2B companies?",
    answer:
      "While our primary expertise is in B2B tech, SaaS, and professional services, our strategic framework applies to any high-ticket or complex sales environment where trust and authority are the primary drivers of growth.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Our initial strategy phase takes 2-4 weeks. Once implemented, you'll see leading indicators (engagement, pipeline velocity) improve within 60 days, and compounding revenue impact typically begins around month 4-6.",
  },
  {
    question: "Do we need to replace our current marketing team?",
    answer:
      "Not at all. We often act as the strategic layer and execution partner alongside your internal team, filling in gaps where you lack specialized expertise or bandwidth.",
  },
  {
    question: "What's the investment required?",
    answer:
      "Our growth partnerships start at $5,000/month. We structure our engagements to ensure the business outcomes we deliver far exceed the investment required.",
  },
];

export function BlogFAQ({ faqs }: { faqs?: FAQ[] }) {
  const displayFaqs = faqs && faqs.length > 0 ? faqs : DEFAULT_FAQS;

  return (
    <div className="mt-16 pt-12 border-t border-border/40">
      <h2 className="font-serif font-normal text-3xl md:text-4xl text-foreground mb-8 tracking-tight">
        Frequently Asked Questions
      </h2>

      <div className="border border-primary/20 rounded-[2rem] p-6 md:p-10 bg-primary/5">
        <Accordion type="single" collapsible className="w-full">
          {displayFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border last:border-0"
            >
              <AccordionPrimitive.Header className="flex" asChild>
                <div>
                  <AccordionPrimitive.Trigger className="group flex w-full flex-1 items-center justify-between py-6 text-left transition-all hover:text-primary font-sans text-lg font-medium text-foreground">
                    <span className="pr-8">{faq.question}</span>
                    <Plus className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 plus group-hover:scale-110" strokeWidth={2} />
                    <Minus className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 minus group-hover:scale-110" strokeWidth={2} />
                  </AccordionPrimitive.Trigger>
                </div>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-6 text-base text-foreground/80 font-sans leading-relaxed">
                {faq.answerHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: faq.answerHtml }} />
                ) : (
                  faq.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <style>{`
        [data-state=open] .plus { display: none; }
        [data-state=closed] .plus { display: block; }
        [data-state=open] .minus { display: block; }
        [data-state=closed] .minus { display: none; }
      `}</style>
    </div>
  );
}
