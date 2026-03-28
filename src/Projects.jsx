import React from "react";

const Projects = () => {
  // Array of projects makes it easy to add/remove them later
  const projectImages = [
    "/project1.png", "/project2.png", "/project3.png", 
    "/project4.png", "/project5.png", "/project6.png"
  ];

  return (
    <section id="projects-section" className="projects_section">
      <h2 className="section_title">
        <span className="section_title_accent">P</span>rojects
      </h2>
      <div className="projects_grid_container">
        {projectImages.map((src, index) => (
          <div className="project_item" key={index}>
            <img src={src} alt={`Project ${index + 1} Thumbnail`} />
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;


