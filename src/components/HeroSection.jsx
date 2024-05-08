const HeroSection = () => {
  return (
    <section className="flex items-center flex-1 font-jersey">
      <h2
        data-aos="zoom-in-left"
        data-aos-duration="700"
        data-aos-anchor=".gradient--text"
        className="font-bolder text-[3rem] md:text-[4.1rem] lg:text-[4.9rem] xl:text-[6rem] 2xl:text-[7rem] leading-[1.4] md:leading-[1.7] md:w-[26ch] my-0"
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
      </h2>
    </section>
  );
};

export default HeroSection;
