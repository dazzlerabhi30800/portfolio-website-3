import { useEffect, useRef, useState } from "react";

export default function Utils() {
  const [resize, setResize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const ref = useRef();

  function handleWidth() {
    setResize({
      ...resize,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return { resize, ref };
}
