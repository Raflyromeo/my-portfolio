import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import FaExternalLinkAlt icon

const projects = [
  {
    id: 1,
    title: "Web Portfolio",
    image: "/images/portfolio.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Desain Oprec Volunteer BEM FIKTI UG",
    image: "/images/oprec-volunteer.jpg",
    link: "https://www.figma.com/design/mOCWng0UP6Pew82TD6dka0/oprec-volunteer?node-id=2-40&t=tLasPvjozBy03c4o-1",
  },
  {
    id: 3,
    title: "Image Processing With Python",
    image: "/images/image-processing.jpg",
    link: "https://colab.research.google.com/drive/1-L3yDjCUfqMquz3yq0scf7O-NqYdj5cH?usp=sharing",
  },
  {
    id: 4,
    title: "Batu Gunting Kertas AI Markov",
    image: "/images/rock-paper-scissors.jpg",
    link: "https://colab.research.google.com/drive/1aqSNZhDNqoc2GsE1ADRYHtnv4ZYawozW?usp=sharing",
  },
  {
    id: 5,
    title: "Mini Game",
    image: "/images/mini-game.jpg",
    link: "https://colab.research.google.com/drive/1mGW0lj9YwaFsljxVKKgM8UkiUge2lvdQ?usp=sharing",
  },
];

const Project = () => {
  return (
    <div className="bg-[rgba(18,17,33,0.9)] pt-16 md:pt-32 pb-20 text-white">
      <h1 className="heading">
        My <span className="text-[#357BC9]">Project</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projects.map((project) => (
          <div key={project.id} className="relative group">
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src={project.image}
                alt={project.title}
                width={500} // Set width to control the size
                height={300} // Set height to maintain aspect ratio
                className="object-cover rounded-lg"
                priority // Ensure the image is prioritized in loading
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2 className="text-lg font-semibold text-white mb-2">{project.title}</h2>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#ffff] text-xl">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
