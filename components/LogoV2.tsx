import React, { useEffect, useState } from "react";
import LogoDark1 from "../src/assets/img/Logo-AnternV2.png";
import '../src/assets/css/antern-style.css'

interface LogoProps {
  className?: string;
  showSlogan?: boolean;
}

export const LogoV2: React.FC<LogoProps> = ({
  className = "h-10",
  showSlogan = false,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80); // adjust threshold
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`flex flex-col ${className}`}>
      <img
        src={LogoDark1}
        className="logo-antern transition-all duration-300"
        alt="Antern Logo V2"
      />

      {showSlogan && (
        <div
          className={`text-[10px] md:text-xs font-medium tracking-widest mt-0.5 whitespace-nowrap
            ${scrolled ? "text-gray-500" : "text-white/60"}`}
        >
          BRIGHT THINKING. INTELLIGENT SOLUTIONS.
        </div>
      )}
    </div>
  );
};