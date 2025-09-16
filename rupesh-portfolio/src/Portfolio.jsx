import React, { useEffect, useState } from "react";
import { ArrowDown, Mail, Linkedin, Globe, Users } from "lucide-react";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg font-bold">
              RS
            </div>
            <span className="font-semibold">Rupesh Shinde</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {["About", "Experience", "Achievements", "Skills", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-blue-600"
                >
                  {link}
                </a>
              )
            )}
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow hover:opacity-90"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse" />

        <div className="bg-white/70 px-4 py-2 rounded-full text-sm mb-6 shadow inline-block">
          ✅ Available for Strategic Consulting
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Rupesh Shinde</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Director of Product Management
        </h2>
        <p className="max-w-2xl text-lg mb-8">
          15+ years in AI, SEO, product strategy, and agile leadership
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["AI Innovation", "SEO Strategy", "Digital Transformation"].map(
            (chip) => (
              <span
                key={chip}
                className="px-4 py-2 bg-white rounded-full shadow text-sm"
              >
                {chip}
              </span>
            )
          )}
        </div>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow hover:opacity-90"
          >
            Let’s Collaborate
          </a>
          <a
            href="#about"
            className="bg-white px-6 py-3 rounded-full shadow hover:bg-gray-100"
          >
            Learn More
          </a>
        </div>

        <ArrowDown className="mt-16 animate-bounce text-blue-600" size={40} />
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Strategic Product Leadership
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-8">
              I’m a seasoned Director of Product Management with 15+ years of
              expertise spanning AI, analytics, SEO, product strategy, and
              digital transformation. I’ve scaled products impacting millions
              of users and driven multi-million-dollar revenue growth.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                ["15+", "Years Experience"],
                ["$50M+", "Revenue Impact"],
                ["10M+", "Users Reached"],
              ].map(([stat, label]) => (
                <div
                  key={label}
                  className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {stat}
                  </div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-12 rounded-full shadow-lg relative">
              <Users size={80} className="text-blue-600" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow">
                Product Leadership: Driving innovation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Collaborate</h2>
          <p className="mb-12 text-gray-300">
            Ready to build impactful products together? Reach out today.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              [Mail, "pm.rupeshshinde@gmail.com"],
              [Linkedin, "linkedin.com/in/rupesh-shinde"],
              [Globe, "rupeshshinde.com"],
            ].map(([Icon, text]) => (
              <div
                key={text}
                className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition"
              >
                <Icon className="mx-auto mb-4 text-blue-400" size={32} />
                <div>{text}</div>
              </div>
            ))}
          </div>
          <form className="max-w-3xl mx-auto grid gap-6">
            <input type="text" placeholder="Name" className="px-4 py-3 rounded-lg text-gray-800" />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg text-gray-800" />
            <input type="text" placeholder="Company" className="px-4 py-3 rounded-lg text-gray-800" />
            <textarea placeholder="Message" rows="4" className="px-4 py-3 rounded-lg text-gray-800" />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full shadow hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg font-bold">
            RS
          </div>
          <span>Rupesh Shinde</span>
        </div>
        <p>© 2025 Rupesh Shinde. Crafted with precision and passion.</p>
      </footer>
    </div>
  );
}
