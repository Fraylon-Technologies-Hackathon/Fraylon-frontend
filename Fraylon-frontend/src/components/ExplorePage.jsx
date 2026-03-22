import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Brain, Globe, Shield, Link2, Lightbulb, ArrowLeft } from "lucide-react";

const themeData = {
  "ai-ml": {
    title: "Artificial Intelligence & Machine Learning",
    icon: Brain,
    description:
      "Artificial Intelligence and Machine Learning are transforming every industry — from healthcare diagnostics to financial fraud detection. In this track, you'll build systems that learn, adapt, and make intelligent decisions. Whether it's a predictive model, a generative AI app, or a computer vision pipeline, this track challenges you to push the boundaries of what machines can do.",
    problemStatements: [
      { id: "AI-01", title: "Fake News Detector", difficulty: "Medium", description: "Build an NLP-powered system that classifies news articles as real or fake using transformer-based models. The system should provide a confidence score and highlight key phrases that influenced the decision." },
      { id: "AI-02", title: "AI-Powered Resume Screener", difficulty: "Medium", description: "Create a tool that parses resumes and ranks candidates based on a given job description using semantic similarity. It should handle various resume formats and explain its ranking decisions." },
      { id: "AI-03", title: "Real-Time Emotion Recognition", difficulty: "Hard", description: "Develop a computer vision application that detects and tracks human emotions in real time via webcam. The system should identify at least 6 emotion states and display live analytics." },
      { id: "AI-04", title: "Personalized Learning Assistant", difficulty: "Easy", description: "Build a chatbot that quizzes students on a topic, adapts question difficulty based on performance, and generates a personalized study plan using an LLM." },
      { id: "AI-05", title: "Medical Image Classifier", difficulty: "Hard", description: "Train a convolutional neural network to classify X-ray or MRI images into diagnostic categories. The model should highlight regions of interest using Grad-CAM and display confidence intervals." },
      { id: "AI-06", title: "Smart Traffic Management System", difficulty: "Hard", description: "Design an AI system that analyzes live traffic camera feeds to dynamically adjust signal timings, reduce congestion, and prioritize emergency vehicles using object detection and reinforcement learning." },
      { id: "AI-07", title: "Voice-Based Task Manager", difficulty: "Medium", description: "Build a voice-controlled productivity app that transcribes spoken commands, extracts tasks and deadlines using NLP, and syncs them to a calendar or task board automatically." },
      { id: "AI-08", title: "AI Code Review Assistant", difficulty: "Medium", description: "Create a tool that reviews pull requests, detects bugs, suggests refactoring opportunities, and checks for security vulnerabilities using a fine-tuned code LLM integrated into a GitHub workflow." },
      { id: "AI-09", title: "Crop Disease Detection App", difficulty: "Medium", description: "Develop a mobile-friendly web app where farmers can upload photos of their crops to receive an instant AI diagnosis of diseases or pest infestations along with treatment recommendations." },
      { id: "AI-10", title: "Automated Meeting Summarizer", difficulty: "Easy", description: "Build a tool that ingests meeting transcripts or audio recordings and generates structured summaries including key decisions, action items, and owners — exportable to Notion or Google Docs." },
      { id: "AI-11", title: "Predictive Maintenance Dashboard", difficulty: "Hard", description: "Create a system that ingests sensor data from industrial machines, trains a time-series model to predict failures before they occur, and displays risk scores on a real-time dashboard." },
      { id: "AI-12", title: "AI-Powered Legal Document Analyzer", difficulty: "Hard", description: "Build a tool that parses legal contracts, identifies risky clauses, summarizes obligations, and flags missing standard terms — making legal review accessible to non-lawyers." },
      { id: "AI-13", title: "Sign Language Interpreter", difficulty: "Hard", description: "Develop a real-time sign language recognition system using computer vision that translates hand gestures into text or speech, bridging communication for the hearing impaired." },
      { id: "AI-14", title: "Personalized News Aggregator", difficulty: "Easy", description: "Create a news app that learns a user's reading preferences over time using collaborative filtering and delivers a daily briefing with bias indicators and source diversity scores." },
      { id: "AI-15", title: "AI Debate Coach", difficulty: "Medium", description: "Build an interactive platform where users practice debates against an AI opponent. The AI should argue both sides of a topic, evaluate the user's arguments, and provide structured feedback on logic and rhetoric." },
      { id: "AI-16", title: "Sentiment-Driven Stock Screener", difficulty: "Hard", description: "Develop a tool that aggregates financial news and social media sentiment for a list of stocks, correlates sentiment trends with price movements, and generates buy/hold/sell signals." },
      { id: "AI-17", title: "Multimodal Recipe Generator", difficulty: "Medium", description: "Build an app where users can photograph the ingredients in their fridge and receive AI-generated recipe suggestions complete with step-by-step instructions, nutritional info, and substitution tips." },
    ],
  },
  "web-dev": {
    title: "Web Development",
    icon: Globe,
    description:
      "The web is the world's most accessible platform. This track is all about crafting fast, beautiful, and functional web experiences. From full-stack applications to micro-frontends, from REST APIs to real-time systems — if it runs in a browser or serves one, it belongs here. Build something people will actually use.",
    problemStatements: [
      { id: "WEB-01", title: "Collaborative Whiteboard App", difficulty: "Hard", description: "Build a real-time collaborative whiteboard where multiple users can draw, annotate, and add sticky notes simultaneously. Use WebSockets for live sync and support room-based sessions." },
      { id: "WEB-02", title: "Open Source Job Board", difficulty: "Medium", description: "Create a job board specifically for open source projects where maintainers can post contributor roles and developers can apply. Include skill-based filtering and GitHub OAuth login." },
      { id: "WEB-03", title: "Accessibility Audit Tool", difficulty: "Medium", description: "Develop a browser extension or web app that scans any webpage and generates a detailed accessibility report with WCAG compliance scores and actionable fix suggestions." },
      { id: "WEB-04", title: "Dev Portfolio Generator", difficulty: "Easy", description: "Build a tool where developers enter their GitHub username and it auto-generates a beautiful portfolio page by pulling their repos, contributions, and pinned projects via the GitHub API." },
      { id: "WEB-05", title: "Real-Time Code Interview Platform", difficulty: "Hard", description: "Create a platform for conducting live coding interviews with a shared editor, video call integration, test case runner, and session recording — similar to CoderPad but open source." },
      { id: "WEB-06", title: "Micro SaaS Landing Page Builder", difficulty: "Medium", description: "Build a drag-and-drop landing page builder targeted at indie hackers. It should support custom domains, A/B testing for headlines, and built-in analytics for conversion tracking." },
      { id: "WEB-07", title: "Progressive Web App for Offline Study", difficulty: "Medium", description: "Develop a PWA that lets students download course materials, flashcards, and quizzes for offline use. It should sync progress when connectivity is restored using background sync." },
      { id: "WEB-08", title: "API Mocking & Testing Sandbox", difficulty: "Medium", description: "Create a web-based tool where developers can define API schemas, auto-generate mock endpoints with realistic fake data, and run automated contract tests against live or staged APIs." },
      { id: "WEB-09", title: "Multi-Tenant Blogging Platform", difficulty: "Hard", description: "Build a blogging platform where each user gets their own subdomain, custom theme, and analytics dashboard. Support markdown editing, SEO metadata management, and newsletter subscriptions." },
      { id: "WEB-10", title: "Browser-Based IDE", difficulty: "Hard", description: "Develop a lightweight in-browser code editor with syntax highlighting, a file tree, live preview for HTML/CSS/JS, and the ability to run Python snippets via WebAssembly." },
      { id: "WEB-11", title: "Event Ticketing System", difficulty: "Medium", description: "Create a full-stack ticketing platform where organizers can create events, set ticket tiers, and manage attendees. Include QR code generation for tickets and a check-in scanner interface." },
      { id: "WEB-12", title: "Real-Time Sports Score Tracker", difficulty: "Easy", description: "Build a responsive web app that displays live scores, standings, and match statistics for a chosen sport using a public API. Support push notifications for score updates on subscribed matches." },
      { id: "WEB-13", title: "Crowdsourced City Issue Reporter", difficulty: "Medium", description: "Develop a civic tech app where residents can report local issues like potholes or broken streetlights on an interactive map. Include upvoting, status tracking, and municipal dashboard views." },
      { id: "WEB-14", title: "Personal Finance Dashboard", difficulty: "Medium", description: "Build a web app that aggregates bank transactions via open banking APIs, categorizes spending automatically, and visualizes monthly budgets with trend analysis and savings goal tracking." },
      { id: "WEB-15", title: "Remote Team Standup Bot", difficulty: "Easy", description: "Create a web app that schedules daily async standups for remote teams, collects answers to custom questions, and compiles a digest report sent via email or Slack at a set time each day." },
      { id: "WEB-16", title: "Interactive Data Story Builder", difficulty: "Hard", description: "Build a tool that lets journalists and researchers upload datasets and create scrollytelling data stories with animated charts, annotations, and embeddable widgets — no coding required." },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    icon: Shield,
    description:
      "In an increasingly connected world, security is not optional — it's essential. This track challenges you to think like both an attacker and a defender. Build tools that detect intrusions, protect data, expose vulnerabilities, and educate users about digital safety. Every line of code you write here could protect someone's privacy or critical infrastructure.",
    problemStatements: [
      { id: "CY-01", title: "Phishing Website Detector", difficulty: "Medium", description: "Create a browser extension that analyzes URLs and page content in real time to detect phishing attempts. Use ML classifiers trained on known phishing datasets and display a risk score to the user." },
      { id: "CY-02", title: "Password Strength Analyzer", difficulty: "Easy", description: "Build a tool that evaluates password strength beyond simple rules — checking against breach databases, common patterns, and entropy — and suggests stronger alternatives with explanations." },
      { id: "CY-03", title: "Network Intrusion Monitor", difficulty: "Hard", description: "Develop a lightweight agent that monitors network traffic on a local machine, flags anomalous patterns using statistical analysis, and sends real-time alerts with packet-level details." },
      { id: "CY-04", title: "Secure File Sharing App", difficulty: "Medium", description: "Build an end-to-end encrypted file sharing application where files are encrypted client-side before upload, and only the intended recipient with the correct key can decrypt and download them." },
      { id: "CY-05", title: "CVE Vulnerability Dashboard", difficulty: "Medium", description: "Create a dashboard that tracks newly published CVEs, filters them by severity and affected software stack, and sends alerts when vulnerabilities match a user's registered technology profile." },
      { id: "CY-06", title: "Social Engineering Awareness Trainer", difficulty: "Easy", description: "Build an interactive simulation platform that trains employees to recognize social engineering attacks — phishing emails, vishing calls, pretexting — through gamified scenario-based exercises." },
      { id: "CY-07", title: "Zero-Trust Access Controller", difficulty: "Hard", description: "Develop a proof-of-concept zero-trust network access system where every request is authenticated and authorized based on device posture, user identity, and behavioral context before granting resource access." },
      { id: "CY-08", title: "Dark Web Mention Monitor", difficulty: "Hard", description: "Build a tool that monitors Tor-accessible forums and paste sites for mentions of a given organization's domain, email addresses, or credentials, and sends immediate breach alerts." },
      { id: "CY-09", title: "Container Security Scanner", difficulty: "Medium", description: "Create a CLI tool that scans Docker images for known vulnerabilities in installed packages, misconfigurations, and hardcoded secrets — and integrates into a CI/CD pipeline as a quality gate." },
      { id: "CY-10", title: "Ransomware Behavior Detector", difficulty: "Hard", description: "Develop a host-based agent that monitors file system activity for patterns characteristic of ransomware — mass encryption, shadow copy deletion — and automatically isolates the process before damage spreads." },
      { id: "CY-11", title: "Multi-Factor Auth Authenticator App", difficulty: "Medium", description: "Build a cross-platform TOTP authenticator app with encrypted cloud backup of secrets, biometric unlock, and a security audit feature that flags accounts still using SMS-based 2FA." },
      { id: "CY-12", title: "API Security Testing Suite", difficulty: "Medium", description: "Create an automated tool that crawls a REST API, generates test cases for OWASP API Top 10 vulnerabilities, and produces a detailed security report with reproduction steps." },
      { id: "CY-13", title: "Insider Threat Detection System", difficulty: "Hard", description: "Develop a UEBA system that baselines normal employee data access patterns and raises anomaly alerts when unusual exfiltration or privilege escalation behavior is detected." },
      { id: "CY-14", title: "Encrypted Messaging App", difficulty: "Medium", description: "Build a Signal-protocol-inspired messaging app with end-to-end encryption, forward secrecy, disappearing messages, and no server-side message storage — with a focus on metadata minimization." },
      { id: "CY-15", title: "IoT Device Security Auditor", difficulty: "Hard", description: "Create a tool that scans a local network for IoT devices, identifies their make and model, checks for known firmware vulnerabilities, and reports default credential usage and open ports." },
      { id: "CY-16", title: "Bug Bounty Report Assistant", difficulty: "Easy", description: "Build a web app that helps security researchers write structured, professional bug bounty reports. It should guide them through impact assessment, reproduction steps, and CVSS scoring with AI-assisted descriptions." },
    ],
  },
  blockchain: {
    title: "Blockchain / Web3",
    icon: Link2,
    description:
      "Blockchain technology is redefining trust, ownership, and transparency. This track invites you to build on decentralized infrastructure — smart contracts, DAOs, NFT platforms, DeFi protocols, or identity systems. Whether you're on Ethereum, Solana, or a Layer 2, this track is your playground to experiment with the future of the internet.",
    problemStatements: [
      { id: "BC-01", title: "Decentralized Voting System", difficulty: "Hard", description: "Build a tamper-proof voting application on a public blockchain where votes are transparent yet voter identities are anonymous. Include wallet-based authentication and real-time result tallying." },
      { id: "BC-02", title: "NFT Certificate Platform", difficulty: "Medium", description: "Create a platform where educational institutions can issue course completion certificates as NFTs on-chain. Students should be able to share a verifiable link that anyone can authenticate without a middleman." },
      { id: "BC-03", title: "On-Chain Crowdfunding", difficulty: "Medium", description: "Develop a smart-contract-based crowdfunding platform where funds are released to the creator only when milestones are verified by backers, eliminating the need for a trusted intermediary." },
      { id: "BC-04", title: "Crypto Portfolio Tracker", difficulty: "Easy", description: "Build a Web3 dashboard that connects to a user's wallet and displays a real-time portfolio breakdown, transaction history, gas fee analytics, and DeFi yield positions across protocols." },
      { id: "BC-05", title: "Decentralized Freelance Marketplace", difficulty: "Hard", description: "Create a trustless freelance platform where payments are held in escrow smart contracts, released on milestone approval, and disputes are resolved through a decentralized arbitration mechanism." },
      { id: "BC-06", title: "DAO Governance Dashboard", difficulty: "Medium", description: "Build a governance interface for a DAO where token holders can create proposals, delegate votes, participate in on-chain voting, and track the execution of passed proposals." },
      { id: "BC-07", title: "Cross-Chain Asset Bridge", difficulty: "Hard", description: "Develop a proof-of-concept bridge that allows users to transfer ERC-20 tokens between two EVM-compatible testnets using a lock-and-mint mechanism with a relayer and fraud proof window." },
      { id: "BC-08", title: "On-Chain Royalty Splitter", difficulty: "Medium", description: "Build a smart contract system for music or art collaborations where every secondary sale automatically splits royalties among co-creators according to predefined on-chain percentages." },
      { id: "BC-09", title: "Blockchain Supply Chain Tracker", difficulty: "Medium", description: "Create a dApp that records product journey milestones on-chain so end consumers can verify the authenticity and origin of physical goods via QR code." },
      { id: "BC-10", title: "Soulbound Identity System", difficulty: "Hard", description: "Implement a non-transferable soulbound token system for digital identity where credentials like KYC verification, professional licenses, or reputation scores are issued and revocable by authorized issuers." },
      { id: "BC-11", title: "DeFi Yield Aggregator", difficulty: "Hard", description: "Build a protocol that automatically allocates user deposits across multiple DeFi lending platforms to maximize yield, rebalancing based on real-time APY data with a gas-optimized strategy." },
      { id: "BC-12", title: "Tokenized Real Estate Platform", difficulty: "Hard", description: "Develop a platform that fractionalizes real estate ownership into ERC-1155 tokens, allowing small investors to buy shares, receive proportional rental income, and trade on a secondary market." },
      { id: "BC-13", title: "Decentralized Content Subscription", difficulty: "Medium", description: "Create a Web3 alternative to Patreon where creators publish token-gated content and subscribers receive payments streamed in real time via a payment protocol." },
      { id: "BC-14", title: "On-Chain Prediction Market", difficulty: "Hard", description: "Build a decentralized prediction market where users stake tokens on real-world outcomes resolved by a decentralized oracle, with winnings distributed automatically by smart contract." },
      { id: "BC-15", title: "Gas Fee Optimizer", difficulty: "Medium", description: "Develop a tool that analyzes pending Ethereum transactions and recommends optimal gas settings based on mempool data, time sensitivity, and historical confirmation time distributions." },
      { id: "BC-16", title: "Web3 Expense Manager for DAOs", difficulty: "Easy", description: "Build a treasury management dApp for DAOs that tracks on-chain spending, categorizes transactions, generates financial reports, and allows multi-sig approval workflows for large expenditures." },
    ],
  },
  "open-innovation": {
    title: "Open Innovation",
    icon: Lightbulb,
    description:
      "Not every great idea fits neatly into a category. The Open Innovation track is for the builders who see a problem in the world and refuse to wait for someone else to fix it. Use any technology, any stack, any approach — as long as your solution addresses a real human need and demonstrates genuine creative thinking.",
    problemStatements: [
      { id: "OI-01", title: "Community Food Waste Reducer", difficulty: "Medium", description: "Build a platform that connects restaurants and grocery stores with surplus food to nearby shelters and individuals in need. Include real-time listing, geolocation matching, and pickup scheduling." },
      { id: "OI-02", title: "Mental Health Check-In App", difficulty: "Easy", description: "Create a daily mood tracking app that uses journaling prompts, sentiment analysis, and streak-based encouragement to help users monitor their mental wellbeing with full data privacy." },
      { id: "OI-03", title: "Local Skills Exchange Network", difficulty: "Medium", description: "Develop a hyperlocal platform where community members can trade skills without money changing hands, using a reputation-based credit system." },
      { id: "OI-04", title: "Disaster Relief Coordination Tool", difficulty: "Hard", description: "Build a real-time coordination dashboard for disaster relief volunteers that maps resource needs, available supplies, and volunteer locations — enabling faster, more organized emergency response." },
      { id: "OI-05", title: "Elder Care Companion App", difficulty: "Medium", description: "Create a simple, voice-first app for elderly users that provides medication reminders, connects them with family via one-tap video calls, and gently monitors for signs of cognitive decline." },
      { id: "OI-06", title: "Rural Telemedicine Platform", difficulty: "Hard", description: "Build a low-bandwidth telemedicine app optimized for rural areas with poor connectivity. It should support asynchronous consultations, offline symptom logging, and integration with community health workers." },
      { id: "OI-07", title: "Civic Budget Transparency Tool", difficulty: "Medium", description: "Develop a web app that ingests public municipal budget data and presents it in an interactive format — letting citizens explore how their tax money is allocated and track year-over-year changes." },
      { id: "OI-08", title: "Refugee Integration Assistant", difficulty: "Medium", description: "Create a multilingual mobile app that helps refugees navigate local services — housing, healthcare, legal aid, language classes — with step-by-step guidance and community forums." },
      { id: "OI-09", title: "Sustainable Shopping Advisor", difficulty: "Easy", description: "Build a browser extension that overlays sustainability scores on e-commerce product pages — rating items on carbon footprint, ethical sourcing, and packaging — and suggests greener alternatives." },
      { id: "OI-10", title: "Women Safety Alert System", difficulty: "Medium", description: "Develop a mobile app with a discreet SOS trigger that shares live location with trusted contacts, records audio evidence, and notifies nearby registered community guardians in an emergency." },
      { id: "OI-11", title: "Digital Literacy Platform for Seniors", difficulty: "Easy", description: "Create an interactive learning platform that teaches senior citizens digital basics through bite-sized lessons with large text, audio narration, and patient AI tutoring." },
      { id: "OI-12", title: "Peer-to-Peer Tutoring Marketplace", difficulty: "Medium", description: "Build a platform that matches students who need help in a subject with verified peer tutors at their institution. Include session scheduling, video integration, payment handling, and review systems." },
      { id: "OI-13", title: "Urban Green Space Mapper", difficulty: "Easy", description: "Develop a crowdsourced map of urban green spaces and community gardens where citizens can discover, review, and contribute new locations — integrated with local government open data." },
      { id: "OI-14", title: "Carbon Footprint Tracker", difficulty: "Medium", description: "Create a personal carbon footprint app that tracks emissions from travel, diet, and energy use, benchmarks against national averages, and gamifies reduction with challenges and community leaderboards." },
      { id: "OI-15", title: "Blind-Accessible Navigation Aid", difficulty: "Hard", description: "Build a smartphone app for visually impaired users that uses computer vision and spatial audio to describe the surrounding environment, identify obstacles, read signs, and provide turn-by-turn indoor navigation." },
      { id: "OI-16", title: "Gig Worker Rights Assistant", difficulty: "Medium", description: "Develop a chatbot that helps gig economy workers understand their legal rights, calculate fair pay, generate invoice templates, file tax estimates, and access relevant government support schemes." },
      { id: "OI-17", title: "Language Preservation Archive", difficulty: "Hard", description: "Build a collaborative platform for documenting endangered languages — recording native speakers, tagging vocabulary with translations, building interactive dictionaries, and generating learning exercises for future generations." },
      { id: "OI-18", title: "Student Mental Health Early Warning System", difficulty: "Hard", description: "Create an opt-in platform for universities that identifies students at risk of mental health crises through anonymized behavioral signals and proactively connects them with counselors." },
    ],
  },
};

const difficultyColor = {
  Easy:   "text-fray-success-primary bg-fray-success-primary/10 border-fray-success-primary/30",
  Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  Hard:   "text-red-400 bg-red-400/10 border-red-400/30",
};

export default function ExplorePage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const theme = themeData[slug];

  if (!theme) {
    return (
      <div className="min-h-screen bg-fray-bg-base text-fray-text-primary flex flex-col items-center justify-center gap-4">
        <p className="text-fray-text-subtle text-lg">Theme not found.</p>
        <button
          onClick={() => navigate("/")}
          style={{ background: "linear-gradient(to right, #22D3EE, #38BDF8, #A5B4FC)" }}
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

        {/* Header */}
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
    background: "linear-gradient(to right, #06B6D4, #22D3EE, #818CF8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  {theme.title}
</h1>
          </div>
        </div>

        {/* Description */}
        <p className="text-fray-text-subtle text-base leading-relaxed mb-12 max-w-3xl">
          {theme.description}
        </p>

        {/* Problem count badge */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-fray-text-primary flex items-center gap-2">
            <span
              className="w-1 h-6 rounded-full"
              style={{ background: "linear-gradient(to bottom, #22D3EE, #A5B4FC)" }}
            />
            Problem Statements
          </h2>
          <span className="text-xs text-fray-text-subtle bg-fray-border-soft px-3 py-1 rounded-full">
            {theme.problemStatements.length} problems
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-5">
          {theme.problemStatements.map((ps) => (
            <div
  key={ps.id}
  className="relative bg-fray-bg-card border border-fray-border-soft rounded-2xl p-6
  hover:border-cyan-400/80
  transition-all duration-300 group overflow-hidden cursor-pointer"
  style={{ transition: "border-color 0.3s ease, box-shadow 0.3s ease" }}
  onMouseEnter={e => {
    e.currentTarget.style.boxShadow =
      "0 0 0 1px rgba(34,211,238,0.5), 0 0 24px rgba(34,211,238,0.25), 0 0 48px rgba(56,189,248,0.12)";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.boxShadow = "none";
  }}
>
  {/* Animated gradient wash on hover */}
  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
    style={{
      background: "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(34,211,238,0.07) 50%, rgba(129,140,248,0.05) 100%)",
    }}
  />

  {/* Left accent bar */}
  <div
    className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"
    style={{ background: "linear-gradient(to bottom, #06B6D4, #818CF8)" }}
  />

  <div className="flex items-start justify-between gap-4 mb-3">
    <div className="flex items-center gap-3 flex-wrap">
      <span
        className="text-xs font-mono text-fray-text-subtle bg-fray-border-soft px-2 py-0.5 rounded
        group-hover:text-cyan-300 group-hover:border group-hover:border-cyan-400/40
        transition-all duration-300"
      >
        {ps.id}
      </span>
      <h3
        className="font-semibold text-base"
        style={{
          background: "linear-gradient(to right, #06B6D4, #22D3EE, #38BDF8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {ps.title}
      </h3>
    </div>
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border flex-shrink-0 ${difficultyColor[ps.difficulty]}`}>
      {ps.difficulty}
    </span>
  </div>

  <p className="text-fray-text-subtle text-sm leading-relaxed group-hover:text-fray-text-secondary transition-colors duration-300">
    {ps.description}
  </p>
</div>
          ))}
        </div>

      </div>
    </div>
  );
}