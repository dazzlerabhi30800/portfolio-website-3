import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/Profile";
import GithubCalendar from "./components/GithubCalendar";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
const locomotive = new LocomotiveScroll({
  lenisOptions: {
    duration: 1.3,
    smoothTouch: true,
  },
});
// import AOS from "aos";
// import "aos/dist/aos.css";

function App() {
  return (
    <>
      <main className="main--comp flex flex-col items-center px-6 md:px-10 lg:px-20 w-full">
        <div className="flex flex-col h-screen">
          <Header />
          <HeroSection />
        </div>
        <ProfileSection />
        <GithubCalendar />
        <Projects />
        <Certifications />
        <Resume />
        <Skills />
      </main>
      <Footer locomotive={locomotive} />
    </>
  );
}

export default App;
