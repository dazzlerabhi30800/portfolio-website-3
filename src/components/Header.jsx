import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="p-4 md:px-20 flex items-center justify-between w-full">
      <h1>AC</h1>
      <a
        target="_target"
        href="https://mail.google.com/mail/u/abhisingh72065@gmail.com/#inbox?compose=new"
        className="hidden sm:block font-kalam underline text-lg transition ease-in-out duration-200 hover:text-pink-300"
      >
        abhisingh72065@gmail.com
      </a>
      <ul className="flex items-center gap-14 text-2xl md:text-3xl lg:text-4xl">
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
    </header>
  );
}
