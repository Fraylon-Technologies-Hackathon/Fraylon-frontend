/* ThemeData.ts */

import { Brain, Globe, Shield, Link2, Lightbulb } from "lucide-react";

/* ================= TYPES ================= */

export type Difficulty = "Easy" | "Medium" | "Hard";

export interface ProblemStatement {
  id: string;
  title: string;
  difficulty: Difficulty;
  description: string;
}

export interface Theme {
  title: string;
  icon: any;
  description: string;
  problemStatements: ProblemStatement[];
}

export type ThemeDataType = Record<string, Theme>;

/* ================= DATA ================= */

export const themeData: ThemeDataType = {
  "ai-ml": {
    title: "Artificial Intelligence & Machine Learning",
    icon: Brain,
    description:
      "Artificial Intelligence and Machine Learning are transforming every industry — from healthcare diagnostics to financial fraud detection...",
    problemStatements: [
      { id: "AI-01", title: "Fake News Detector", difficulty: "Medium", description: "Build an NLP-powered system that classifies news articles as real or fake..." },
      { id: "AI-02", title: "AI-Powered Resume Screener", difficulty: "Medium", description: "Create a tool that parses resumes and ranks candidates..." },
      { id: "AI-03", title: "Real-Time Emotion Recognition", difficulty: "Hard", description: "Develop a computer vision application that detects emotions..." },
      { id: "AI-04", title: "Personalized Learning Assistant", difficulty: "Easy", description: "Build a chatbot that quizzes students and adapts difficulty..." },
      { id: "AI-05", title: "Medical Image Classifier", difficulty: "Hard", description: "Train a CNN to classify medical images..." },
      { id: "AI-06", title: "Smart Traffic Management System", difficulty: "Hard", description: "Design AI to optimize traffic signals..." },
      { id: "AI-07", title: "Voice-Based Task Manager", difficulty: "Medium", description: "Build a voice-controlled productivity app..." },
      { id: "AI-08", title: "AI Code Review Assistant", difficulty: "Medium", description: "Create a tool to review pull requests..." },
      { id: "AI-09", title: "Crop Disease Detection App", difficulty: "Medium", description: "Develop an app for farmers to detect diseases..." },
      { id: "AI-10", title: "Automated Meeting Summarizer", difficulty: "Easy", description: "Summarize meetings into structured notes..." },
      { id: "AI-11", title: "Predictive Maintenance Dashboard", difficulty: "Hard", description: "Predict machine failures using time-series data..." },
      { id: "AI-12", title: "AI-Powered Legal Document Analyzer", difficulty: "Hard", description: "Analyze legal contracts and flag risks..." },
      { id: "AI-13", title: "Sign Language Interpreter", difficulty: "Hard", description: "Translate sign language into text/speech..." },
      { id: "AI-14", title: "Personalized News Aggregator", difficulty: "Easy", description: "Recommend news using user preferences..." },
      { id: "AI-15", title: "AI Debate Coach", difficulty: "Medium", description: "Practice debates against AI..." },
      { id: "AI-16", title: "Sentiment-Driven Stock Screener", difficulty: "Hard", description: "Analyze sentiment for stock predictions..." },
      { id: "AI-17", title: "Multimodal Recipe Generator", difficulty: "Medium", description: "Generate recipes from images..." },
    ],
  },

  "web-dev": {
    title: "Web Development",
    icon: Globe,
    description: "Build fast, beautiful, and functional web experiences...",
    problemStatements: [
      { id: "WEB-01", title: "Collaborative Whiteboard App", difficulty: "Hard", description: "Real-time drawing app..." },
      { id: "WEB-02", title: "Open Source Job Board", difficulty: "Medium", description: "Job board for OSS..." },
      { id: "WEB-03", title: "Accessibility Audit Tool", difficulty: "Medium", description: "Scan sites for WCAG..." },
      { id: "WEB-04", title: "Dev Portfolio Generator", difficulty: "Easy", description: "Auto portfolio from GitHub..." },
      { id: "WEB-05", title: "Real-Time Code Interview Platform", difficulty: "Hard", description: "Live coding platform..." },
      { id: "WEB-06", title: "Micro SaaS Landing Page Builder", difficulty: "Medium", description: "Drag & drop builder..." },
      { id: "WEB-07", title: "Offline Study PWA", difficulty: "Medium", description: "Offline learning app..." },
      { id: "WEB-08", title: "API Mocking Tool", difficulty: "Medium", description: "Mock APIs easily..." },
      { id: "WEB-09", title: "Multi-Tenant Blog Platform", difficulty: "Hard", description: "Blog with subdomains..." },
      { id: "WEB-10", title: "Browser IDE", difficulty: "Hard", description: "Code editor in browser..." },
      { id: "WEB-11", title: "Event Ticketing System", difficulty: "Medium", description: "Manage events..." },
      { id: "WEB-12", title: "Sports Score Tracker", difficulty: "Easy", description: "Live sports app..." },
      { id: "WEB-13", title: "City Issue Reporter", difficulty: "Medium", description: "Report civic issues..." },
      { id: "WEB-14", title: "Finance Dashboard", difficulty: "Medium", description: "Track expenses..." },
      { id: "WEB-15", title: "Standup Bot", difficulty: "Easy", description: "Async standups..." },
      { id: "WEB-16", title: "Data Story Builder", difficulty: "Hard", description: "Visual storytelling tool..." },
    ],
  },

  cybersecurity: {
    title: "Cybersecurity",
    icon: Shield,
    description: "Build tools that protect systems and data...",
    problemStatements: [
      { id: "CY-01", title: "Phishing Detector", difficulty: "Medium", description: "Detect phishing sites..." },
      { id: "CY-02", title: "Password Analyzer", difficulty: "Easy", description: "Check password strength..." },
      { id: "CY-03", title: "Intrusion Monitor", difficulty: "Hard", description: "Monitor network traffic..." },
      { id: "CY-04", title: "Secure File Sharing", difficulty: "Medium", description: "Encrypted file sharing..." },
      { id: "CY-05", title: "CVE Dashboard", difficulty: "Medium", description: "Track vulnerabilities..." },
      { id: "CY-06", title: "Social Engineering Trainer", difficulty: "Easy", description: "Train users..." },
      { id: "CY-07", title: "Zero Trust System", difficulty: "Hard", description: "Zero-trust access..." },
      { id: "CY-08", title: "Dark Web Monitor", difficulty: "Hard", description: "Monitor breaches..." },
      { id: "CY-09", title: "Container Scanner", difficulty: "Medium", description: "Scan Docker images..." },
      { id: "CY-10", title: "Ransomware Detector", difficulty: "Hard", description: "Detect ransomware..." },
      { id: "CY-11", title: "Authenticator App", difficulty: "Medium", description: "TOTP app..." },
      { id: "CY-12", title: "API Security Tool", difficulty: "Medium", description: "Test APIs..." },
      { id: "CY-13", title: "Insider Threat System", difficulty: "Hard", description: "Detect insider threats..." },
      { id: "CY-14", title: "Encrypted Messaging", difficulty: "Medium", description: "Secure messaging..." },
      { id: "CY-15", title: "IoT Auditor", difficulty: "Hard", description: "Scan IoT devices..." },
      { id: "CY-16", title: "Bug Bounty Assistant", difficulty: "Easy", description: "Write reports..." },
    ],
  },

  blockchain: {
    title: "Blockchain / Web3",
    icon: Link2,
    description: "Build decentralized applications...",
    problemStatements: [
      { id: "BC-01", title: "Voting System", difficulty: "Hard", description: "Blockchain voting..." },
      { id: "BC-02", title: "NFT Certificates", difficulty: "Medium", description: "Issue NFTs..." },
      { id: "BC-03", title: "Crowdfunding", difficulty: "Medium", description: "Smart contracts..." },
      { id: "BC-04", title: "Portfolio Tracker", difficulty: "Easy", description: "Track crypto..." },
      { id: "BC-05", title: "Freelance Marketplace", difficulty: "Hard", description: "Escrow system..." },
      { id: "BC-06", title: "DAO Dashboard", difficulty: "Medium", description: "Governance UI..." },
      { id: "BC-07", title: "Cross-Chain Bridge", difficulty: "Hard", description: "Transfer tokens..." },
      { id: "BC-08", title: "Royalty Splitter", difficulty: "Medium", description: "Split payments..." },
      { id: "BC-09", title: "Supply Chain Tracker", difficulty: "Medium", description: "Track goods..." },
      { id: "BC-10", title: "Identity System", difficulty: "Hard", description: "Soulbound tokens..." },
      { id: "BC-11", title: "Yield Aggregator", difficulty: "Hard", description: "Maximize yield..." },
      { id: "BC-12", title: "Real Estate Tokens", difficulty: "Hard", description: "Tokenize assets..." },
      { id: "BC-13", title: "Content Subscription", difficulty: "Medium", description: "Web3 Patreon..." },
      { id: "BC-14", title: "Prediction Market", difficulty: "Hard", description: "Betting markets..." },
      { id: "BC-15", title: "Gas Optimizer", difficulty: "Medium", description: "Optimize gas..." },
      { id: "BC-16", title: "DAO Expense Manager", difficulty: "Easy", description: "Track spending..." },
    ],
  },

  "open-innovation": {
    title: "Open Innovation",
    icon: Lightbulb,
    description: "Solve real-world problems creatively...",
    problemStatements: [
      { id: "OI-01", title: "Food Waste Reducer", difficulty: "Medium", description: "Reduce waste..." },
      { id: "OI-02", title: "Mental Health App", difficulty: "Easy", description: "Track mood..." },
      { id: "OI-03", title: "Skill Exchange", difficulty: "Medium", description: "Trade skills..." },
      { id: "OI-04", title: "Disaster Tool", difficulty: "Hard", description: "Relief coordination..." },
      { id: "OI-05", title: "Elder Care App", difficulty: "Medium", description: "Help elderly..." },
      { id: "OI-06", title: "Telemedicine", difficulty: "Hard", description: "Remote healthcare..." },
      { id: "OI-07", title: "Budget Tool", difficulty: "Medium", description: "Gov spending..." },
      { id: "OI-08", title: "Refugee Assistant", difficulty: "Medium", description: "Help refugees..." },
      { id: "OI-09", title: "Shopping Advisor", difficulty: "Easy", description: "Eco ratings..." },
      { id: "OI-10", title: "Women Safety App", difficulty: "Medium", description: "SOS alerts..." },
      { id: "OI-11", title: "Senior Literacy", difficulty: "Easy", description: "Teach seniors..." },
      { id: "OI-12", title: "Tutoring Platform", difficulty: "Medium", description: "Match tutors..." },
      { id: "OI-13", title: "Green Mapper", difficulty: "Easy", description: "Map parks..." },
      { id: "OI-14", title: "Carbon Tracker", difficulty: "Medium", description: "Track emissions..." },
      { id: "OI-15", title: "Blind Navigation", difficulty: "Hard", description: "Assist visually impaired..." },
      { id: "OI-16", title: "Gig Worker Assistant", difficulty: "Medium", description: "Help workers..." },
      { id: "OI-17", title: "Language Archive", difficulty: "Hard", description: "Preserve languages..." },
      { id: "OI-18", title: "Mental Health System", difficulty: "Hard", description: "Early warning system..." },
    ],
  },
};

/* ================= DIFFICULTY COLORS ================= */

export const difficultyColor: Record<Difficulty, string> = {
  Easy: "text-fray-success-primary bg-fray-success-primary/10 border-fray-success-primary/30",
  Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  Hard: "text-red-400 bg-red-400/10 border-red-400/30",
};




