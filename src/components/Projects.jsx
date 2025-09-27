// components/Projects.jsx
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Weather Forecast App",
    description: "A weather app that fetches real-time weather data using a public API.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ashad-git/Weather_App_Assignment.git",
    demo: "https://ashad-weather-app.netlify.app",
    featured: true,
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "NovaMart (E-commerce)",
    description: "A React-based e-commerce platform UI for personal practice.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Ashad-git/e-commerce-personal.git",
    demo: "https://ashad-novamart.netlify.app",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "My Travel Blog",
    description: "A simple blogging website built using just HTML and CSS.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Ashad-git/My_Trevel_BLog.git",
    demo: "https://ashad-travel-blog.netlify.app",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Student Registration Form",
    description: "A dynamic student registration form with input validation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ashad-git/Student_Registration_Form.git",
    demo: "https://ashad-registration-form.netlify.app",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
  },
];

const techColors = {
  "HTML": "bg-orange-100 text-orange-800",
  "CSS": "bg-blue-100 text-blue-800",
  "JavaScript": "bg-yellow-100 text-yellow-800",
  "React": "bg-cyan-100 text-cyan-800",
  "Tailwind CSS": "bg-teal-100 text-teal-800",
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const techStacks = ["All", ...new Set(projects.flatMap(p => p.tech))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.tech.includes(filter));

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 py-2 text-gray-800">
            My Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was crafted with attention to detail and user experience.
          </p>
        </motion.div>

        {/* Tech Stack Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <FaFilter className="text-gray-500" />
            <span className="text-gray-700 font-medium">Filter:</span>
          </div>
          {techStacks.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tech
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FEATURED
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6 bg-white">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600 transition-colors"
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${techColors[tech] || "bg-gray-100 text-gray-800"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    View Project <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}