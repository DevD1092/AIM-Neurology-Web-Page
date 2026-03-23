import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { ResearchAreas } from './sections/ResearchAreas';
import { Publications } from './sections/Publications';
import { Team } from './sections/Team';
import { Partners } from './sections/Partners';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ResearchAreas />
        <Publications />
        <Team />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
