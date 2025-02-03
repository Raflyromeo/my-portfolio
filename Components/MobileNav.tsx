import React from "react";

interface Props {
  nav: boolean;
  handleNavClick: (id: string) => void;
  closeNav: () => void; // Add this line to accept closeNav prop
}

const MobileNav = ({ nav, handleNavClick }: Props) => {
  const navAnimation = nav
    ? "translate-y-0 opacity-100"
    : "-translate-y-5 opacity-0 pointer-events-none";

  return (
    <div
      className={`absolute w-full top-[12vh] left-0 right-0 transition-all duration-300 ${navAnimation} z-[9999] backdrop-blur-md bg-[#0C0B1D]/80 rounded-b-2xl shadow-lg`}
    >
      <div className="flex flex-col items-center py-6 space-y-4">
        {["home", "about", "my-skills", "experience", "project", "blog", "contact"].map((section) => (
          <button key={section} onClick={() => handleNavClick(`#${section}`)} className="nav-link-mobile">
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
