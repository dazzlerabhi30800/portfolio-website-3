import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <section className="flex flex-col items-center min-h-screen justify-between py-10 w-full font-poppins">
      <h2 className="text-3xl md:text-[3.5rem] font-bold font-anton p-5 gradient-text bg-gradient-to-r from-yellow-300 to-green-500 to-70%">Github Calendar</h2>
      <div className="calendar">
        <GitHubCalendar
          username="dazzlerabhi30800"
          style={{ width: "auto" }}
          blockRadius={3}
          colorScheme="dark"
          blockSize={13}
          showWeekdayLabels={true}
          year={2024}
        />
      </div>
      <div className="calendar">
        <GitHubCalendar
          username="dazzlerabhi30800"
          blockRadius={3}
          style={{ width: "100%", overflowX: "hidden" }}
          colorScheme="dark"
          blockSize={13}
          showWeekdayLabels={true}
          year={2023}
        />
      </div>
      <div className="calendar">
        <GitHubCalendar
          colorScheme="dark"
          style={{ width: "100%" }}
          blockSize={13}
          username="dazzlerabhi30800"
          year={2022}
          showWeekdayLabels={true}
        />
      </div>
    </section>
  );
};

export default GithubCalendar;
