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
    <section className="flex flex-col py-10 md:pb-20 gap-20 my-10">
      <h2 className="gradient-text bg-gradient-to-r from-orange-400 to-fuchsia-500 text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold font-anton p-5 my-10 tracking-wide">
        Projects
      </h2>
      <div
        data-aos="zoom-out-up"
        data-aos-delay="100"
        data-aos-anchor-placement="top-center"
        className="projects--wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-20 lg:gap-24 lg:w-[90%] xl:w-[100%] 2xl:w-[95%] mx-auto"
      >
        {projects.map((project, index) => {
          if (resize.width > 700) {
            return (
              <HoverCard scaleFactor={0.5} key={index}>
                <ProjectComp project={project} />
              </HoverCard>
            );
          }
          return <ProjectComp project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
