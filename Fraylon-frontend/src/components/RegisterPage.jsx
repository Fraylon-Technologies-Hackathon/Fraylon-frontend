import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Plus, Trash2, User, Users, CheckCircle2 } from "lucide-react";
import { themes } from "./ThemesSection";

const STEPS = ["Participation", "Team Details", "Members", "Project"];

const InputField = ({ label, name, type = "text", placeholder, value, onChange, error }) => (
  <div>
    <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
      style={{ color: "#64748B" }}
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(8px)",
        border: value ? "1px solid rgba(34,211,238,0.4)" : "1px solid rgba(31,41,55,1)",
        color: "#F9FAFB",
        boxShadow: value ? "0 0 0 1px rgba(34,211,238,0.1), inset 0 1px 0 rgba(255,255,255,0.04)" : "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
      onFocus={e => {
        e.target.style.border = "1px solid rgba(34,211,238,0.6)";
        e.target.style.boxShadow = "0 0 0 3px rgba(34,211,238,0.08), inset 0 1px 0 rgba(255,255,255,0.04)";
      }}
      onBlur={e => {
        e.target.style.border = value ? "1px solid rgba(34,211,238,0.4)" : "1px solid rgba(31,41,55,1)";
        e.target.style.boxShadow = value ? "0 0 0 1px rgba(34,211,238,0.1)" : "none";
      }}
    />
    {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
  </div>
);

// ── Success Screen ───────────────────────────────────────────
const SuccessScreen = ({ onHome }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="flex flex-col items-center justify-center text-center py-10 px-4"
  >
    {/* Animated checkmark */}
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      className="mb-6 relative"
    >
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(129,140,248,0.1))",
          boxShadow: "0 0 0 1px rgba(34,211,238,0.3), 0 0 40px rgba(34,211,238,0.2), 0 0 80px rgba(34,211,238,0.08)",
        }}
      >
        <CheckCircle2 size={48} className="text-fray-accent-primary" />
      </div>
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ border: "1px solid rgba(34,211,238,0.4)" }}
        animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
      />
    </motion.div>

    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="text-2xl md:text-3xl font-bold mb-3"
      style={{
        background: "linear-gradient(to right, #06B6D4, #22D3EE, #818CF8)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      You're Registered!
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
      className="text-fray-text-subtle text-sm max-w-sm mb-8 leading-relaxed"
    >
      Your registration has been submitted successfully. We'll reach out soon with further details. Get ready to build something amazing! 🚀
    </motion.p>

    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 }}
      onClick={onHome}
      style={{
        background: "linear-gradient(to right, #06B6D4, #22D3EE, #818CF8)",
        transition: "box-shadow 0.3s ease, transform 0.2s ease",
      }}
      className="px-8 py-3 rounded-lg font-semibold text-sm text-fray-bg-base"
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 0 0 1px rgba(34,211,238,0.5), 0 0 24px rgba(34,211,238,0.3)";
        e.currentTarget.style.transform = "scale(1.03)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      Back to Home
    </motion.button>
  </motion.div>
);

