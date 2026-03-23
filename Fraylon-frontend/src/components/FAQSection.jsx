import React, { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Rocket,
  ShieldCheck,
  CreditCard,
  Cpu,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const categories = [
  { id: "Getting Started", icon: Rocket },
  { id: "Security", icon: ShieldCheck },
  { id: "Pricing & Billing", icon: CreditCard },
  { id: "Integrations", icon: Cpu },
];

const faqs = [
  { category: "Getting Started", question: "Who can participate in the hackathon?", answer: "The hackathon is open to developers, designers, students, and professionals worldwide." },
  { category: "Getting Started", question: "Do I need a team to participate?", answer: "You can join solo or in a team of up to 4 members." },
  { category: "Getting Started", question: "When and where will the hackathon take place?", answer: "The hackathon will be conducted online and is open globally. Dates will be shared after registration." },
  { category: "Security", question: "Will my project idea remain confidential?", answer: "Yes, your idea remains your intellectual property and will not be shared without consent." },
  { category: "Security", question: "Are there rules against plagiarism?", answer: "Yes, all projects must be original. Any plagiarism leads to disqualification." },
  { category: "Pricing & Billing", question: "Is there a registration fee?", answer: "No, the hackathon is completely free." },
  { category: "Pricing & Billing", question: "Do winners receive post-event support?", answer: "Yes, winners may receive mentorship, funding opportunities, and incubation support." },
  { category: "Integrations", question: "Can I use third-party APIs or datasets?", answer: "Yes, you are encouraged to use APIs, open-source tools, and datasets." },
  { category: "Integrations", question: "What tools can I use?", answer: "You are free to use any programming language, framework, or tool." },
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("Getting Started");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesQuery =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = searchQuery
        ? true
        : faq.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="faq" className="relative py-24 bg-[#f8fafc] overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl -z-10" />

      <div className="container px-4 mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full"
          >
            Support Center
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Have a question?{" "}
            <span className="text-teal-600">Look here.</span>
          </motion.h2>

          {/* 🔍 Premium Search Bar */}
          <div className="relative max-w-xl mx-auto mt-10 group">
            
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative flex items-center bg-white rounded-2xl border border-slate-200 shadow-md focus-within:ring-2 focus-within:ring-teal-500 transition-all">
              
              <Search className="absolute left-4 text-slate-400 w-5 h-5" />

              <input
                type="text"
                placeholder="Search questions, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-transparent rounded-2xl 
                text-slate-800 placeholder:text-slate-400 outline-none"
              />

              {/* Clear button */}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 transition"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/70 backdrop-blur-md p-3 rounded-3xl border border-white shadow-xl">
              <p className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                Categories
              </p>

              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id && !searchQuery;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearchQuery("");
                    }}
                    className={`relative w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-semibold transition-all group ${
                      isActive
                        ? "text-teal-700"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-teal-50 border border-teal-100 rounded-2xl -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    <Icon
                      className={`w-5 h-5 ${
                        isActive
                          ? "text-teal-600"
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    />

                    {cat.id}
                  </button>
                );
              })}
            </div>

            {/* Support Card */}
            <div className="relative overflow-hidden bg-slate-900 rounded-3xl p-8 text-white shadow-2xl group">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl group-hover:bg-teal-500/40 transition-all" />

              <MessageCircle className="w-10 h-10 text-teal-400 mb-4" />

              <h4 className="text-xl font-bold mb-2">
                Can't find what you need?
              </h4>

              <p className="text-slate-400 text-sm mb-6">
                Our support heroes are online 24/7 to help you with your journey.
              </p>

              <button className="flex items-center justify-center gap-2 w-full 
              bg-gradient-to-r from-teal-400 via-emerald-500 to-blue-500
              hover:from-teal-300 hover:via-emerald-400 hover:to-blue-400
              text-white py-3 rounded-xl font-bold transition-all">
                Contact Support <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {filteredFaqs.length > 0 ? (
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="group bg-white border border-slate-200 rounded-2xl px-6 py-1 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
                      >
                        <AccordionTrigger className="text-left font-bold text-slate-800 py-4 hover:no-underline group-data-[state=open]:text-teal-600">
                          {faq.question}
                        </AccordionTrigger>

                        <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-[15px]">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                    <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      No results found
                    </h3>
                    <p className="text-slate-500">
                      Try adjusting your search or category.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;