import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in the hackathon?",
    answer:
      "The hackathon is open to developers, designers, students, and professionals worldwide. Whether you're a beginner or an expert, everyone is welcome to join and contribute.",
  },
  {
    question: "Do I need a team to participate?",
    answer:
      "You can register individually or as a team of up to 4 members. Solo participants will have the opportunity to find teammates during a team-formation session before the event.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No, participation in the hackathon is completely free. We believe in making innovation accessible to everyone.",
  },
  {
    question: "What are the prizes?",
    answer:
      "We have exciting prizes across all themes including cash awards, mentorship opportunities, cloud credits, and chances to pitch to investors. Detailed prize breakdowns will be announced closer to the event.",
  },
  {
    question: "How will projects be judged?",
    answer:
      "Projects will be evaluated by a panel of industry experts based on innovation, technical execution, design, and real-world impact. Each theme track has its own set of judges and criteria.",
  },
  {
    question: "What tools and platforms can I use?",
    answer:
      "You are free to use any programming language, framework, or tool. We'll also provide access to sponsored platforms and APIs during the event.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about the hackathon.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">

            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface border border-border/50 rounded-xl px-4 sm:px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-surface-foreground hover:text-primary hover:no-underline text-left font-medium text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>

              </AccordionItem>
            ))}

          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;