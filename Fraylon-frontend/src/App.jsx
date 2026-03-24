
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThemesSection from './components/ThemesSection';
import Insights from './components/Insights';
import WhySection from './components/WhySection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import Sponsor from './components/Sponsor';
import "./index.css";
import Schedule from './components/Schedule';

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ThemesSection />
      <Insights />
      <WhySection />
      <Schedule />
      <CTASection />
      <FAQSection />
      <Sponsor />
      <Footer />

    </div>
  );
};

export default App;