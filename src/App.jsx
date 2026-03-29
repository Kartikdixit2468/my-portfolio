import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import Header from './Header';
import Footer from './Footer';
import Hero from './HeroSection';
import About from './About';
import Projects from './Projects';
import TerminalLoader from './TerminalLoader';
import './App.css';


const BackgroundAnimation = () => (
  <div className="background-animation">
    <span className="float_text text_one">HTML</span>
    <span className="float_text text_two">&lt;/&gt;</span>
    <span className="float_text text_three">{`{CSS}`}</span>
    <span className="float_text text_four">JS</span>
    {[...Array(10)].map((_, i) => (
      <div key={i} className="dot"></div>
    ))}
  </div>
);

// Main App Component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);
  const siteRef = useRef(null);

  useEffect(() => {
    const delayMs = 3500;

    gsap.set(siteRef.current, { autoAlpha: 0, y: 20 });

    const timer = setTimeout(() => {
      const timeline = gsap.timeline({
        onComplete: () => setIsLoading(false),
      });

      timeline
        .to(loaderRef.current, {
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power2.inOut',
        })
        .to(
          siteRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.1',
        );
    }, delayMs);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div ref={loaderRef} className="loader-overlay">
          <TerminalLoader />
        </div>
      )}

      <div ref={siteRef} className="site-shell">
        <BackgroundAnimation />
        <div id="top-header" className="container_main">
          <Header />
          <main className="content_main">
            <Hero />
            <About />
            <Projects />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
