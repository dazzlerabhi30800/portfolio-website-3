const ProfileSection = () => {
  return (
    <section className="flex justify-start md:justify-center gap-10 xl:gap-0 items-center text-center md:text-left min-h-screen flex-col md:flex-row">
      <div
        data-aos="zoom-in-up"
        data-aos-anchor-placement="center-bottom"
        className="relative z-40 profile--img flex-1 flex md:justify-center items-center"
      >
        <img
          src="/profile.jpg"
          alt="Abhishek Choudhary"
          className="w-full md:w-[400px] h-[400px] md:h-[470px] lg:h-[500px] rounded-[10%]"
        />
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-anchor-placement="center-bottom"
        className="flex-1"
      >
        <h3 className="text-lg md:text-[1.2rem] lg:text-[1.6rem] 2xl:text-[1.8rem] leading-[1.6] md:leading-[1.1] lg:leading-[1.3]  text-gray-400 font-jersey">
          "I am a <span className="highlight">Frontend Developer</span> based in
          India with an experience of <span className="highlight">2yrs</span>.
          Passionate Frontend Developer crafting digital experiences with code.
          🚀 Proficient in{" "}
          <span className="highlight">
            HTML, CSS, and JavaScript,React, Redux Toolkit, TailwindCSS
          </span>{" "}
          with a keen eye for design and user experience. 💻 Constantly
          exploring new technologies and frameworks to stay ahead in the dynamic
          world of web development. 🌐 Committed to writing clean, efficient
          code and creating pixel-perfect designs that delight users. Let's
          build something amazing together!. One thing I have learned most in
          this field is that,{" "}
          <span className="highlight">don't just make it but make it work</span>
          ☑️".
        </h3>
      </div>
    </section>
  );
};

export default ProfileSection;
