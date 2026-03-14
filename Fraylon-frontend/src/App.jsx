
import './App.css'
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThemesSection from './components/ThemesSection';
import WhySection from './components/WhySection';
import FAQSection from './components/FAQSection';
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ThemesSection />
      <WhySection />
      <CTASection />
      <FAQSection/>
      <Footer />
    </div>
  );
};

export default App;