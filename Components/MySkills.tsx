import React from "react";
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from "react-icons/fa";

type Skill = {
  name: string;
  description: string;
  icon?: React.ReactNode;
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
  },
  { 
    name: "React", 
    description: "I use React to build fast and interactive front-end applications that enhance user experience.", 
  },
  { 
    name: "Next.js", 
    description: "Next.js helps me optimize performance and SEO, making my web apps load faster and rank better.", 
  },
  { 
    name: "TypeScript", 
    description: "With TypeScript, I write cleaner and more maintainable code by catching errors before they happen.", 
  },
  { 
    name: "Tailwind CSS", 
    description: "Tailwind makes styling efficient and fun. I can quickly build beautiful, modern interfaces.", 
  },
  { 
    name: "PHP", 
    description: "I use PHP for backend development, handling server-side logic and database interactions.", 
  },
  { 
    name: "Golang", 
    description: "Go is my choice for building high-performance and scalable backend services.", 
  },
  { 
    name: "C", 
    description: "I use C for system-level programming when performance and memory management matter the most.", 
  },
  { 
    name: "C#", 
    description: "C# is great for building Windows applications and game development with Unity.", 
  },
  { 
    name: "C++", 
    description: "I use C++ when I need fast and efficient code, especially for complex applications.", 
  },
  { 
    name: "Pascal", 
    description: "Pascal was one of my first programming languages. It helped me build a strong foundation in coding.", 
  },
  { 
    name: "Visual Basic .NET", 
    description: "I use VB.NET for building Windows applications that require a simple and intuitive interface.", 
  }
];

const MySkills: React.FC = () => {
  return (
    <div className="bg-[rgba(18,17,33,0.9)] pt-16 md:pt-32 pb-20 text-white">
      <p className="text-3xl md:text-4xl font-bold text-center mb-10">
        My <span className="text-[#357BC9]">Skills</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 md:hover:scale-110"
          >
            {skill.icon && skill.icon}
            <h3 className="text-xl font-bold mt-4">{skill.name}</h3>
            <p className="text-sm text-gray-300 mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;