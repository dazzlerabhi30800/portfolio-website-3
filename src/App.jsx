import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/Profile";

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
      <Header />
      <HeroSection />
      <ProfileSection />
    </>
  );
}

export default App;
