import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="h-screen bg-[url('/images/banner.jpg')] bg-cover bg-center relative flex items-center">
      <Particle />
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center text-center lg:text-left gap-6 md:gap-[3rem]">
        
        {/* Bagian Gambar (Order 1 di Mobile, Order 2 di Desktop) */}
        <div className="order-first lg:order-2 flex justify-center">
          <div
            data-aos="zoom-in"
            className="w-[70%] max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] aspect-square relative overflow-hidden rounded-full shadow-lg shadow-gray-500"
          >
            <Image 
              src="/images/RomeoN.jpg"
              alt="user" 
              layout="fill" 
              className="object-cover rounded-full"
            />
          </div>
        </div>

        {/* Bagian Teks (Order 2 di Mobile, Order 1 di Desktop) */}
        <div className="order-last lg:order-1">
          <h1
            data-aos="fade-up"
            className="text-[22px] sm:text-[28px] md:text-[40px] lg:text-[50px] font-extrabold leading-tight text-white"
          >
            <span className="text-white">HI, I AM</span> <span className="text-[#357BC9]">MUHAMMAD RAFLY ROMEO NASUTION!</span> <span className="text-white">AND I AM A</span>
          </h1>
          <TextEffect />
          <p
            data-aos="fade-up"
            className="mt-3 text-sm sm:text-base md:text-lg text-[#ffffffb3]"
          >
            I am an undergraduate student in Information Systems at Gunadarma University, currently serving as a staff member in the Information Technology Development Bureau. I have a deep interest and continue to grow in the fields of web development, UI/UX design, and database management.
          </p>
          <div data-aos="fade-up" className="mt-5 flex justify-center sm:justify-start">
            <button className="group px-[2rem] py-[1rem] text-[18px] font-bold uppercase bg-[#FFFFF4] text-[#17A86B] flex items-center space-x-2 rounded-lg transition-all duration-200 shadow-none hover:bg-[#17A86B] hover:text-white hover:shadow-lg hover:shadow-green-300">
                <p>Explore My CV</p>
                <ArrowDownCircleIcon className="w-[1.6rem] h-[1.7rem] text-[#17A86B] group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Tombol Scroll Down */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
      >
        <FaArrowDown className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce mb-2" />
        <span className="text-xs sm:text-sm font-light">Scroll Down</span>
      </button>
    </div>
  );
};

export default Home;
