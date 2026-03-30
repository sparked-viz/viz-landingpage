import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureShowcase } from './components/FeatureShowcase';
import { ValueProp } from './components/ValueProp';
import { Sparky } from './components/Sparky';
import { AboutUs } from './components/AboutUs';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { EarlyAccessModal } from './components/EarlyAccessModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <FeatureShowcase />
        <ValueProp />
        {/* <DemoSection /> */}
        <Sparky />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
      <EarlyAccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