export default function HackathonRegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [participationType, setParticipationType] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const [form, setForm] = useState({
    teamName: "",
    college: "",
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    members: [{ name: "", email: "" }],
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
    if (form.members.length < 3)
      setForm((prev) => ({ ...prev, members: [...prev.members, { name: "", email: "" }] }));
  };

  const removeMember = (index) => {
    setForm((prev) => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index),
    }));
  };

  const validate = () => {
    const e = {};
    if (step === 0 && !participationType)
      e.participationType = "Please select a participation type.";
    if (step === 1) {
      if (participationType === "team" && !form.teamName.trim()) e.teamName = "Team name is required.";
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
    setDirection(1);
    if (step === 1 && participationType === "solo") { setStep(3); return; }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => {
    setDirection(-1);
    if (step === 3 && participationType === "solo") { setStep(1); return; }
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
  };

  const visibleSteps = participationType === "solo"
    ? ["Participation", "Leader Details", "Project"]
    : STEPS;

  const progressStep = participationType === "solo"
    ? step === 0 ? 0 : step === 1 ? 1 : 2
    : step;

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

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
        <div className="flex flex-col gap-4">
  {[
    {
      value: "solo",
      icon: User,
      label: "Solo Participant",
      sub: "Just you — compete individually and own your idea end to end.",
      perks: ["Individual submission", "Full creative control", "Solo leaderboard track"],
    },
    {
      value: "team",
      icon: Users,
      label: "Team Entry",
      sub: "Collaborate with up to 3 others and build something bigger.",
      perks: ["2 – 4 members", "Shared dashboard", "Team leaderboard track"],
    },
  ].map(({ value, icon: Icon, label, sub, perks }) => (
    <button
      key={value}
      type="button"
      onClick={() => { setParticipationType(value); setErrors({}); }}
      className="relative w-full text-left rounded-2xl border p-5 transition-all duration-300 cursor-pointer overflow-hidden"
      style={{
        background: participationType === value
          ? "linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(129,140,248,0.08) 100%)"
          : "rgba(255,255,255,0.02)",
        borderColor: participationType === value
          ? "rgba(34,211,238,0.65)"
          : "rgba(31,41,55,1)",
        boxShadow: participationType === value
          ? "0 0 0 1px rgba(34,211,238,0.35), 0 0 32px rgba(34,211,238,0.15), 0 0 64px rgba(34,211,238,0.06)"
          : "none",
        transform: participationType === value ? "scale(1.02)" : "scale(1)",
      }}
    >
      {/* Selected top accent line */}
      {participationType === value && (
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, #22D3EE, #818CF8, transparent)",
          }}
        />
      )}

      <div className="flex items-center gap-4 mb-3">
        {/* Icon bubble */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: participationType === value
              ? "linear-gradient(135deg, rgba(6,182,212,0.25), rgba(129,140,248,0.2))"
              : "rgba(255,255,255,0.04)",
            boxShadow: participationType === value
              ? "0 0 20px rgba(34,211,238,0.25)"
              : "none",
            transition: "all 0.3s ease",
          }}
        >
          <Icon
            size={22}
            style={{
              color: participationType === value ? "#22D3EE" : "#94A3B8",
              transition: "color 0.3s ease",
            }}
          />
        </div>

        <div className="flex-1">
          <p
            className="font-bold text-base"
            style={{
              color: participationType === value ? "#22D3EE" : "#F9FAFB",
              transition: "color 0.3s ease",
            }}
          >
            {label}
          </p>
          <p className="text-fray-text-subtle text-xs mt-0.5 leading-relaxed">
            {sub}
          </p>
        </div>

        {/* Selected checkmark */}
        <div
          className="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            borderColor: participationType === value ? "#22D3EE" : "rgba(71,85,105,1)",
            background: participationType === value ? "#22D3EE" : "transparent",
          }}
        >
          {participationType === value && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="#020617" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>

      {/* Perks list */}
      <div className="flex flex-wrap gap-2 mt-1 pl-16">
        {perks.map((perk) => (
          <span
            key={perk}
            className="text-xs px-2.5 py-1 rounded-full border"
            style={{
              borderColor: participationType === value
                ? "rgba(34,211,238,0.25)"
                : "rgba(31,41,55,1)",
              color: participationType === value ? "#38BDF8" : "#94A3B8",
              background: participationType === value
                ? "rgba(34,211,238,0.06)"
                : "rgba(255,255,255,0.02)",
              transition: "all 0.3s ease",
            }}
          >
            {perk}
          </span>
        ))}
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
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
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
                  className="text-fray-text-subtle hover:text-red-400 transition p-1 rounded hover:bg-red-400/10"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-xs text-fray-text-subtle uppercase tracking-widest mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => updateMember(i, "name", e.target.value)}
                  placeholder="Member's full name"
                  className="w-full bg-fray-bg-base border border-fray-border-soft rounded-lg px-4 py-2.5
                  text-fray-text-primary text-sm placeholder:text-fray-border-mid
                  focus:outline-none focus:border-fray-accent-primary/60 transition duration-200"
                />
                {errors[`member_name_${i}`] && <p className="text-red-400 text-xs mt-1">{errors[`member_name_${i}`]}</p>}
              </div>
              <div>
                <label className="block text-xs text-fray-text-subtle uppercase tracking-widest mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={member.email}
                  onChange={(e) => updateMember(i, "email", e.target.value)}
                  placeholder="member@example.com"
                  className="w-full bg-fray-bg-base border border-fray-border-soft rounded-lg px-4 py-2.5
                  text-fray-text-primary text-sm placeholder:text-fray-border-mid
                  focus:outline-none focus:border-fray-accent-primary/60 transition duration-200"
                />
                {errors[`member_email_${i}`] && <p className="text-red-400 text-xs mt-1">{errors[`member_email_${i}`]}</p>}
              </div>
            </div>
          </motion.div>
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
            text-fray-text-primary text-sm focus:outline-none focus:border-fray-accent-primary/60
            transition duration-200 appearance-none cursor-pointer"
            style={{ boxShadow: form.theme ? "0 0 0 1px rgba(34,211,238,0.15)" : "none" }}
          >
            <option value="" disabled className="bg-fray-bg-base">Choose a track...</option>
            {themes.map((t) => (
              <option key={t.slug} value={t.slug} className="bg-fray-bg-base">{t.title}</option>
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
            focus:outline-none focus:border-fray-accent-primary/60 transition duration-200 resize-none"
            style={{ boxShadow: form.projectIdea ? "0 0 0 1px rgba(34,211,238,0.15)" : "none" }}
          />
          {errors.projectIdea && <p className="text-red-400 text-xs mt-1.5">{errors.projectIdea}</p>}
        </div>
      </div>
    );
  };

  return (
  <div className="min-h-screen flex flex-col relative overflow-hidden"
    style={{ background: "#020617" }}
  >
    {/* ── Animated background ─────────────────────────────── */}

    {/* Grid overlay */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        animation: "grid-move 4s linear infinite",
      }}
    />

    {/* Glowing orbs */}
    <div
      className="absolute pointer-events-none"
      style={{
        top: "-10%", left: "-5%",
        width: "500px", height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
        animation: "float-1 8s ease-in-out infinite",
      }}
    />
    <div
      className="absolute pointer-events-none"
      style={{
        bottom: "-10%", right: "-5%",
        width: "600px", height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)",
        animation: "float-2 10s ease-in-out infinite",
      }}
    />
    <div
      className="absolute pointer-events-none"
      style={{
        top: "40%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px", height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(34,211,238,0.04) 0%, transparent 70%)",
      }}
    />

    {/* ── Top bar ─────────────────────────────────────────── */}
    {!submitted && (
      <div
        className="relative z-10 px-6 py-4 flex items-center"
        style={{
          background: "rgba(2,6,23,0.6)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(34,211,238,0.1)",
        }}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm transition-all duration-300"
          style={{ color: "#94A3B8" }}
          onMouseEnter={e => e.currentTarget.style.color = "#22D3EE"}
          onMouseLeave={e => e.currentTarget.style.color = "#94A3B8"}
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        {/* Top bar right — hackathon badge */}
        <div
          className="ml-auto text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "rgba(34,211,238,0.08)",
            border: "1px solid rgba(34,211,238,0.2)",
            color: "#22D3EE",
          }}
        >
          ⚡ Fraylon Hackathon 2025
        </div>
      </div>
    )}

    {/* ── Main content ────────────────────────────────────── */}
    <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">

        {submitted ? (
          <SuccessScreen onHome={() => navigate("/")} />
        ) : (
          <>
            {/* Page header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
                style={{
                  background: "rgba(34,211,238,0.08)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  color: "#22D3EE",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-fray-accent-primary animate-pulse" />
                Registration Open
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-3"
                style={{
                  background: "linear-gradient(135deg, #06B6D4 0%, #22D3EE 40%, #818CF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Register Your Team
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm"
                style={{ color: "#64748B" }}
              >
                Fill in the details below to secure your spot
              </motion.p>
            </div>

            {/* ── Progress bar ──────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex items-start gap-0 mb-8"
            >
              {visibleSteps.map((label, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-center">
                    {/* Left connector */}
                    <div
                      className="flex-1 h-px transition-all duration-500"
                      style={{
                        background: i === 0 ? "transparent"
                          : i <= progressStep
                            ? "linear-gradient(to right, #06B6D4, #22D3EE)"
                            : "rgba(31,41,55,1)",
                      }}
                    />
                    {/* Circle */}
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-500 relative"
                      style={{
                        background: i < progressStep
                          ? "linear-gradient(135deg, #06B6D4, #818CF8)"
                          : i === progressStep
                            ? "rgba(34,211,238,0.15)"
                            : "rgba(31,41,55,1)",
                        border: i <= progressStep
                          ? "1px solid rgba(34,211,238,0.6)"
                          : "1px solid rgba(71,85,105,0.5)",
                        boxShadow: i === progressStep
                          ? "0 0 16px rgba(34,211,238,0.4)"
                          : i < progressStep
                            ? "0 0 10px rgba(34,211,238,0.2)"
                            : "none",
                        color: i <= progressStep ? "#22D3EE" : "#475569",
                      }}
                    >
                      {i < progressStep ? (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                    {/* Right connector */}
                    <div
                      className="flex-1 h-px transition-all duration-500"
                      style={{
                        background: i === visibleSteps.length - 1 ? "transparent"
                          : i < progressStep
                            ? "linear-gradient(to right, #22D3EE, #06B6D4)"
                            : "rgba(31,41,55,1)",
                      }}
                    />
                  </div>
                  <span
                    className="text-xs transition-colors duration-300 text-center"
                    style={{ color: i <= progressStep ? "#22D3EE" : "#475569" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* ── Glass card ────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(34,211,238,0.12)",
                boxShadow: "0 0 0 1px rgba(34,211,238,0.05), 0 32px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Top glowline */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: "linear-gradient(to right, transparent, rgba(34,211,238,0.6), rgba(129,140,248,0.4), transparent)",
                }}
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none"
                style={{ borderTop: "1px solid rgba(34,211,238,0.4)", borderLeft: "1px solid rgba(34,211,238,0.4)", borderRadius: "16px 0 0 0" }}
              />
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none"
                style={{ borderTop: "1px solid rgba(34,211,238,0.4)", borderRight: "1px solid rgba(34,211,238,0.4)", borderRadius: "0 16px 0 0" }}
              />
              <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none"
                style={{ borderBottom: "1px solid rgba(34,211,238,0.2)", borderLeft: "1px solid rgba(34,211,238,0.2)", borderRadius: "0 0 0 16px" }}
              />
              <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
                style={{ borderBottom: "1px solid rgba(34,211,238,0.2)", borderRight: "1px solid rgba(34,211,238,0.2)", borderRadius: "0 0 16px 0" }}
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="p-8"
                >
                  {/* Step label */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-1 h-5 rounded-full"
                      style={{ background: "linear-gradient(to bottom, #06B6D4, #818CF8)" }}
                    />
                    <p
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{
                        background: "linear-gradient(to right, #06B6D4, #818CF8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Step {progressStep + 1} — {visibleSteps[progressStep]}
                    </p>
                  </div>

                  {renderStep()}

                  {/* Navigation */}
                  <div className={`flex mt-8 gap-3 ${step > 0 ? "justify-between" : "justify-end"}`}>
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={back}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm transition-all duration-300"
                        style={{
                          border: "1px solid rgba(71,85,105,0.5)",
                          color: "#64748B",
                          background: "rgba(255,255,255,0.02)",
                          backdropFilter: "blur(8px)",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)";
                          e.currentTarget.style.color = "#22D3EE";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = "rgba(71,85,105,0.5)";
                          e.currentTarget.style.color = "#64748B";
                        }}
                      >
                        <ArrowLeft size={15} />
                        Back
                      </button>
                    )}
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={next}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm"
                        style={{
                          background: "linear-gradient(to right, #06B6D4, #22D3EE, #818CF8)",
                          color: "#020617",
                          transition: "box-shadow 0.3s ease, transform 0.2s ease",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.boxShadow = "0 0 0 1px rgba(34,211,238,0.5), 0 0 24px rgba(34,211,238,0.35)";
                          e.currentTarget.style.transform = "scale(1.03)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        Continue
                        <ArrowRight size={15} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm"
                        style={{
                          background: "linear-gradient(to right, #06B6D4, #22D3EE, #818CF8)",
                          color: "#020617",
                          transition: "box-shadow 0.3s ease, transform 0.2s ease",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.boxShadow = "0 0 0 1px rgba(34,211,238,0.5), 0 0 24px rgba(34,211,238,0.35)";
                          e.currentTarget.style.transform = "scale(1.03)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        Submit Registration
                        <ArrowRight size={15} />
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </div>
  </div>
);
}