import React from "react";

const Certifications = () => {
  return (
    <section className="flex flex-col py-10 my-10 md:pb-20 gap-20">
      <h2 className="text-3xl md:text-[4rem] lg:text-[4.5rem] font-bold font-anton p-5 gradient-text bg-gradient-to-r from-[#4773FB] from-30% to-[#02C2FA] to-70%">
        Certifications
      </h2>
      <div className="flex flex-col gap-10">
        <a
          href="https://www.freecodecamp.org/certification/dazzlerabhi30800/javascript-algorithms-and-data-structures"
          target="_blank"
          className="w-full p-6 sm:p-10 hover:bg-white/10 transition ease-in-out duration-300"
        >
          <img
            src="./certifications/js-algo.png"
            alt="Javascript data structures & algorithms certificate"
            className="w-full object-cover"
          />
        </a>
        <a
          href="https://www.freecodecamp.org/certification/dazzlerabhi30800/front-end-development-libraries"
          target="_blank"
          className="w-full p-6 sm:p-10 hover:bg-white/10 transition ease-in-out duration-300"
        >
          <img
            src="./certifications/frontend-certificate.png"
            alt="Javascript data structures & algorithms certificate"
            className="w-full object-cover"
          />
        </a>
      </div>
    </section>
  );
};

export default Certifications;
