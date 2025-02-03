import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#09101a] py-16 px-6 md:px-12 lg:px-24 flex items-center">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center text-center lg:text-left gap-10">
        
        {/* Bagian Gambar */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div data-aos="fade-left" className="w-[80%] max-w-[300px] md:max-w-[350px] lg:max-w-[400px] aspect-square relative overflow-hidden rounded-full shadow-lg shadow-gray-500">
            <Image 
              src="/images/Romeo.jpg"
              alt="user" 
              fill
              sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 400px"
              priority // For images that appear above the fold
              className="object-cover rounded-full"
            />
          </div>
        </div>

        {/* Bagian Teks */}
        <div className="order-2 lg:order-1 px-4">
          <h1 data-aos="fade-up" className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-tight text-white">
            ABOUT ME
          </h1>
          <h2 data-aos="fade-up" className="text-lg font-bold uppercase text-[#36B276] mt-3">
            Passionate Developer | <span className="text-[#357BC9]">UI/UX & Front-End Enthusiast</span> | Tech Explorer
          </h2>
          <p data-aos="fade-up" className="text-base sm:text-lg text-slate-300 mt-6 leading-relaxed text-justify">
            <strong>Hello there!</strong> 👋 I am <strong>Muhammad Rafly Romeo Nasution</strong>, an undergraduate student at <strong>Gunadarma University</strong>, majoring in Information Systems. As a staff member of the <strong>IT Development Bureau</strong>, I love creating elegant and efficient solutions through code.
          </p>
          
          <p data-aos="fade-up" className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed text-justify">
            I explore new technologies to enhance my skills in <strong>web development, UI/UX design, and database management</strong>. My goal is to make digital experiences seamless, engaging, and innovative.
          </p>

          <h3 data-aos="fade-up" className="text-lg sm:text-xl font-semibold text-white mt-6">What I Do:</h3>
          <ul data-aos="fade-up" className="text-base sm:text-lg text-slate-300 mt-4 space-y-2 text-left">
            <li>🔹 <strong>Front-End:</strong> HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS</li>
            <li>🔹 <strong>Back-End:</strong> PHP, Golang, C, C++, C#, Pascal, VB.NET</li>
            <li>🔹 <strong>Database:</strong> SQL (MySQL, PostgreSQL)</li>
            <li>🔹 <strong>UI/UX Design:</strong> Figma</li>
            <li>🔹 <strong>Data & Programming:</strong> Python</li>
          </ul>

          <p data-aos="fade-up" className="text-base sm:text-lg text-slate-300 mt-6 leading-relaxed text-justify">
            Currently, I am diving deeper into <strong>UI/UX and front-end development</strong> to craft more intuitive and responsive digital experiences.
          </p>

          <p data-aos="fade-up" className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed text-justify">
            I am a <strong>quick learner</strong> who thrives in collaborative environments. I believe that teamwork and innovation drive meaningful progress.
          </p>

          <div data-aos="fade-up" className="flex justify-center lg:justify-start mt-8">
            <button 
              aria-label="Explore My CV" 
              className="group px-6 py-3 text-lg font-bold uppercase bg-[#FFFFF4] text-[#17A86B] flex items-center space-x-2 rounded-lg transition-all duration-200 shadow-none hover:bg-[#17A86B] hover:text-white hover:shadow-lg hover:shadow-green-300"
            >
              <p>Explore My CV</p>
              <ArrowDownCircleIcon className="w-6 h-6 text-[#17A86B] group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
