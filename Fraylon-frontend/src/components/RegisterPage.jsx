import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Plus, Trash2, User, Users } from "lucide-react";
import { themes } from "./ThemesSection";

const STEPS = ["Participation", "Team Details", "Members", "Project"];

const InputField = ({ label, name, type = "text", placeholder, value, onChange, error }) => (
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
  const [step, setStep] = useState(0);
  const [participationType, setParticipationType] = useState(null); // "solo" | "team"
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    // Team details
    teamName: "",
    college: "",
    // Leader
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    // Members (up to 3 extra)
    members: [{ name: "", email: "" }],
    // Project
    theme: "",
    projectIdea: "",
  });

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const updateMember = (index, field, value) => {
    const updated = [...form.members];
    updated[index][field] = value;
    setForm((prev) => ({ ...prev, members: updated }));
  };

  const addMember = () => {
    if (form.members.length < 3) {
      setForm((prev) => ({ ...prev, members: [...prev.members, { name: "", email: "" }] }));
    }
  };

  const removeMember = (index) => {
    setForm((prev) => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index),
    }));
  };

  // ── Validation per step ──────────────────────────────────────
  const validate = () => {
    const e = {};

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
    // Skip members step for solo
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
    // TODO: submit to backend
    navigate("/");
  };

  // ── Active steps for progress bar ───────────────────────────
  const visibleSteps = participationType === "solo"
    ? ["Participation", "Leader Details", "Project"]
    : STEPS;

  const progressStep = participationType === "solo"
    ? step === 0 ? 0 : step === 1 ? 1 : 2
    : step;

  // ── Step content ─────────────────────────────────────────────
  const renderStep = () => {
    // STEP 0 — Participation type
    if (step === 0) return (
      <div className="flex flex-col gap-4">
        <p className="text-fray-text-subtle text-sm mb-2">
          Are you participating solo or as a team?
        </p>
        {errors.participationType && (
          <p className="text-red-400 text-xs">{errors.participationType}</p>
        )}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "solo", icon: User, label: "Solo", sub: "Just you" },
            { value: "team", icon: Users, label: "Team", sub: "2 – 4 members" },
          ].map(({ value, icon: Icon, label, sub }) => (
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

    // STEP 1 — Team / Leader details
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

    // STEP 2 — Team members
    if (step === 2) return (
      <div className="flex flex-col gap-5">
        <p className="text-fray-text-subtle text-sm">
          Add up to <span className="text-fray-accent-primary font-semibold">3 additional members</span> (excluding you as leader).
        </p>
        {form.members.map((member, i) => (
          <div
            key={i}
            className="relative rounded-xl border border-fray-border-soft p-4 flex flex-col gap-4"
            style={{ background: "rgba(34,211,238,0.03)" }}
          >
            <div className="flex items-center justify-between mb-1">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{
                  background: "linear-gradient(to right, #06B6D4, #818CF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
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
                  text-fray-text-primary text-sm placeholder:text-fray-border-mid
                  focus:outline-none focus:border-fray-accent-primary/60 transition duration-200"
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
                  text-fray-text-primary text-sm placeholder:text-fray-border-mid
                  focus:outline-none focus:border-fray-accent-primary/60 transition duration-200"
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

    // STEP 3 — Project
    if (step === 3) return (
      <div className="flex flex-col gap-5">
        <div>
          <label className="block text-xs font-semibold text-fray-text-subtle uppercase tracking-widest mb-2">
            Select Theme / Track
          </label>
          <select
            value={form.theme}
            onChange={(e) => update("theme", e.target.value)}
            className="w-full bg-fray-bg-base border border-fray-border-soft rounded-lg px-4 py-3
            text-fray-text-primary text-sm
            focus:outline-none focus:border-fray-accent-primary/60 transition duration-200
            appearance-none cursor-pointer"
            style={{
              boxShadow: form.theme ? "0 0 0 1px rgba(34,211,238,0.15)" : "none",
            }}
          >
            <option value="" disabled className="bg-fray-bg-base">
              Choose a track...
            </option>
            {themes.map((t) => (
              <option key={t.slug} value={t.slug} className="bg-fray-bg-base">
                {t.title}
              </option>
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
            onChange={(e) => update("projectIdea", e.target.value)}
            placeholder="Briefly describe your project idea, what problem it solves, and how you plan to build it..."
            rows={5}
            className="w-full bg-fray-bg-base border border-fray-border-soft rounded-lg px-4 py-3
            text-fray-text-primary text-sm placeholder:text-fray-border-mid
            focus:outline-none focus:border-fray-accent-primary/60
            transition duration-200 resize-none"
            style={{
              boxShadow: form.projectIdea ? "0 0 0 1px rgba(34,211,238,0.15)" : "none",
            }}
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

      {/* Top bar */}
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
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{
                background: "linear-gradient(to right, #06B6D4, #22D3EE, #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Register Your Team
            </h1>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-8">
            {visibleSteps.map((label, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className="flex flex-col items-center gap-1 flex-1">
                  <div
                    className="w-full h-1 rounded-full transition-all duration-500"
                    style={{
                      background: i <= progressStep
                        ? "linear-gradient(to right, #06B6D4, #818CF8)"
                        : "rgba(31,41,55,1)",
                    }}
                  />
                  <span
                    className="text-xs transition-colors duration-300"
                    style={{ color: i <= progressStep ? "#22D3EE" : "#94A3B8" }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Card */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-fray-bg-card border border-fray-border-soft rounded-2xl p-8 overflow-hidden"
            style={{
              boxShadow: "0 0 48px rgba(34,211,238,0.06), 0 0 0 1px rgba(34,211,238,0.05)",
            }}
          >
            {/* Top glowline */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
              style={{
                background: "linear-gradient(to right, transparent, #22D3EE, transparent)",
              }}
            />

            {/* Step label */}
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "linear-gradient(to right, #06B6D4, #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Step {progressStep + 1} — {visibleSteps[progressStep]}
            </p>

            {renderStep()}

            {/* Navigation */}
            <div className={`flex mt-8 gap-3 ${step > 0 ? "justify-between" : "justify-end"}`}>
              {step > 0 && (
                <button
                  type="button"
                  onClick={back}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-fray-border-mid
                  text-fray-text-subtle hover:text-fray-accent-primary hover:border-fray-accent-primary/40
                  transition duration-300 text-sm"
                >
                  <ArrowLeft size={15} />
                  Back
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={next}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm
                  text-fray-bg-base hover:opacity-90 transition duration-300"
                  style={{ background: "linear-gradient(to right, #06B6D4, #22D3EE, #818CF8)" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0 1px rgba(34,211,238,0.5), 0 0 20px rgba(34,211,238,0.2)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Continue
                  <ArrowRight size={15} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm
                  text-fray-bg-base hover:opacity-90 transition duration-300"
                  style={{ background: "linear-gradient(to right, #06B6D4, #22D3EE, #818CF8)" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0 1px rgba(34,211,238,0.5), 0 0 20px rgba(34,211,238,0.2)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Submit Registration
                  <ArrowRight size={15} />
                </button>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}