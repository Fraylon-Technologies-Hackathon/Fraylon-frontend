

import React from "react";
import OriginStory from "./OriginStory";
import WhySection from "../WhySection";
import Footer from "../Footer";
import FAQSection from "../FAQSection";
import AboutSection from "./AboutSection";


const FullAboutPage = () => {


  return (
    <main>
      <OriginStory />
      <AboutSection/>
      <WhySection/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}

export default FullAboutPage;