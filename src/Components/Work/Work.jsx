import React, { useState } from 'react';
import { projects } from '../../constants';

function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModel = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
       className="py-24  px-[5vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-white text-3xl sm:text-4xl font-bold">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 text-lg mt-4 font-semibold">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>

      {/* Project Grid */}
      {/* <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-gray-900 border border-white backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(130,69,236,0.3)] hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 text-center">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>
              <div className="mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-10">
  {projects.map((project) => (
    <div
      key={project.id}
      onClick={() => handleOpenModal(project)}
      className="bg-gray-900 border border-white backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(130,69,236,0.3)] hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
       style={{ minHeight: "250px" }} // 📌 Keeps width larger than height
    >
      {/* Image */}
      <div className="p-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-32 object-cover rounded-xl" // 📌 Smaller height
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2 text-center">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm line-clamp-3">
          {project.description}
        </p>
        <div className="mt-auto">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Modal */}
        {selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
    {/* Modal Box */}
    <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto relative">
      
      {/* Close Button */}
      <button
        onClick={() => setSelectedProject(null)} // ✅ Directly closes modal
        className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-purple-500 z-50"
      >
        &times;
      </button>

      {/* Project Image */}
      <div className="flex justify-center px-4 pt-12">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-[80%] max-h-48 object-contain rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold text-white mb-2">{selectedProject.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{selectedProject.description}</p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {selectedProject.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-purple-800 text-gray-400 px-3 py-1 rounded-lg text-xs font-semibold"
          >
            View Code
          </a>
          <a
            href={selectedProject.webapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-800 text-white px-3 py-1 rounded-lg text-xs font-semibold"
          >
            View Live
          </a>
        </div>
      </div>
    </div>
  </div>
)}


    </section>
  );
}

export default Work;
