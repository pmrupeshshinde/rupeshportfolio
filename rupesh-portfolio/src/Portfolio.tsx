import React, { useEffect, useState } from 'react';
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
} from 'lucide-react';

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

type CaseStudy = {
  number: string;
  title: string;
  challenge: string;
  action: string;
  result: string;
  metrics: string[];
  color: string;
};

export default function Portfolio(): JSX.Element {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills: SkillGroup[] = [
    {
      category: 'Product Strategy & Leadership',
      icon: <TargetIcon />,
      skills: ['Product Roadmapping', 'Strategic Planning', 'Market Analysis', 'Competitive Intelligence', 'Go-to-Market Strategy'],
      color: 'from-blue-500 to-purple-600',
    },
    {
      category: 'SEO & Growth Optimization',
      icon: <Search className="w-6 h-6" />,
      skills: ['Technical SEO', 'Content Strategy', 'Performance Marketing', 'Conversion Optimization', 'Growth Hacking'],
      color: 'from-green-500 to-teal-600',
    },
    {
      category: 'AI/Analytics/Automation',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Machine Learning', 'Data Science', 'Predictive Analytics', 'Process Automation', 'AI Strategy'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      category: 'UX/UI Collaboration',
      icon: <Palette className="w-6 h-6" />,
      skills: ['User Research', 'Design Thinking', 'Prototyping', 'Usability Testing', 'Design Systems'],
      color: 'from-orange-500 to-red-600',
    },
    {
      category: 'Agile/Scrum Leadership',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Scrum Master', 'Sprint Planning', 'Backlog Management', 'Team Facilitation', 'Continuous Improvement'],
      color: 'from-indigo-500 to-blue-600',
    },
    {
      category: 'Technical & Tools',
      icon: <Code className="w-6 h-6" />,
      skills: ['SQL & Analytics', 'A/B Testing', 'Product Management Tools', 'API Integration', 'Cloud Platforms'],
      color: 'from-teal-500 to-cyan-600',
    },
  ];

  const experiences: Experience[] = [
    {
      period: '2022 - Present',
      title: 'Director of Product Management',
      company: 'Leading Technology Company',
      description: 'Spearheading AI-driven product initiatives, resulting in 300% increase in user engagement and $25M additional revenue. Leading cross-functional teams of 50+ members across 5 product lines.',
      achievements: ['300% User Engagement', '$25M Revenue Impact', '50+ Team Members', '5 Product Lines'],
      color: 'from-blue-500 to-purple-600',
    },
    {
      period: '2019 - 2022',
      title: 'Senior Product Manager',
      company: 'Fortune 500 Enterprise',
      description: 'Drove digital transformation initiatives, implementing advanced SEO strategies that increased organic traffic by 400% and reduced customer acquisition costs by 60%.',
      achievements: ['400% Traffic Growth', '60% CAC Reduction', 'Digital Transformation', 'SEO Leadership'],
      color: 'from-green-500 to-teal-600',
    },
    {
      period: '2016 - 2019',
      title: 'Product Manager',
      company: 'Innovative Startup',
      description: 'Built and launched 3 successful products from 0-1, achieving 2M+ users within first year. Established agile development processes and data analytics frameworks.',
      achievements: ['3 Products Launched', '2M+ Users', '0-1 Development', 'Analytics Framework'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      period: '2013 - 2016',
      title: 'Associate Product Manager',
      company: 'Tech Growth Company',
      description: 'Managed product roadmaps for core platform features, collaborating with engineering and design teams to deliver user-centric solutions that improved retention by 180%.',
      achievements: ['180% Retention', 'Platform Features', 'Cross-functional', 'User-Centric'],
      color: 'from-orange-500 to-red-600',
    },
  ];

  const caseStudies: CaseStudy[] = [
    {
      number: '01',
      title: 'AI-Powered Recommendation Engine',
      challenge: 'Low user engagement and poor conversion rates across the platform ecosystem.',
      action: 'Developed and implemented machine learning algorithms to personalize user experiences and optimize content delivery.',
      result: '300% increase in user engagement, $25M revenue impact, and 95% user satisfaction rating.',
      metrics: ['300%', '$25M', '95%'],
      color: 'from-blue-500 to-purple-600',
    },
    {
      number: '02',
      title: 'SEO Strategy Transformation',
      challenge: 'Declining organic traffic and high customer acquisition costs impacting growth.',
      action: 'Implemented comprehensive technical SEO audit, content optimization, and advanced analytics framework.',
      result: '400% increase in organic traffic, 60% reduction in CAC, and #1 ranking for key terms.',
      metrics: ['400%', '60%', '#1'],
      color: 'from-green-500 to-teal-600',
    },
    {
      number: '03',
      title: 'Cross-Platform Product Launch',
      challenge: 'Need to rapidly scale product offering across multiple platforms and markets.',
      action: 'Orchestrated agile development process, coordinated 5 cross-functional teams, and implemented data-driven iteration cycles.',
      result: '2M+ users in first year, 3 successful products launched, and 180% retention improvement.',
      metrics: ['2M+', '3', '180%'],
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const testimonials = [
    {
      quote: "Rupesh's strategic vision and execution excellence transformed our product portfolio. His AI-driven approach increased our market share by 40% in just 18 months.",
      author: 'Sarah Chen',
      role: 'VP of Engineering, Tech Corp',
      avatar: 'SC',
    },
    {
      quote: "Working with Rupesh was transformative. His deep understanding of SEO and growth strategies helped us achieve unprecedented organic growth and market penetration.",
      author: 'Michael Rodriguez',
      role: 'CEO, Growth Dynamics',
      avatar: 'MR',
    },
    {
      quote: "Rupesh's ability to translate complex technical concepts into actionable business strategies is unmatched. He's a true product visionary and exceptional leader.",
      author: 'Jennifer Park',
      role: 'Chief Product Officer, Innovation Labs',
      avatar: 'JP',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">RS</span>
              </div>
              <span className="font-semibold text-gray-900">Rupesh Shinde</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#achievements" className="text-gray-600 hover:text-blue-600 transition-colors">Achievements</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for Strategic Consulting
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Rupesh Shinde
            <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium mt-2">
              Director of Product Management
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            A visionary product leader with 15+ years of expertise in AI-driven innovation, SEO optimization, product strategy, and agile leadership.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['AI Innovation', 'SEO Strategy', 'Digital Transformation'].map((specialty, index) => (
              <div key={index} className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700 font-medium hover:shadow-lg hover:scale-105 transition-all">
                {specialty}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all">
              Let's Collaborate
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#about" className="inline-flex items-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:shadow-lg hover:border-blue-300 transition-all">
              Learn More
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              About
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Strategic Product Leadership</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                As a seasoned Director of Product Management, I've built my career at the intersection of technology innovation and business strategy, consistently delivering products that drive exponential growth and market transformation.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: '15+', label: 'Years Experience' },
                  { number: '$50M+', label: 'Revenue Impact' },
                  { number: '10M+', label: 'Users Reached' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                My approach combines data-driven decision making with human-centered design, leveraging AI and advanced analytics to create products that not only meet market needs but anticipate future trends.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Leadership</h3>
                  <p className="text-gray-600">Driving innovation through strategic vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              Career Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 flex items-center">
                    <div className={`w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full`}></div>
                    <div className="ml-4 text-sm font-semibold text-gray-500 min-w-[120px]">
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.company}
                        </div>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center`}>
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-3">
                      {exp.achievements.map((achievement, i) => (
                        <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {index < experiences.length - 1 && (
                  <div className="absolute left-2 top-16 w-0.5 h-16 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="achievements" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Key Achievements
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Impact & Results</h2>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-xl">{study.number}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.title}</h3>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className={`text-sm font-bold uppercase tracking-wide bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-3`}>Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className={`text-sm font-bold uppercase tracking-wide bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-3`}>Action</h4>
                        <p className="text-gray-600 leading-relaxed">{study.action}</p>
                      </div>

                      <div>
                        <h4 className={`text-sm font-bold uppercase tracking-wide bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-3`}>Result</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">{study.result}</p>

                        <div className="flex gap-2">
                          {study.metrics.map((metric, i) => (
                            <span key={i} className={`px-3 py-1 bg-gradient-to-r ${study.color} text-white rounded-full text-sm font-bold`}>{metric}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">Expertise</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Core Competencies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-xl flex items-center justify-center mr-4`}>
                    <div className="text-white">{skillGroup.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{skillGroup.category}</h3>
                </div>

                <div className="space-y-3">
                  {skillGroup.skills.map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-4">Testimonials</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Leaders Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <Quote className="w-8 h-8 text-blue-500 mb-6" />
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.author}</div>
                    <div className="text-gray-500 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Collaborate</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to drive innovation and growth together? I'm always interested in discussing strategic product opportunities and transformational initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                label: 'Email',
                value: 'pm.rupeshshinde@gmail.com',
                href: 'mailto:pm.rupeshshinde@gmail.com',
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                label: 'LinkedIn',
                value: 'Connect with me',
                href: 'https://www.linkedin.com/in/rupeshkumarshindepmpcsm',
              },
              {
                icon: <Globe className="w-6 h-6" />,
                label: 'Website',
                value: 'Portfolio & Blog',
                href: 'https://rupeshshinde.webflow.io/',
              },
            ].map((contact, index) => (
              <a key={index} href={contact.href} className="block bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm">{contact.label}</div>
                    <div className="font-semibold">{contact.value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors" />
                <input type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors" />
              </div>
              <input type="text" placeholder="Company (Optional)" className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors" />
              <textarea placeholder="Tell me about your project or opportunity..." rows={6} className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors resize-none" />
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RS</span>
              </div>
              <span className="font-semibold">Rupesh Shinde</span>
            </div>
            <div className="text-center md:text-right">
              <p>© 2025 Rupesh Shinde. Crafted with precision and passion.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TargetIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a7.9 7.9 0 0 0 .6-3 8 8 0 1 0-8 8 7.9 7.9 0 0 0 3-.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
