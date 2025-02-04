import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const blogs = [
  {
    title: "Kemajuan Teknologi Komputer Di Masa Depan",
    url: "https://muhammadraflyromeonasution6.wordpress.com/2023/10/07/the-art-of-connection/",
    image: "/images/kemajuan.png",
    author: "raflyromeo",
    date: "7 Oktober 2023",
  },
  {
    title: "Pemanfaatan Teknologi Komputer Di 3 Bidang",
    url: "https://muhammadraflyromeonasution6.wordpress.com/2023/10/07/pemanfaatan-teknologi-komputer-di-3-bidang/",
    image: "/images/pemanfaatan.jpg",
    author: "raflyromeo",
    date: "7 Oktober 2023",
  },
  {
    title: "Berbagai Macam Alat Atau Aplikasi AI Yang Ada Pada Saat Ini",
    url: "https://muhammadraflyromeonasution6.wordpress.com/2024/01/02/berbagai-macam-alat-atau-aplikasi-ai-yang-ada-pada-saat-ini/",
    image: "/images/ai.png",
    author: "raflyromeo",
    date: "2 Januari 2024",
  },
  {
    title: "Mac OS Sistem Operasi Yang Inovasi Dan Komprehensif",
    url: "https://muhammadraflyromeonasution6.wordpress.com/2024/01/16/mac-os-sistem-operasi-yang-inovasi-dan-komprehensif/",
    image: "/images/MacOS.jpeg",
    author: "raflyromeo",
    date: "16 Januari 2024",
  },
  {
    title: "Blog Title Placeholder",
    url: "#",
    image: "/images/NotAvailable.jpg",
    author: "Unknown",
    date: "TBD",
  },
  {
    title: "Blog Title Placeholder",
    url: "#",
    image: "/images/NotAvailable.jpg",
    author: "Unknown",
    date: "TBD",
  },
];

const Blog = () => {
  return (
    <div className="pt-16 md:pt-32 pb-16 bg-[#09101a] text-white">
      <h1 className="text-4xl font-bold text-center">
        My <span className="text-[#357BC9]">Blog</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-8 w-full md:w-[80%] mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-[#1c2533] p-5 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#1c2533]"
          >
            {/* Gambar Blog dengan fallback alt text */}
            <div
              className="w-full h-64 bg-cover bg-center rounded-xl transition duration-300 hover:brightness-90"
              style={{ backgroundImage: `url(${blog.image})` }}
              aria-label={`Image for ${blog.title}`}
            ></div>

            {/* Konten Blog */}
            <div className="mt-5">
              <span className="text-gray-400 text-sm">{blog.date}</span>
              <h2 className="text-xl font-semibold mt-2 hover:text-[#357BC9] transition duration-300">
                {blog.title}
              </h2>
              <p className="text-gray-400 mt-2">By {blog.author}</p>

              {/* Tombol "Read More" */}
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-[#357BC9] text-white px-5 py-3 rounded-xl transition duration-300 hover:bg-[#265a8b] hover:scale-105"
              >
                Read More <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
