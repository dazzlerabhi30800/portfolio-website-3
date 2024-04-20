import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  if (!show) return;
  return (
    <section className="py-20 px-6 md:px-20 flex justify-center items-center text-center  h-screen2">
      <h2 className="font-bolder text-[2.8rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[1.2] md:leading-[1.5] flex-1 md:flex-initial md:w-[1300px]">
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
