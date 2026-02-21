import { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Skills from './components/Skills';
import LifeChecklist from './components/LifeChecklist';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <main>
        <Hero isLoaded={!loading} />
        <Bio />
        <Experience />
        <Skills />
        <LifeChecklist />
        <Footer />
      </main>
    </>
  );
}

export default App;
