import React from 'react';
import { FaAddressCard, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-left">
          Hi, I'm <span className="text-indigo-400">Ahad Ahmad</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Frontend Developer passionate about clean UI and smooth user experience.
        </p>
        <div className="flex gap-4 mt-8">
              {/* Twitter */}
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full text-gray-800 hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg">
                <FaSquareXTwitter className='text-lg' />
              </a>
              
              {/* Instagram */}
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full text-gray-800 hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg">
                <FaInstagram className="text-lg" />
              </a>
              
              {/* GitHub */}
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full text-gray-800 hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg">
                <FaGithub className="text-lg" />
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full text-gray-800 hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg">
                <FaLinkedin className="text-lg" />
              </a>
        </div>
        <div className="flex gap-4 ">
          <a
            href="/resume.pdf"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-5 rounded-lg shadow transition duration-300"
            download
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-black py-2 px-5 rounded-lg transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div>
        <div className='px-[150px] text-8xl'>
          <FaAddressCard ></FaAddressCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
