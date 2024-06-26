import { motion } from "framer-motion";

import SkillData from "../data/skills.json";
const initial = { opacity: 0, scale: 0 };
const view = { opacity: 1, scale: 1 };
// const transition = { duration: 0.3, type: "tween" };
const Skills = () => {
  const skills = SkillData.skills;
  return (
    <section className="flex flex-col py-10 my-10 md:pb-20 gap-20 justify-center items-center">
      <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold font-anton p-5 gradient-text bg-gradient-to-r from-yellow-400 from-0% to-green-400 to-50% tracking-wider animate-bgChange">
        Skills
      </h2>
      <div className="flex flex-wrap items-center gap-20 md:gap-24 font-jersey text-xl md:text-2xl justify-center md:w-[80%] lg:w-[65%] xl:w-[55%]">
        {skills.map((skill, index) => (
          <motion.div
            initial={initial}
            whileInView={view}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              type: "spring",
              delay: index * 0.1,
            }}
            key={skill.title}
            className="flex flex-col gap-2 items-center"
          >
            <img
              src={skill.image}
              className="w-[90px] h-[100px] object-contain"
              alt={skill.title}
            />
            <h3>{skill.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
