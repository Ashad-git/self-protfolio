import React from "react";

const About = () => {
    
    return (
        <section id="about" className="bg-gray-300 py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                {/**Left section  */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        I'm <span className="text-blue-600 font-semibold">Ashad Ahmad</span>, a passionate and detail-oriented web developer
                        with a knack for creating clean, responsive, and user-friendly web interfaces.
                        I enjoy blending creativity with logic to build engaging digital experiences.
                        My goal is to continuously grow and contribute meaningfully to every project I take on.
                        <br/>
                        <br/>
                        a passionate and detail-oriented web developer
                        with a knack for creating clean, responsive, and user-friendly web interfaces.
                        I enjoy blending creativity with logic to build engaging digital experiences.
                        My goal is to continuously grow and contribute meaningfully to every project I take on.
                    </p>
                </div>

                {/**Right section */}
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {["HTML5", "CSS3", "JavaScript", "React", "Tailwind Css", "Bootstrap", "Git", "Responsive Design", "Photoshop", "Canva"].map((skill, index) => (
                            <span key={index} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-white"> {skill} </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}


export default About;