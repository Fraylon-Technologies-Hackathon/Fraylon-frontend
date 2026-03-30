
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThemesSection from './components/ThemesSection';
import Insights from './components/Insights';
import CTASection from './components/CTASection';
import Sponsor from './components/Sponsor';
import "./index.css";
import Schedule from './components/Schedule';
import AboutHero from './components/About/AboutHero';

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutHero/>
      <ThemesSection />
      <Insights />
      <Schedule />
      <CTASection />
      <Sponsor />
      <Footer />

    </div>
  );
};

export default App;