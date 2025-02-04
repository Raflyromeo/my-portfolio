import React, { useRef, useState, useEffect } from "react";
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from "react-icons/fa";
import Image from "next/image";

type Skill = {
  name: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
};

const skills: Skill[] = [
  { 
    name: "Python", 
    description: "I use Python for various tasks, from data analysis to AI development. It's my go-to for automation and problem-solving.", 
    icon: <FaPython className="text-4xl text-green-400" /> 
  },
  { 
    name: "HTML", 
    description: "HTML is the foundation of every website I build. I make sure my code is clean, structured, and accessible.", 
    icon: <FaHtml5 className="text-4xl text-orange-500" /> 
  },
  { 
    name: "CSS", 
    description: "With CSS, I bring designs to life, making sure websites are visually appealing and fully responsive.", 
    icon: <FaCss3Alt className="text-4xl text-blue-500" /> 
  },
  { 
    name: "JavaScript", 
    description: "I love using JavaScript to create interactive, dynamic websites that provide a smooth user experience.", 
    icon: <FaJsSquare className="text-4xl text-yellow-400" /> 
  },
  { 
    name: "SQL", 
    description: "Databases are crucial for any application. I use SQL to efficiently manage and retrieve data when needed.", 
    icon: <FaDatabase className="text-4xl text-indigo-400" /> 
  },
  { 
    name: "Figma", 
    description: "Before coding, I design everything in Figma to ensure a smooth and visually appealing user interface.", 
    image: "/images/figma.png" 
  },
  { 
    name: "React", 
    description: "I use React to build fast and interactive front-end applications that enhance user experience.", 
    image: "/images/react.png" 
  },
  { 
    name: "Next.js", 
    description: "Next.js helps me optimize performance and SEO, making my web apps load faster and rank better.", 
    image: "/images/nextjs.png" 
  },
  { 
    name: "TypeScript", 
    description: "With TypeScript, I write cleaner and more maintainable code by catching errors before they happen.", 
    image: "/images/typescript.png" 
  },
  { 
    name: "Tailwind CSS", 
    description: "Tailwind makes styling efficient and fun. I can quickly build beautiful, modern interfaces.", 
    image: "/images/tailwind.png" 
  },
  { 
    name: "PHP", 
    description: "I use PHP for backend development, handling server-side logic and database interactions.", 
    image: "/images/php.png" 
  },
  { 
    name: "Golang", 
    description: "Go is my choice for building high-performance and scalable backend services.", 
    image: "/images/golang.png" 
  },
  { 
    name: "C", 
    description: "I use C for system-level programming when performance and memory management matter the most.", 
    image: "/images/c.png" 
  },
  { 
    name: "C#", 
    description: "C# is great for building Windows applications and game development with Unity.", 
    image: "/images/csharp.png" 
  },
  { 
    name: "C++", 
    description: "I use C++ when I need fast and efficient code, especially for complex applications.", 
    image: "/images/cplusplus.png" 
  },
  { 
    name: "Pascal", 
    description: "Pascal was one of my first programming languages. It helped me build a strong foundation in coding.", 
    image: "/images/pascal.png" 
  },
  { 
    name: "Visual Basic .NET", 
    description: "I use VB.NET for building Windows applications that require a simple and intuitive interface.", 
    image: "/images/visualbasic.png" 
  }
];

const MySkills: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateActiveIndex);
      return () => scrollContainer.removeEventListener('scroll', updateActiveIndex);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth;
      const newScrollLeft = direction === "left"
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };

  const scrollToDot = (index: number) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * index;
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-[rgba(18,17,33,0.9)] pt-16 md:pt-32 pb-20 text-white">
      <p className="text-3xl md:text-4xl font-bold text-center mb-10">
        My <span className="text-[#357BC9]">Skills</span>
      </p>

      {/* Mobile View */}
      <div className="relative px-4 md:hidden">
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={() => scroll("left")}
        >
          &#8592;
        </button>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide space-x-6 px-4 scroll-smooth"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-none w-full snap-center max-w-sm bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              {skill.icon ? skill.icon : (
                <Image src={skill.image!} alt={skill.name} width={64} height={64} />
              )}
              <h3 className="text-xl font-bold mt-4">{skill.name}</h3>
              <p className="text-sm text-gray-300 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={() => scroll("right")}
        >
          &#8594;
        </button>

        <div className="flex justify-center space-x-2 mt-6">
          {skills.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToDot(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-blue-500' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 md:hover:scale-110"
          >
            {skill.icon ? skill.icon : (
              <Image src={skill.image!} alt={skill.name} width={64} height={64} />
            )}
            <h3 className="text-xl font-bold mt-4">{skill.name}</h3>
            <p className="text-sm text-gray-300 mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
