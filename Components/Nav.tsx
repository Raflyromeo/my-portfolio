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

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          width={200}
          height={80}
          className="flex-[0.1] cursor-pointer h-auto max-h-full"
          onClick={() => handleNavClick("#home")} // Event onClick
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
      <MobileNav nav={nav} handleNavClick={handleNavClick} closeNav={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default Nav;
