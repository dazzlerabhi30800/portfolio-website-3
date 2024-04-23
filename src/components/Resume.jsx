import { FaDownload } from "react-icons/fa";
import ResumePDF from "../../public/resume/resume.pdf";
const Resume = () => {
  return (
    <section className="flex flex-col py-10 my-10 md:pb-20 gap-20">
      <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold font-anton p-5 gradient-text bg-gradient-to-r from-fuchsia-400 from-40% to-orange-400 to-70%">
        Resume 
      </h2>
      <button
        className="font-poppins flex items-center gap-2 py-4 px-12 text-2xl md:text-3xl rounded-md shadow-md bg-gradient-to-r from-rose-400 to-fuchsia-500 w-fit mx-auto font-bold transition ease-in-out duration-300 hover:from-red-500 hover:to-fuchsia-700"
        onClick={() => window.open(ResumePDF)}
      >
        <FaDownload />
        Download
      </button>
      <img
        className="sm:w-[70%] mx-auto"
        src="./resume/resume.jpg"
        alt="Resume - Abhishek Choudhary"
      />
    </section>
  );
};

export default Resume;
