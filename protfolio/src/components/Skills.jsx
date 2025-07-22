import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaGit, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiAdobephotoshop, SiCanva, SiVite } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import { VscVscodeInsiders } from "react-icons/vsc";

const skills = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <BsFillBootstrapFill className="text-purple-700" /> },
  ],
  Design: [
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-900" /> },
    { name: "Canva", icon: <SiCanva className="text-cyan-600" /> },
    { name: "Figma", icon: <CgFigma className="text-pink-400" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGit className="text-red-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "VS Code", icon: <VscVscodeInsiders className="text-blue-500" /> },
  ],
};

export default function SkillsSection() {
  return (
    <section className="py-12 px-6 bg-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">⚒️ My Skills</h2>

      <div className="grid gap-12">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">{category}</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {items.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 w-28 p-4 bg-white shadow-xl rounded-xl text-center transition-transform hover:scale-105"
                >
                  <span className="text-4xl">{icon}</span>
                  <p className="text-sm font-medium text-gray-700">{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
