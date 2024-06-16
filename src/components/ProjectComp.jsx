import { motion } from "framer-motion";
const ProjectComp = ({ project }) => {
  const initial = { opacity: 0, scale: 0 };
  const view = { opacity: 1, scale: 1 };
  const transition = { duration: 0.3, type: "tween" };
  return (
    <motion.div
      initial={initial}
      whileInView={view}
      transition={transition}
      className="project--comp flex flex-col bg-gradient-to-b from-gray-800 to-gray-900 w-full gap-8 justify-between items-center rounded-lg shadow-lg border-2 border-gray-600 hover:border-fuchsia-400 transition ease-in-out duration-300"
    >
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="w-full h-[280px] object-cover rounded-t-lg"
      />
      <h3 className="mx-4 font-caveat text-xl md:text-2xl">{project.name}</h3>
      <div className="flex items-center gap-5 pb-8 font-jersey text-xl md:text-3xl border-none">
        {project.github && (
          <a
            href={project.github}
            className="py-1 px-4 rounded-md shadow-md text-white hover:bg-indigo-500 github--link "
            target="_blank"
          >
            Github
          </a>
        )}
        <a
          href={project.live}
          target="_blank"
          className="py-1 px-4 rounded-md shadow-md text-white hover:bg-pink-400 live--link "
        >
          Live
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectComp;
