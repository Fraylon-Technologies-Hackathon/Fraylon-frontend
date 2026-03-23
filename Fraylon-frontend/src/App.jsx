
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThemesSection from './components/ThemesSection';
import Insights from './components/Insights';
import WhySection from './components/WhySection';
import ScheduleSection from './components/ScheduleSection';
import FAQSection from './components/FAQSection';
import Sponsorsection from './components/Sponsorsection';
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ThemesSection />
      <Insights/>
      <WhySection />
      <ScheduleSection/>
      <FAQSection/>
      <Sponsorsection/>
      <Footer />
    
    </div>
  );
};

export default App;