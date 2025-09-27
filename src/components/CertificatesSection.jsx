import React from 'react';

const certificates = [
  {
    title: "Designing Web Pages Using HTML and CSS",
    issuer: "Internshala",
    image: "public/certificates/Html.png",
    link: "https://trainings.internshala.com/view_certificate/23svh54zhg2/gb4l9umfh71/",
  },
  {
    title: "Git and GitHub: Mastering Version Control",
    issuer: "Internshala",
    image: "public/certificates/GitHub.png",
    link: "https://trainings.internshala.com/view_certificate/2304j9fs6vj/d5tuccduaem/",
  },
  {
    title: "Developing Interactive Website with Javascript",
    issuer: "Internshala",
    image: "public/certificates/Javascript.png",
    link: "https://trainings.internshala.com/view_certificate/j5l5co1jtk4/3fcri0qfr6b/",
  },
  {
    title: "React Frontend Development",
    issuer: "Internshala",
    image: "public/certificates/React.png",
    link: "https://trainings.internshala.com/view_certificate/bk0nglkv8az/agelp55k29a/",
  },
];

export default function CertificatesSection() {
  return (
    <section className="py-12 px-6 bg-[#2E2F2F] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        
        {/* Left: Info Block */}
        <div className="lg:w-1/3">
          <p className="text-green-400 text-lg font-semibold mb-1">Check Out</p>
          <h2 className="text-3xl font-bold mb-4">MY CERTIFICATES</h2>
          <p className="text-gray-300 mb-6">
            I have done various programming courses to increase my skills. Here are a few of them.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md transition">
            Know More
          </button>
        </div>

        {/* Right: Certificates Scroll */}
        <div className="lg:w-2/3 overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-[#3A3B3B] shadow-md rounded-xl p-4 w-64 shrink-0 hover:scale-105 transition-transform"
              >
                <div className="w-full h-40 overflow-hidden rounded-md mb-3">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                  <a href={cert.link} target='_blank' rel='noopener noreferrer' className='text-md font-semibold text-white hover:text-green-400 transition-colors'>{cert.title}</a>
                  <p className="text-sm text-green-400">{cert.issuer}</p>
              </div>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}
