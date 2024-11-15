import React, { useEffect, useState } from "react";
import { projectsData } from "../../data/projectData";

const Project = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth > 1024) {
        setCardsToShow(projectsData.length);
      } else if (window.innerWidth > 768) {
        setCardsToShow(4);
      } else if (window.innerWidth > 640) {
        setCardsToShow(2);
      } else if (window.innerWidth > 320) {
        setCardsToShow(1);
      }
    };
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="project"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Project{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Selesai
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Projek yang telah selesai oleh DMG Estate
      </p>
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src="/left_arrow.svg" alt="previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src="/right_arrow.svg" alt="previous" />
        </button>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentProject * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span>||</span> {project.location}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
