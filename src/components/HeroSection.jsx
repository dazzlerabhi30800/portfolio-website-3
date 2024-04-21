const HeroSection = () => {
  return (
    <section className="flex items-center flex-1 font-pacifico">
      <h2 className="font-bolder text-[3.3rem] md:text-[3.9rem] lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[5.5rem] leading-[1.4] md:leading-[1.7] md:w-[26ch] my-0">
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
