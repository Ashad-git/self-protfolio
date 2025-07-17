import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Hi, I'm <span className="text-indigo-400">Ahad Ahmad</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Frontend Developer passionate about clean UI and smooth user experience.
        </p>
        <div className="flex justify-center gap-4">
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
        
      </div>
    </section>
  );
};

export default Hero;
