import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import {
  themeData,
  difficultyColor,
  type ProblemStatement,
} from "../components/constant/themeData";

export default function ExplorePage() {

  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const theme = slug ? themeData[slug] : undefined;

  if (!theme) {
    return (
      <div className="min-h-screen bg-fray-bg-base text-fray-text-primary flex flex-col items-center justify-center gap-4">
        <p className="text-fray-text-subtle text-lg">Theme not found.</p>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "linear-gradient(to right, #22D3EE, #38BDF8, #A5B4FC)",
          }}
          className="text-sm px-4 py-2 rounded-md text-fray-bg-base font-semibold transition hover:opacity-90"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const Icon = theme.icon;

  return (
    <div className="min-h-screen bg-fray-bg-base text-fray-text-primary">
      {/* Top bar */}
      <div className="border-b border-fray-border-soft px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-fray-text-subtle hover:text-fray-accent-primary transition text-sm"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <div className="flex items-start gap-4 mb-6">
          <div
            className="p-3 rounded-xl border border-fray-accent-primary/40 flex-shrink-0"
            style={{ background: "rgba(34,211,238,0.08)" }}
          >
            <Icon size={28} className="text-fray-accent-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-1 text-fray-accent-primary">
              Track
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{
                background:
                  "linear-gradient(to right, #06B6D4, #22D3EE, #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {theme.title}
            </h1>
          </div>
        </div>

    
        <p className="text-fray-text-subtle text-base leading-relaxed mb-12 max-w-3xl">
          {theme.description}
        </p>

       
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-fray-text-primary flex items-center gap-2">
            <span
              className="w-1 h-6 rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, #22D3EE, #A5B4FC)",
              }}
            />
            Problem Statements
          </h2>
          <span className="text-xs text-fray-text-subtle bg-fray-border-soft px-3 py-1 rounded-full">
            {theme.problemStatements.length} problems
          </span>
        </div>

      
        <div className="grid gap-5">
     
          {theme.problemStatements.map((ps: ProblemStatement) => (
            <div
              key={ps.id}
              className="relative bg-fray-bg-card border border-fray-border-soft rounded-2xl p-6
              hover:border-cyan-400/80
              transition-all duration-300 group overflow-hidden cursor-pointer"
              style={{
                transition:
                  "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 1px rgba(34,211,238,0.5), 0 0 24px rgba(34,211,238,0.25), 0 0 48px rgba(56,189,248,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
           
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(34,211,238,0.07) 50%, rgba(129,140,248,0.05) 100%)",
                }}
              />

         
              <div
                className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"
                style={{
                  background:
                    "linear-gradient(to bottom, #06B6D4, #818CF8)",
                }}
              />

              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-mono text-fray-text-subtle bg-fray-border-soft px-2 py-0.5 rounded">
                    {ps.id}
                  </span>

                  <h3
                    className="font-semibold text-base"
                    style={{
                      background:
                        "linear-gradient(to right, #06B6D4, #22D3EE, #38BDF8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {ps.title}
                  </h3>
                </div>

             
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border flex-shrink-0 ${
                    difficultyColor[ps.difficulty]
                  }`}
                >
                  {ps.difficulty}
                </span>
              </div>

              <p className="text-fray-text-subtle text-sm leading-relaxed">
                {ps.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}