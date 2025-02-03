import React from "react";

const Experience = () => {
  return (
    <div className="pt-16 md:pt-24 pb-20 bg-[#09101a] text-white">
      <h1 className="text-4xl font-bold text-center">
        Experience & <span className="text-[#357BC9]">Education</span>
      </h1>

      <div className="w-[90%] md:w-[80%] mx-auto pt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#357BC9] mb-6">Experience</h2>
          <div className="bg-[#1c2533] p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <p className="text-lg font-semibold">November 2024 - Present</p>
            <p className="text-[#357BC9] font-semibold">Staff Member - PTI Bureau, BEM FIKTI</p>
            <p className="text-gray-300 mt-3">
              Serving as a staff member in the IT Development Bureau (PTI) of BEM FIKTI, working on the website to communicate programs and facilitate student engagement.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#357BC9] mb-6">Education</h2>
          {[ 
            { year: "2011 - 2017", school: "SDN Pekayon Jaya VI", desc: "Built foundational knowledge and passion for learning in South Bekasi." },
            { year: "2017 - 2020", school: "SMP Negeri 12 Kota Bekasi", desc: "Enhanced academic skills, teamwork, and discipline through extracurricular activities." },
            { year: "2020 - 2023", school: "SMA Negeri 8 Kota Bekasi", desc: "Developed leadership and communication skills through school activities." },
            { year: "2023 - 2027", school: "Universitas Gunadarma", desc: "Pursuing a Bachelor's in Information Systems, focusing on web development and IT systems." }
          ].map((edu, index) => (
            <div key={index} className="bg-[#1c2533] p-6 rounded-2xl shadow-lg mb-4 transform transition duration-300 hover:scale-105">
              <p className="text-lg font-semibold">{edu.year}</p>
              <p className="text-[#357BC9] font-semibold">{edu.school}</p>
              <p className="text-gray-300 mt-3">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;