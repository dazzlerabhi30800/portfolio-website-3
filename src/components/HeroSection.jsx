import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex items-center flex-1 font-jersey">
      <motion.h2
        // data-aos="zoom-in-left"
        // data-aos-duration="700"
        // data-aos-anchor=".gradient--text"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="font-bolder text-[4rem] md:text-[4.5rem] lg:text-[4.9rem] xl:text-[6rem] 2xl:text-[7rem] leading-[1.4] md:leading-[1.7] md:w-[26ch] my-0"
      >
        Hello, I am{" "}
        <span className="gradient-text bg-gradient-to-r from-cyan-300 to-blue-500">
          Abhishek Choudhary
        </span>
        , a{" "}
        <span className="gradient-text bg-gradient-to-r from-pink-400 to-purple-400">
          Frontend Developer
        </span>{" "}
        based in India.
      </motion.h2>
    </section>
  );
};

export default HeroSection;
