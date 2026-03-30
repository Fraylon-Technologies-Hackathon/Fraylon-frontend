import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Plus, Trash2, User, Users, LucideIcon } from "lucide-react";
import { themes } from "./ThemesSection";

/** 
 * TYPES & INTERFACES 
 **/
interface Member {
  name: string;
  email: string;
}

interface FormState {
  teamName: string;
  college: string;
  leaderName: string;
  leaderEmail: string;
  leaderPhone: string;
  members: Member[];
  theme: string;
  projectIdea: string;
}

type ParticipationType = "solo" | "team" | null;

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string | undefined; // ✅ FIXED
}

const STEPS = ["Participation", "Team Details", "Members", "Project"];

/** 
 * SUB-COMPONENT: InputField
 **/
const InputField: React.FC<InputFieldProps> = ({
  label, name, type = "text", placeholder, value, onChange, error
}) => (
  <div>
    <label className="block text-xs font-semibold text-fray-text-subtle uppercase tracking-widest mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-fray-bg-base border border-fray-border-soft rounded-lg px-4 py-3
      text-fray-text-primary text-sm placeholder:text-fray-border-mid
      focus:outline-none focus:border-fray-accent-primary/60
      transition duration-200"
      style={{
        boxShadow: value ? "0 0 0 1px rgba(34,211,238,0.15)" : "none",
      }}
    />
    {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
  </div>
);

export default function HackathonRegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);
  const [participationType, setParticipationType] = useState<ParticipationType>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<FormState>({
    teamName: "",
    college: "",
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    members: [{ name: "", email: "" }],
    theme: "",
    projectIdea: "",
  });

  const update = (field: keyof Omit<FormState, 'members'>, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const updateMember = (index: number, field: keyof Member, value: string) => {
    setForm((prev) => {
      const updated = [...prev.members];

      if (!updated[index]) return prev; 

      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      return { ...prev, members: updated };
    });

    setErrors((prev) => ({ ...prev, [`member_${field}_${index}`]: "" }));
  };

  const addMember = () => {
    if (form.members.length < 3) {
      setForm((prev) => ({ ...prev, members: [...prev.members, { name: "", email: "" }] }));
    }
  };

  const removeMember = (index: number) => {
    setForm((prev) => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index),
    }));
  };

  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};

    if (step === 0 && !participationType) {
      e.participationType = "Please select a participation type.";
    }

    if (step === 1) {
      if (participationType === "team" && !form.teamName.trim())
        e.teamName = "Team name is required.";
      if (!form.college.trim()) e.college = "College / Institution is required.";
      if (!form.leaderName.trim()) e.leaderName = "Leader name is required.";
      if (!form.leaderEmail.trim()) e.leaderEmail = "Leader email is required.";
      else if (!/\S+@\S+\.\S+/.test(form.leaderEmail)) e.leaderEmail = "Enter a valid email.";
      if (!form.leaderPhone.trim()) e.leaderPhone = "Phone number is required.";
    }

    if (step === 2 && participationType === "team") {
      form.members.forEach((m, i) => {
        if (!m.name.trim()) e[`member_name_${i}`] = "Name is required.";
        if (!m.email.trim()) e[`member_email_${i}`] = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(m.email)) e[`member_email_${i}`] = "Enter a valid email.";
      });
    }

    if (step === 3) {
      if (!form.theme) e.theme = "Please select a theme.";
      if (!form.projectIdea.trim()) e.projectIdea = "Please describe your project idea.";
    }

    return e;
  };

  const next = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    if (step === 1 && participationType === "solo") { setStep(3); return; }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => {
    if (step === 3 && participationType === "solo") { setStep(1); return; }
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    console.log("Submitting form:", form);
    navigate("/");
  };

  const visibleSteps = participationType === "solo"
    ? ["Participation", "Leader Details", "Project"]
    : STEPS;

  const progressStep = participationType === "solo"
    ? step === 0 ? 0 : step === 1 ? 1 : 2
    : step;

  const renderStep = () => {
    if (step === 0) return (
      <div className="flex flex-col gap-4">
        <p className="text-fray-text-subtle text-sm mb-2">
          Are you participating solo or as a team?
        </p>
        {errors.participationType && (
          <p className="text-red-400 text-xs">{errors.participationType}</p>
        )}
        <div className="grid grid-cols-2 gap-4">
          {(
            [
              { value: "solo", icon: User, label: "Solo", sub: "Just you" },
              { value: "team", icon: Users, label: "Team", sub: "2 – 4 members" },
            ] as const
          ).map(({ value, icon: Icon, label, sub }) => (
            <button
              key={value}
              type="button"
              onClick={() => { setParticipationType(value); setErrors({}); }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border transition-all duration-300 cursor-pointer"
              style={{
                background: participationType === value
                  ? "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(129,140,248,0.08))"
                  : "rgba(255,255,255,0.02)",
                borderColor: participationType === value
                  ? "rgba(34,211,238,0.6)"
                  : "rgba(31,41,55,1)",
                boxShadow: participationType === value
                  ? "0 0 0 1px rgba(34,211,238,0.3), 0 0 20px rgba(34,211,238,0.1)"
                  : "none",
              }}
            >
              <Icon
                size={28}
                style={{
                  color: participationType === value ? "#22D3EE" : "#94A3B8",
                }}
              />
              <div className="text-center">
                <p className="text-fray-text-primary font-semibold text-sm">{label}</p>
                <p className="text-fray-text-subtle text-xs">{sub}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );

    if (step === 1) return (
      <div className="flex flex-col gap-5">
        {participationType === "team" && (
          <InputField
            label="Team Name"
            name="teamName"
            placeholder="e.g. Code Crusaders"
            value={form.teamName}
            onChange={(e) => update("teamName", e.target.value)}
            error={errors.teamName}
          />
        )}
        <InputField
          label="College / Institution"
          name="college"
          placeholder="e.g. IIT Hyderabad"
          value={form.college}
          onChange={(e) => update("college", e.target.value)}
          error={errors.college}
        />
        <div
          className="w-full h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(34,211,238,0.2), transparent)" }}
        />
        <p className="text-xs font-semibold text-fray-accent-primary uppercase tracking-widest">
          {participationType === "team" ? "Team Leader" : "Your Details"}
        </p>
        <InputField
          label="Full Name"
          name="leaderName"
          placeholder="Your full name"
          value={form.leaderName}
          onChange={(e) => update("leaderName", e.target.value)}
          error={errors.leaderName}
        />
        <InputField
          label="Email Address"
          name="leaderEmail"
          type="email"
          placeholder="you@example.com"
          value={form.leaderEmail}
          onChange={(e) => update("leaderEmail", e.target.value)}
          error={errors.leaderEmail}
        />
        <InputField
          label="Phone Number"
          name="leaderPhone"
          type="tel"
          placeholder="+91 9XXXXXXXXX"
          value={form.leaderPhone}
          onChange={(e) => update("leaderPhone", e.target.value)}
          error={errors.leaderPhone}
        />
      </div>
    );

    if (step === 2) return (
      <div className="flex flex-col gap-5">
        <p className="text-fray-text-subtle text-sm">
          Add up to <span className="text-fray-accent-primary font-semibold">3 additional members</span> (excluding leader).
        </p>
        {form.members.map((member, i) => (
          <div
            key={i}
            className="relative rounded-xl border border-fray-border-soft p-4 flex flex-col gap-4"
            style={{ background: "rgba(34,211,238,0.03)" }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-fray-accent-primary">
                Member {i + 1}
              </span>
              {form.members.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeMember(i)}
                  className="text-fray-text-subtle hover:text-red-400 transition"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-xs text-fray-text-subtle uppercase tracking-widest mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => updateMember(i, "name", e.target.value)}
                  placeholder="Member's full name"
                  className="w-full bg-fray-bg-base border border-fray-border-soft rounded-lg px-4 py-2.5
                  text-fray-text-primary text-sm focus:outline-none focus:border-fray-accent-primary/60"
                />
                {errors[`member_name_${i}`] && (
                  <p className="text-red-400 text-xs mt-1">{errors[`member_name_${i}`]}</p>
                )}
              </div>
              <div>
                <label className="block text-xs text-fray-text-subtle uppercase tracking-widest mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={member.email}
                  onChange={(e) => updateMember(i, "email", e.target.value)}
                  placeholder="member@example.com"
                  className="w-full bg-fray-bg-base border border-fray-border-soft rounded-lg px-4 py-2.5
                  text-fray-text-primary text-sm focus:outline-none focus:border-fray-accent-primary/60"
                />
                {errors[`member_email_${i}`] && (
                  <p className="text-red-400 text-xs mt-1">{errors[`member_email_${i}`]}</p>
                )}
              </div>
            </div>
          </div>
        ))}

        {form.members.length < 3 && (
          <button
            type="button"
            onClick={addMember}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-dashed
            border-fray-border-mid text-fray-text-subtle hover:text-fray-accent-primary
            hover:border-fray-accent-primary/50 transition duration-300 text-sm"
          >
            <Plus size={15} />
            Add Another Member
          </button>
        )}
      </div>
    );

    if (step === 3) return (
      <div className="flex flex-col gap-5">
        <div>
          <label className="block text-xs font-semibold text-fray-text-subtle uppercase tracking-widest mb-2">
            Select Theme / Track
          </label>
          <select
            value={form.theme}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => update("theme", e.target.value)}
            className="w-full bg-fray-bg-base border border-fray-border-soft rounded-lg px-4 py-3
            text-fray-text-primary text-sm focus:outline-none focus:border-fray-accent-primary/60
            appearance-none cursor-pointer"
          >
            <option value="" disabled>Choose a track...</option>
            {themes.map((t) => (
              <option key={t.slug} value={t.slug}>{t.title}</option>
            ))}
          </select>
          {errors.theme && <p className="text-red-400 text-xs mt-1.5">{errors.theme}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-fray-text-subtle uppercase tracking-widest mb-2">
            Project Idea
          </label>
          <textarea
            value={form.projectIdea}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => update("projectIdea", e.target.value)}
            placeholder="Briefly describe your project..."
            rows={5}
            className="w-full bg-fray-bg-base border border-fray-border-soft rounded-lg px-4 py-3
            text-fray-text-primary text-sm focus:outline-none focus:border-fray-accent-primary/60
            transition duration-200 resize-none"
          />
          {errors.projectIdea && (
            <p className="text-red-400 text-xs mt-1.5">{errors.projectIdea}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-fray-bg-base flex flex-col">
   
      <div className="border-b border-fray-border-soft px-6 py-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-fray-text-subtle hover:text-fray-accent-primary transition text-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          {/* Page header */}
          <div className="text-center mb-10">
            <span className="text-fray-accent-primary text-sm font-semibold tracking-widest uppercase block mb-3">
              Fraylon Hackathon
            </span>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Register Your Team
            </h1>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-8">
            {visibleSteps.map((label, i) => (
              <div key={i} className="flex flex-col items-center gap-1 flex-1">
                <div
                  className="w-full h-1 rounded-full transition-all duration-500"
                  style={{
                    background: i <= progressStep
                      ? "linear-gradient(to right, #06B6D4, #818CF8)"
                      : "rgba(31,41,55,1)",
                  }}
                />
                <span
                  className="text-[10px] md:text-xs transition-colors duration-300"
                  style={{ color: i <= progressStep ? "#22D3EE" : "#94A3B8" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

      
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative bg-fray-bg-card border border-fray-border-soft rounded-2xl p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-6 text-fray-accent-primary">
              Step {progressStep + 1} — {visibleSteps[progressStep]}
            </p>

            {renderStep()}

            <div className={`flex mt-8 gap-3 ${step > 0 ? "justify-between" : "justify-end"}`}>
              {step > 0 && (
                <button
                  type="button"
                  onClick={back}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-fray-border-mid
                  text-fray-text-subtle hover:text-fray-accent-primary transition text-sm"
                >
                  <ArrowLeft size={15} />
                  Back
                </button>
              )}

              <button
                type="button"
                onClick={step < 3 ? next : handleSubmit}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm
                text-fray-bg-base bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-90 transition"
              >
                {step < 3 ? "Continue" : "Submit Registration"}
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}