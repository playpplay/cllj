import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import AncestralGroups from './components/AncestralGroups';
import ComparisonTable from './components/ComparisonTable';
import TimelineDiagram from './components/TimelineDiagram';
import MigrationMap from './components/MigrationMap';
import References from './components/References';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-serif">
      <Navigation scrollY={scrollY} />
      <Hero />
      <Introduction />
      <AncestralGroups />
      <ComparisonTable />
      <TimelineDiagram />
      <MigrationMap />
      <References />
      <Footer />
    </div>
  );
}

export default App;
