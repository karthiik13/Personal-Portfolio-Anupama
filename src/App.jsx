import { Suspense } from 'react';
import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from "./components/sections/Contact";
import Footer from './components/common/Footer';
import Certifications from "./components/sections/Certifications";
import LoadingSpinner from './components/common/LoadingSpinner';
import PageTransition from './components/common/PageTransition';

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


