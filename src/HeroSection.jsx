import React from "react";

const Hero = () => (
  <section className="profile_main">
    <div className="profile_text_container">
      <p className="profile_intro">Hey, I'm Kartik Dixit 👋</p>
      <h1 className="profile_title_one">FullStack</h1>
      <h1 className="profile_title_two">Developer</h1>
      <p className="profile_description">
        I'm a FullStack Developer. I'll help you tranform your 
        beautiful imagination to websites that your users will love.
      </p>
      <div className="profile_buttons_container">
        <a href="https://docs.google.com/forms/d/1ipnnLwxyt5HRbyoWZ9xuuSynJ8XpRpG9nxZ3VHcQA0Y/" className="button_primary">Get In Touch</a>
        <a href="https://github.com/Kartikdixit2468" className="button_secondary">Browse Projects</a>
      </div>
    </div>
    <div className="profile_image_container">
      <div className="image_background_circle"></div>
      <img src="/kartik.jpg" alt="Kartik Dixit Portrait" className="profile_image" />
    </div>
  </section>
);

export default Hero;