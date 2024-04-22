import React from "react";
import data from "../data/ProjectData.json";
import ProjectComp from "./ProjectComp";
import Utils from "../utils/utils";
import HoverCard from "@darenft/react-3d-hover-card";
import "@darenft/react-3d-hover-card/dist/style.css";

const Projects = () => {
  const projects = data.projectData;
  const { resize } = Utils();
  return (
    <section className="flex flex-col py-10 md:pb-20 gap-20">
      <h2 className="gradient-text bg-gradient-to-r from-red-300 to-blue-300 text-4xl md:text-[4rem] lg:text-[4.5rem] font-bold font-anton p-5 my-10">
        Projects
      </h2>
      <div className="projects--wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-18 lg:w-[90%] xl:w-[100%] 2xl:w-[95%] mx-auto">
        {projects.map((project, index) => {
          if (resize > 700) {
            return (
              <HoverCard scaleFactor={1.1} key={index}>
                <ProjectComp project={project} />
              </HoverCard>
            );
          }
          return <ProjectComp key={index} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
