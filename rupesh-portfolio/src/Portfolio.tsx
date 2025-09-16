import React from 'react';
import { Briefcase, GraduationCap, Mail } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Rupesh Shinde</h1>
        <p className="text-lg text-gray-600">Director of Product Management | AI & SEO Strategist</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex items-center mb-4"><Briefcase className="mr-2" /> Experience</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Product Manager - Wipro (Planned)</h3>
            <p>Negotiating for Director role with 20-30 LPA salary.</p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">Product Manager - Encora</h3>
            <p>Optimized billing, automation, and UX/UI collaboration for 1M+ users.</p>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex items-center mb-4"><GraduationCap className="mr-2" /> Education</h2>
        <p>B.Sc. in Programming and Data Science - IIT Madras (in progress)</p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <a href="mailto:rupesh@example.com" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          <Mail className="mr-2" /> Email Me
        </a>
      </section>
    </div>
  );
};

export default Portfolio;
