
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TrainingDetails from './components/TrainingDetails';
import Registration from './components/Registration';
import Partners from './components/Partners';
import Gallery from './components/Gallery';
import Hosts from './components/Hosts';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="bg-white">
          <About />
        </section>
        
        <section id="details" className="bg-gray-50">
          <TrainingDetails />
        </section>
        
        <section id="registration" className="bg-white">
          <Registration />
        </section>
        
        <section id="partners" className="bg-gray-50">
          <Partners />
        </section>
        
        <section id="gallery" className="bg-white">
          <Gallery />
        </section>

        <section id="hosts" className="bg-white">
          <Hosts />
        </section>
        
        <section id="contact" className="bg-gray-50">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
