import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";
import BackgroundImage from "/public/bg-image.png"

export default function Hero(){
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "UI/UX Enthusiast", "Tech Explorer"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);


  return (
    <section id="home" className='text-black py-50 px-6 md:px-24 bg-[url(/public/bg-image.png)] bg-cover bg-center'>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/**Left Content */}
        <div className="flex-1 text-center md:text-left"> 
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-100">
            Hi, I'm <span className="text-teal-500 dark:text-teal-300 drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]">Ashad Ahmad</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-mono text-white">
            <span ref={typedRef} />
          </p>

          {/**Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start gap-3 text-2xl text-teal-600">

            <a href="https://github.com/Ashad-git" target="_blank" className="inline-flex items-center justify-center w-15 h-15 bg-white rounded-full text-gray-800 hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg">
                 <FaGithub className="text-3xl" />
            </a>

            <a href="https://www.linkedin.com/in/ashad-ahmad-84035526a/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-15 h-15 bg-white rounded-full text-gray-800 hover:bg-gradient-to-r from-blue-300 to-blue-600 hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg">
                 <FaLinkedin className="text-3xl" />
               </a>

            <a href="https://wa.me/9198627165" target="_blank" className="inline-flex items-center justify-center w-15 h-15 bg-white rounded-full text-gray-800 hover:bg-gradient-to-r from-green-400 to-green-600 hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg">
                 <FaWhatsapp className="text-3xl" />
            </a>

            <a href="https://t.me/+919198627165" target="_blank" className="inline-flex items-center justify-center w-15 h-15 bg-white rounded-full text-gray-800 hover:bg-gradient-to-r from-blue-400 to-blue-700 hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg">
                 <FaTelegram className="text-3xl" />
            </a>
          </div>

          {/**Buttons updating hovering */}
          <div className="flex justify-center md:justify-start gap-3 ">
              <a href="public/Ashad-web.pdf" target="_blank" className="mt-5 bg-teal-500/100 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-teal-400/60 transition-colors duration-300"> 
              Download CV
              </a>

              <a href="#contact" className="mt-5 bg-teal-500/100 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-teal-400/60 transition-colors duration-300" >
              Contact Me
              </a>
          </div>

          {/**right image */}
        </div>
          <div className="felx-1 flex justify-center">
            <img src="public/logo.png" alt="Ashad Ahmad" className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-xl" />
          </div>
      </div>
    </section>
  )
}