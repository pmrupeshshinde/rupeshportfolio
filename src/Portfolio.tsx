
import React, { useEffect, useState } from "react";
import {
  Mail,
  Linkedin,
  Globe,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Users,
  Search,
  Brain,
  Palette,
  GitBranch,
  Code,
  CheckCircle,
  Quote,
} from "lucide-react";

type SkillGroup = {
  category: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
};

type Experience = {
  period: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  color: string;
};

export default function Portfolio(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const skills: SkillGroup[] = [
    {
      category: "Product Strategy & Leadership",
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor"/></svg>,
      skills: ["Product Roadmapping", "Strategic Planning", "Market Analysis"],
      color: "from-blue-500 to-purple-600",
    },
    {
      category: "SEO & Growth Optimization",
      icon: <Search className="w-6 h-6" />,
      skills: ["Technical SEO", "Content Strategy", "A/B Testing"],
      color: "from-green-500 to-teal-600",
    },
    {
      category: "AI & Analytics",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Machine Learning", "Predictive Analytics", "Data Science"],
      color: "from-purple-500 to-pink-600",
    },
  ];

  const experiences: Experience[] = [
    {
      period: "2022 - Present",
      title: "Director of Product Management",
      company: "Leading Technology Company",
      description:
        "Spearheaded AI-driven initiatives and product strategy across multiple lines.",
      achievements: ["300% Engagement", "$25M Impact", "Led 50+ Engineers"],
      color: "from-blue-500 to-purple-600",
    },
    {
      period: "2019 - 2022",
      title: "Senior Product Manager",
      company: "Fortune 500 Enterprise",
      description: "Led SEO and growth initiatives, improving organic traffic significantly.",
      achievements: ["400% Traffic", "60% CAC Reduction"],
      color: "from-green-500 to-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className={`fixed w-full top-0 z-50 transition-all ${scrolled ? "bg-white/80 backdrop-blur shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">RS</div>
            <div className="font-semibold">Rupesh Shinde</div>
          </div>
          <nav className="hidden md:flex gap-8 items-center text-gray-700">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-28">
        {/* Hero */}
        <section className="relative flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 mb-6">Available for Consulting</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Rupesh Shinde</h1>
            <p className="text-xl text-gray-600 mb-8">Director of Product Management — AI, SEO & Growth</p>
            <div className="flex gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">Let's Collaborate <ArrowRight className="w-4 h-4" /></a>
              <a href="#about" className="inline-flex items-center gap-2 px-6 py-3 bg-white border rounded-full">Learn More</a>
            </div>
            <div className="mt-10 animate-bounce"><ChevronDown className="w-6 h-6 text-gray-400 mx-auto" /></div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Strategic Product Leadership</h2>
                <p className="text-gray-600 mb-6">Experienced product leader combining AI, analytics and human-centered design to build scalable products.</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                    <div className="text-sm text-gray-500">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$50M+</div>
                    <div className="text-sm text-gray-500">Revenue Impact</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10M+</div>
                    <div className="text-sm text-gray-500">Users Reached</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4"><Users className="w-12 h-12 text-white" /></div>
                  <h3 className="text-xl font-bold">Product Leadership</h3>
                  <p className="text-gray-600">Driving innovation through strategic vision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow flex flex-col md:flex-row gap-6">
                  <div className="w-40 text-sm font-semibold text-gray-500">{exp.period}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-bold">{exp.title}</h4>
                        <div className="text-sm text-gray-600">{exp.company}</div>
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"><TrendingUp className="w-5 h-5" /></div>
                    </div>
                    <p className="text-gray-600 mb-3">{exp.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {exp.achievements.map((a, idx) => <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{a}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold mb-6">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((s, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${s.color}`}>{s.icon}</div>
                    <div className="font-bold">{s.category}</div>
                  </div>
                  <div className="space-y-2">
                    {s.skills.map((sk, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <div>{sk}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Let's Collaborate</h3>
              <p className="mb-6 text-gray-300">Interested in strategic product work or AI initiatives? Reach out — I respond to thoughtful opportunities.</p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <a href="mailto:pm.rupeshshinde@gmail.com" className="block bg-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white"><Mail /></div>
                    <div className="text-left">
                      <div className="text-sm text-gray-300">Email</div>
                      <div className="font-semibold">pm.rupeshshinde@gmail.com</div>
                    </div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/rupeshkumarshindepmpcsm" target="_blank" rel="noreferrer" className="block bg-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white"><Linkedin /></div>
                    <div className="text-left">
                      <div className="text-sm text-gray-300">LinkedIn</div>
                      <div className="font-semibold">Connect</div>
                    </div>
                  </div>
                </a>
                <a href="https://rupeshshinde.webflow.io/" target="_blank" rel="noreferrer" className="block bg-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white"><Globe /></div>
                    <div className="text-left">
                      <div className="text-sm text-gray-300">Website</div>
                      <div className="font-semibold">Portfolio & Blog</div>
                    </div>
                  </div>
                </a>
              </div>
              <a href="mailto:pm.rupeshshinde@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">Email Me <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-6 text-center">
          <div className="text-sm">© {new Date().getFullYear()} Rupesh Shinde. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
