import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Hero from './HeroSection';
import About from './About';
import Projects from './Projects';
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
  return (
    <>
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
    </>
  );
};

export default App;
