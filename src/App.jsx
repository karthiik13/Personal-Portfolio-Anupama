import { Suspense } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Certifications from "./components/Certifications";
import LoadingSpinner from './components/LoadingSpinner';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <div className="bg-background">
      <Suspense fallback={<LoadingSpinner />}>
        <PageTransition>
          <Navbar />
          <Hero />
          <AboutMe />
          <Projects />
          <Skills />
          <Certifications/>
          <Contact/>
          <Footer />
        </PageTransition>
      </Suspense>
    </div>
  );
}

export default App;


