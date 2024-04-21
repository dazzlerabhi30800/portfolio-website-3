import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/Profile";
import GithubCalendar from "./components/GithubCalendar";

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.fonts.ready.then((res) => {
      if (res.status) {
        setShow((prev) => (prev = true));
      }
    });
  }, []);
  if (!show) return <h1>Loading...</h1>;
  return (
    <>
      <main className="flex flex-col items-center px-6 md:px-10 lg:px-20 w-full">
        <div className="flex flex-col h-screen">
          <Header />
          <HeroSection />
        </div>
        <ProfileSection />
        <GithubCalendar />
      </main>
    </>
  );
}

export default App;
