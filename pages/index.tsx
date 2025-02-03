import About from "@/Components/About";
import Blog from "@/Components/Blog";
import Experience from "@/Components/Experience";
import Footer from "@/Components/Footer";
import Home from "@/Components/Home";
import MobileNav from "@/Components/MobileNav";
import MySkills from "@/Components/MySkills";
import Nav from "@/Components/Nav";
import Project from "@/Components/Project";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "@/Components/Contact";

const HomePage: React.FC = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  // Animation AOS setup
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  },[]);

  const handleNavClick = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      toggleNav(); // Tutup menu setelah klik
    }
  };
  
  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <Nav openNav={toggleNav} closeNav={toggleNav} nav={nav} />
      <MobileNav nav={nav} closeNav={toggleNav} handleNavClick={handleNavClick} />
  
      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="my-skills">
        <MySkills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
  
      {/* Footer */}
      <Footer />
    </div>
  );  
};

export default HomePage;
