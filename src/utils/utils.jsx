import { useEffect, useRef, useState } from "react";

export default function Utils() {
  const [resize, setResize] = useState(window.innerWidth);
  const ref = useRef();

  function handleWidth() {
    setResize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return { resize, ref };
}
