import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilmModal } from './components/FilmModal';
import { Affiliations } from './components/Affiliations';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { ProjectIntro } from './components/ProjectIntro';
import { Architecture } from './components/Architecture';
import { Interiors } from './components/Interiors';
import { Residences } from './components/Residences';
import { Amenities } from './components/Amenities';
import { Location } from './components/Location';
import { PaymentPlan } from './components/PaymentPlan';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [filmOpen, setFilmOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero onWatchFilm={() => setFilmOpen(true)} />
        <Affiliations />
        <About />
        <Portfolio />
        <ProjectIntro />
        <Architecture />
        <Interiors />
        <Residences />
        <Amenities />
        <Location />
        <PaymentPlan />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <FilmModal open={filmOpen} onClose={() => setFilmOpen(false)} />
    </div>
  );
}
