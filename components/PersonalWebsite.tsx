import React from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

const PersonalWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Jane Smith</h1>
          <p className="text-xl text-gray-600 mb-6">
            Engineering Researcher | Machine Learning Engineer
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">
              I am a research engineer focusing on the intersection of machine learning
              and systems engineering. My work aims to make AI systems more efficient
              and accessible. Currently pursuing my PhD at Tech University, I combine
              academic research with practical engineering solutions.
            </p>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Machine Learning Systems",
              "Distributed Computing",
              "Neural Architecture Search",
              "Green AI"
            ].map((interest) => (
              <div key={interest} className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-900">{interest}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Selected Publications</h2>
          <div className="space-y-6">
            {[
              {
                title: "Efficient Neural Architecture Search for Resource-Constrained Environments",
                conference: "ICML 2024",
                link: "#"
              },
              {
                title: "Distributed Training Optimization in Edge Computing",
                conference: "NeurIPS 2023",
                link: "#"
              }
            ].map((pub) => (
              <div key={pub.title} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{pub.title}</h3>
                    <p className="text-gray-600">{pub.conference}</p>
                  </div>
                  <a href={pub.link} className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "ML Pipeline Optimization",
                description: "Developed a system for automatically optimizing ML training pipelines, reducing training time by 40%.",
                tech: ["Python", "PyTorch", "Docker"]
              },
              {
                title: "Distributed Training Framework",
                description: "Created a framework for distributed model training across edge devices.",
                tech: ["Go", "gRPC", "Kubernetes"]
              }
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <Mail className="w-5 h-5 mr-2" />
                jane.smith@university.edu
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5 mr-2" />
                github.com/janesmith
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <FileText className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © 2025 Jane Smith. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;