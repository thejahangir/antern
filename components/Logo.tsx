
import React, { useEffect, useState } from "react";
import LogoAntern from '../src/assets/img/logo-antern-white.png';

import LogoWhite from "../src/assets/img/logo-antern-white.png";
import LogoDark from "../src/assets/img/logo-antern-dark.png";
import '../src/assets/css/antern-style.css'

// interface LogoProps {
//   className?: string;
//   showSlogan?: boolean;
//   isLight?: boolean;
// }

// export const Logo: React.FC<LogoProps> = ({ className = "h-10", showSlogan = false, isLight = false }) => {
//   return (
//     <div className={`flex flex-col ${className}`}>
//         <img src={LogoAntern} className="logo-antern" />
//       {showSlogan && (
//         <div className={`text-[10px] md:text-xs font-medium tracking-widest mt-0.5 whitespace-nowrap ${isLight ? 'text-white/60' : 'text-gray-500'}`}>
//           BRIGHT THINKING. INTELLIGENT SOLUTIONS.
//         </div>
//       )}
//     </div>
//   );
// };

export const Logo: React.FC<LogoProps> = ({
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
        // src={scrolled ? LogoDark : LogoWhite}
        src={LogoDark}
        className="logo-antern transition-all duration-300"
        alt="Antern Logo"
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
