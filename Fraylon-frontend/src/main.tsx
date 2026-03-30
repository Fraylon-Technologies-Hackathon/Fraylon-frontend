import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ExplorePage from "./components/ExplorePage";
import RegisterPage from "./components/RegisterPage";
import "./index.css";
import FullAboutPage from "./components/About/FullAboutPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explore/:slug" element={<ExplorePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about-details" element={<FullAboutPage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);