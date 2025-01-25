"use client"
import React, { useState, JSX } from 'react';
import { Github, Linkedin, Mail, Code, User, Briefcase } from 'lucide-react';

type Section = 'about' | 'skills' | 'projects';

const PersonalSite = () => {
  const [activeSection, setActiveSection] = useState<Section>('about');

  const sections = {
    about: (
      <div>
        <h3 className="text-xl font-semibold mb-4">About Me</h3>
        <p>Software engineer passionate about building innovative digital solutions. With 5+ years of experience in web development, I specialize in creating scalable and user-friendly applications.</p>
      </div>
    ),
    skills: (
      <div>
        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <strong>Frontend:</strong> React, Vue, Tailwind
          </div>
          <div>
            <strong>Backend:</strong> Node.js, Python, Django
          </div>
        </div>
      </div>
    ),
    projects: (
      <div>
        <h3 className="text-xl font-semibold mb-4">Key Projects</h3>
        <ul className="space-y-2">
          <li>
            <strong>Personal Dashboard</strong> - Full-stack app with real-time data visualization
          </li>
          <li>
            <strong>E-commerce Platform</strong> - Microservices architecture with payment integration
          </li>
        </ul>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex justify-center items-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="bg-blue-600 text-white p-6 flex items-center">
          <img 
            src="/api/placeholder/120/120" 
            alt="Profile" 
            className="rounded-full mr-6 border-4 border-white"
          />
          <div>
            <h1 className="text-3xl font-bold">Sarah Chen</h1>
            <p className="text-blue-100">Full Stack Developer | Tech Innovator</p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-around mb-6 border-b pb-2">
            {[
              { icon: <User />, name: 'about' as Section },
              { icon: <Code />, name: 'skills' as Section },
              { icon: <Briefcase />, name: 'projects' as Section }
            ].map(({icon, name}) => (
              <button 
                key={name}
                onClick={() => setActiveSection(name)}
                className={`flex items-center space-x-2 ${activeSection === name ? 'text-blue-600 font-bold' : 'text-gray-500'}`}
              >
                {icon}
                <span className="capitalize">{name}</span>
              </button>
            ))}
          </div>

          <div className="min-h-[200px]">
            {sections[activeSection]}
          </div>

          <div className="flex justify-center space-x-4 mt-6 border-t pt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800"><Github size={24} /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800"><Linkedin size={24} /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800"><Mail size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalSite;