import "./App.css";
import { useEffect, useState } from "react";
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
  const [show, setShow] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 500,
      anchorPlacement: "bottom-center",
    });
    document.fonts.ready.then((res) => {
      if (res.status) {
        setShow((prev) => (prev = true));
      }
    });
  }, []);
  if (!show) return;
  return (
    <>
      <main className="flex flex-col items-center px-6 md:px-10 lg:px-20 w-full">
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
