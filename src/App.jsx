import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/Profile";
import GithubCalendar from "./components/GithubCalendar";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    const handleAnimate = () => {
      console.log("function started");
      AOS.init({
        duration: 500,
      });
      console.log("function ended");
    };
    return () => {
      handleAnimate();
    };
  }, [AOS]);
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
      <Footer />
    </>
  );
}

export default App;
