import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureShowcase } from './components/FeatureShowcase';
import { EaseOfUse } from './components/EaseOfUse';
import { SaveTime } from './components/SaveTime';
import { SeeWhatsPossible } from './components/SeeWhatsPossible';
import { CreatorStories } from './components/CreatorStories';
import { AboutUs } from './components/AboutUs';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeatureShowcase />
        <EaseOfUse />
        <SaveTime />
        <SeeWhatsPossible />
        <CreatorStories />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
