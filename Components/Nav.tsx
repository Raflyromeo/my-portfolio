import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MobileNav from "./MobileNav"; // Only import it once

interface Props {
  openNav: () => void;
  closeNav: () => void;
  nav: boolean;
}

const Nav = ({ openNav, closeNav, nav }: Props) => {
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll event to change navbar style
  const handleScroll = () => {
    setScrolling(window.scrollY > 50); // Toggle scrolling state based on window scroll position
  };

  useEffect(() => {
    // Add scroll event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount/unmount

  // Smooth scrolling to sections on click
  const handleNavClick = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`w-full fixed top-0 z-[10000] h-[12vh] bg-[#0C0B1D] shadow-md flex items-center justify-center transition-all duration-300 ${
        scrolling ? "bg-[#0C0B1D]/90" : "bg-[#0C0B1D]"
      }`}
    >
      <div className="flex items-center justify-between w-[80%] mx-auto h-full relative">
        <Image
          src="/images/myportofolio.png"
          alt="My Portfolio"
          width={200} // Fixed width
          height={80} // Fixed height
          className="flex-[0.1] cursor-pointer" // Removed w-auto and h-auto to maintain aspect ratio
          onClick={() => handleNavClick("#home")}
          priority // Add this to prioritize loading
        />
        <div className="hidden md:flex space-x-6">
          {["home", "about", "my-skills", "experience", "project", "blog", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(`#${section}`)}
              className="nav-link"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        <div onClick={nav ? closeNav : openNav} className="md:hidden cursor-pointer z-[10100] relative w-8 h-8">
          <AnimatePresence mode="wait">
            {nav ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <XMarkIcon className="w-8 h-8 text-[#357BC9]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Bars3Icon className="w-8 h-8 text-[#357BC9]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Conditional rendering of MobileNav */}
      <MobileNav nav={nav} handleNavClick={handleNavClick} closeNav={closeNav} />
    </div>
  );
};

export default Nav;
