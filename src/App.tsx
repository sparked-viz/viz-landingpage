import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureShowcase } from './components/FeatureShowcase';
import { ValueProp } from './components/ValueProp';
import { Sparky } from './components/Sparky';
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
        <ValueProp />
        {/* <DemoSection /> */}
        <Sparky />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
