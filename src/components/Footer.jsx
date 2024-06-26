import { FaGithub, FaTwitter, FaLinkedin, FaChevronUp } from "react-icons/fa";

const Footer = ({ locomotive }) => {
  return (
    <div className="footer--wrapper w-full">
      <footer className="footer flex flex-wrap items-center gap-10 w-full py-10 md:py-20 px-4 md:px-10 justify-between text-center w-full">
        <h4>AC</h4>
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
        <button
          onClick={() =>
            // window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            locomotive.scrollTo("top", { duration: 0.9 })
          }
          className="border-2 border-sky-300 p-2 md:p-3 hover:border-sky-500"
        >
          <FaChevronUp />
        </button>
        <span className="font-poppins text-sm md:text-2xl flex item-center text-gray-400 flex-1 basis-full text-center justify-center tracking-wider">
          &copy; 2024 Copyright Abhishek Choudhary
        </span>
      </footer>
    </div>
  );
};

export default Footer;
