const ProjectComp = ({ project }) => {
  return (
    <div className="project--comp flex flex-col bg-gradient-to-b from-gray-800 to-gray-900 w-full gap-8 justify-between items-center rounded-lg shadow-lg border-2 border-transparent hover:border-fuchsia-600 hover:scale-1 transition ease-in-out duration-300">
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="w-full h-[280px] object-cover rounded-t-lg"
      />
      <h3 className="mx-4 font-caveat text-lg md:text-2xl">{project.name}</h3>
      <div className="flex items-center gap-5 pb-8 font-jersey text-xl md:text-3xl border-none">
        <a
          href={project.github}
          className="py-1 px-4 rounded-md shadow-md  text-white github--link hover:bg-indigo-500"
          target="_blank"
        >
          Github
        </a>
        <a
          href={project.live}
          target="_blank"
          className="py-1 px-4 rounded-md shadow-md text-white live--link hover:bg-pink-400"
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectComp;
