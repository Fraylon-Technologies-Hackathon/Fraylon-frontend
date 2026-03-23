import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  User,
  Code,
  Users,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "./ui/button";

const steps = [
  { id: 1, title: "Personal", icon: User },
  { id: 2, title: "Skills", icon: Code },
  { id: 3, title: "Team", icon: Users },
];

export const RegisterModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#14b8a6", "#2dd4bf", "#0f766e"],
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl"
          >

            {/* Header */}
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Join HackNova
              </h2>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <X className="h-5 w-5 text-zinc-700 dark:text-white" />
              </button>
            </div>

            {/* Steps */}
            <div className="px-6 pt-5 flex justify-between">
              {steps.map((s) => (
                <div key={s.id} className="flex flex-col items-center gap-2">
                  <div
                    className={`h-9 w-9 flex items-center justify-center rounded-full border transition ${
                      step >= s.id
                        ? "bg-teal-500 text-white border-teal-500"
                        : "border-zinc-300 dark:border-zinc-700 text-zinc-400"
                    }`}
                  >
                    <s.icon className="h-4 w-4" />
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      step >= s.id ? "text-teal-600" : "text-zinc-400"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              {!isSuccess ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >

                    {/* Step 1 */}
                    {step === 1 && (
                      <>
                        <input
                          className="w-full border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 ring-teal-500"
                          placeholder="Full Name"
                        />
                        <input
                          className="w-full border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 ring-teal-500"
                          placeholder="Email Address"
                        />
                      </>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <div className="grid grid-cols-2 gap-3">
                        {["Frontend", "Backend", "AI/ML", "Design", "Web3", "Mobile"].map((role) => (
                          <button
                            key={role}
                            className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white hover:border-teal-500 hover:text-teal-600 transition"
                          >
                            {role}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <div className="space-y-4 text-center">
                        <button className="w-full p-5 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-white hover:border-teal-500 transition">
                          Create Team
                        </button>
                        <input
                          className="w-full border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 text-center bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 ring-teal-500"
                          placeholder="Invite Code"
                        />
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="text-center py-8">
                  <div className="h-16 w-16 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    You're in!
                  </h3>
                  <p className="text-sm text-zinc-500 mt-2">
                    Check your email for next steps
                  </p>
                  <Button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white rounded-lg">
                    Done
                  </Button>
                </div>
              )}
            </div>

            {/* Footer */}
            {!isSuccess && (
              <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 flex gap-3">
                {step > 1 && (
                  <Button variant="outline" onClick={handleBack} className="flex-1">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                )}
                <Button
                  onClick={step === 3 ? handleSubmit : handleNext}
                  className="flex-1 bg-teal-500 hover:bg-teal-600 text-white"
                >
                  {isSubmitting ? "Processing..." : step === 3 ? "Finish" : "Next"}
                  {step < 3 && <ChevronRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};