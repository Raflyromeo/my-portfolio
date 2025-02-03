import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-gray-300">
      {/* Kontainer utama */}
      <div className="container mx-auto px-4 py-16">
        {/* Logo */}
        <div className="flex justify-center mb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">MY PORTFOLIO</h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-0.5 w-20 bg-white"></div>
              <p className="text-white text-lg tracking-widest">BY ROMEO</p>
              <div className="h-0.5 w-20 bg-white"></div>
            </div>
          </div>
        </div>

        {/* Container untuk social media dan contact info */}
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-16">
          {/* Left Column - Social Media */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-8">My Social Media Accounts</h2>
            <div className="space-y-6">
              <Link
                href="https://www.instagram.com/rfly.romeo_/"
                target="_blank"
                className="flex items-center gap-3 text-gray-400 hover:text-[#357BC9] transition-colors duration-300"
              >
                <FaInstagram size={20} />
                <span className="text-sm">@rfly.romeo_</span>
              </Link>
              <Link
                href="http://tiktok.com/@raflyromeoo_"
                target="_blank"
                className="flex items-center gap-3 text-gray-400 hover:text-[#357BC9] transition-colors duration-300"
              >
                <FaTiktok size={20} />
                <span className="text-sm">@raflyromeoo_</span>
              </Link>
              <Link
                href="https://youtube.com/@raflyromeoo"
                target="_blank"
                className="flex items-center gap-3 text-gray-400 hover:text-[#357BC9] transition-colors duration-300"
              >
                <FaYoutube size={20} />
                <span className="text-sm">@raflyromeoo</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-rafly-romeo-nasution"
                target="_blank"
                className="flex items-center gap-3 text-gray-400 hover:text-[#357BC9] transition-colors duration-300"
              >
                <FaLinkedin size={20} />
                <span className="text-sm">Muhammad Rafly Romeo Nasution</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex-initial">
            <h2 className="text-xl font-bold text-white mb-8">Contact Info</h2>
            <div className="space-y-6">
              <Link
                href="mailto:raflyromeonasution07@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#357BC9] transition-colors duration-300"
              >
                <CiMail size={20} />
                <span className="text-sm">raflyromeonasution07@gmail.com</span>
              </Link>
              <Link
                href="https://wa.me/6281388608132"
                className="flex items-center gap-3 text-gray-400 hover:text-[#357BC9] transition-colors duration-300"
              >
                <FaPhone size={20} />
                <span className="text-sm">+62 813-8860-8132</span>
              </Link>
              <Link
                href="https://maps.app.goo.gl/9Mn4K1RmwfofUNtT8?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-[#357BC9] transition-colors duration-300"
              >
                <FaLocationDot size={20} className="mt-1" />
                <p className="text-sm">
                  My Address: Jalan Kemandoran No 89,
                  <br />
                  RT 006/ RW 022, Kelurahan Pekayon Jaya,
                  <br />
                  Kecamatan Bekasi Selatan, Kota Bekasi,
                  <br />
                  Provinsi Jawa Barat
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2025 Portfolio By Muhammad Rafly Romeo Nasution - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;