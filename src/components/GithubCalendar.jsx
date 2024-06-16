import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const GithubCalendar = () => {
  const initial = { opacity: 0, y: -700 };
  const view = { opacity: 1, y: 0 };
  const transition = { duration: 0.4, type: "tween" };
  return (
    <section className="calendar--section flex flex-col items-center min-h-screen justify-between py-10 w-full font-poppins">
      <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold font-anton p-5 gradient-text bg-gradient-to-r from-yellow-300 from-15% to-green-500 to-70%">
        Github Calendar
      </h2>
      <motion.div
        initial={initial}
        whileInView={view}
        transition={transition}
        className="calendar"
      >
        <GitHubCalendar
          username="dazzlerabhi30800"
          style={{ width: "auto" }}
          blockRadius={3}
          colorScheme="dark"
          blockSize={13}
          showWeekdayLabels={true}
          year={2024}
        />
      </motion.div>
      <motion.div
        initial={initial}
        whileInView={view}
        transition={transition}
        className="calendar"
      >
        <GitHubCalendar
          username="dazzlerabhi30800"
          blockRadius={3}
          style={{ width: "100%", overflowX: "hidden" }}
          colorScheme="dark"
          blockSize={13}
          showWeekdayLabels={true}
          year={2023}
        />
      </motion.div>

      <motion.div
        initial={initial}
        whileInView={view}
        transition={transition}
        className="calendar"
      >
        <GitHubCalendar
          colorScheme="dark"
          style={{ width: "100%" }}
          blockSize={13}
          username="dazzlerabhi30800"
          year={2022}
          showWeekdayLabels={true}
        />
      </motion.div>
    </section>
  );
};

export default GithubCalendar;
