import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { DemoSection } from './components/DemoSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <DemoSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
