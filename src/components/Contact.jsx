import React, { useRef } from "react";
import emailjs from "@emailjs/browser"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x5cir0q", // replace with your service ID
        "template_z0oxnpi", // replace with your template ID
        form.current,
        "rXZPeHG7pNanzLoyH"   // replace with your public key
      )
      .then(
        // eslint-disable-next-line no-unused-vars
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            📬 Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Have a project idea or just want to say hello?  
            Feel free to drop me a message — I’ll get back to you as soon as possible.
          </p>
          
          <div className="flex gap-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
