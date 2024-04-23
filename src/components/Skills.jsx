import SkillData from "../data/skills.json";
const Skills = () => {
  const skills = SkillData.skills;
  return (
    <section className="flex flex-col py-10 my-10 md:pb-20 gap-20 justify-center">
      <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold font-anton p-5 gradient-text bg-gradient-to-r from-yellow-400 from-50% to-green-400 tracking-wider animate-bgChange">
        Skills
      </h2>
      <div className="flex flex-wrap items-center gap-20 font-jersey text-xl md:text-2xl justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            <img
              src={skill.image}
              className="w-[90px] h-[100px] object-contain"
              alt={skill.title}
            />
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
