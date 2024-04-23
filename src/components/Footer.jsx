import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer--wrapper w-full">
      <footer className="footer flex flex-wrap items-center gap-10 w-full py-20 px-10 justify-between w-full">
        <h4 className="font-anton">AC</h4>
        <a
          target="_target"
          href="mailto:abhisingh72065@gmail.com?subject=Hiring%20for%20opportunity&body=We%20want%20to%20hire%20you."
          className="font-caveat underline text-2xl md:text-3xl transition ease-in-out duration-200 hover:text-pink-300"
        >
          abhisingh72065@gmail.com
        </a>
        <ul className="flex items-center gap-14 text-3xl md:text-4xl">
          <li>
            <a
              href="https://github.com/dazzlerabhi30800"
              className="text-purple-400"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Abhishek30800"
              target="_blank"
              className="text-cyan-300"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abhishek-choudhary-00679621b/"
              target="_blank"
              className="text-blue-500"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <span className="font-poppins text-xl md:text-2xl flex item-center text-gray-400 flex-1 basis-full text-center justify-center tracking-wider">
          &copy; 2024 Copyright Abhishek Choudhary
        </span>
      </footer>
    </div>
  );
};

export default Footer;
