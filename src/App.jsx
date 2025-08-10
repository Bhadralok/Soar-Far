import { Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Home from "./Pages/Home.jsx";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const alertedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mobile = window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(mobile);

    if (mobile && !alertedRef.current) {
      alert("Uhhhh! you can only view this on a pc though... sorry🐰");
      alertedRef.current = true;
    }
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen text-center p-4">
        <p className="text-xl font-semibold">
          Uhhhh! You can only view this on a PC though... sorry 🐰
        </p>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
