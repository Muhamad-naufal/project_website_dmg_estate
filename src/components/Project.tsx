import React from "react";

const Project = () => {
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
      <div className="">
        <button>
          <img src="/left_arrow.svg" alt="previous" />
        </button>
      </div>
    </div>
  );
};

export default Project;
