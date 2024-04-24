import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between w-full">
      <h1>AC</h1>
      <a
        target="_target"
        href="mailto:abhisingh72065@gmail.com?subject=Hiring%20for%20opportunity&body=We%20want%20to%20hire%20you."
        className="hidden sm:block font-caveat underline text-2xl md:text-3xl transition ease-in-out duration-200 hover:text-pink-300"
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
