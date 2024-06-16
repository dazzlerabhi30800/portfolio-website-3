import React from "react";
import data from "../data/ProjectData.json";
import ProjectComp from "./ProjectComp";

const Projects = () => {
  const projects = data.projectData;
  return (
    <section className="flex flex-col py-10 md:pb-20 gap-20 my-10">
      <h2 className="gradient-text bg-gradient-to-r from-orange-400 to-fuchsia-500 text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold font-anton p-5 my-10 tracking-wide">
        Projects
      </h2>
      <div className="projects--wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-20 lg:gap-24 lg:w-[90%] xl:w-[100%] 2xl:w-[95%] mx-auto">
        {projects.map((project, index) => {
          return <ProjectComp project={project} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
