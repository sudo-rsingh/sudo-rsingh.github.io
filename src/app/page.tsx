import React from 'react';
import { Github, Linkedin, Mail, FileCode, Brain, Server } from 'lucide-react';

// Simulated data fetching function
function getProjectData() {
  return [
    {
      id: 1,
      title: "Machine Learning Stock Predictor",
      description: "Developed a deep learning model using LSTM networks to predict stock market trends with 85% accuracy.",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-Learn"],
      githubLink: "https://github.com/username/stock-predictor"
    },
    {
      id: 2,
      title: "Distributed Microservices Architecture",
      description: "Designed a scalable microservices system with Docker, Kubernetes, and gRPC for enhanced performance.",
      technologies: ["Docker", "Kubernetes", "gRPC", "Go", "Redis"],
      githubLink: "https://github.com/username/microservices-arch"
    },
    {
      id: 3,
      title: "AI-Powered Code Assistant",
      description: "Created an intelligent code generation tool using transformer models and advanced NLP techniques.",
      technologies: ["TypeScript", "React", "OpenAI", "Hugging Face"],
      githubLink: "https://github.com/username/code-assistant"
    }
  ];
}

const Portfolio = () => {
  const projects = getProjectData();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0 text-center sm:text-left w-full sm:w-auto">Alex Rodriguez</h1>
          <nav className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4 w-full sm:w-auto">
            <a href="#about" className="px-2 sm:px-0 hover:text-blue-600">About</a>
            <a href="#projects" className="px-2 sm:px-0 hover:text-blue-600">Projects</a>
            <a href="#skills" className="px-2 sm:px-0 hover:text-blue-600">Skills</a>
            <a href="#contact" className="px-2 sm:px-0 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Full Stack ML Engineer</h2>
          <p className="text-base md:text-xl text-gray-600 mb-6">
            Transforming complex problems into elegant software solutions using cutting-edge machine learning and distributed systems.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/username" target="_blank" className="text-gray-700 hover:text-black">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" className="text-gray-700 hover:text-blue-600">
              <Linkedin size={32} />
            </a>
            <a href="mailto:alex.rodriguez@email.com" className="text-gray-700 hover:text-red-600">
              <Mail size={32} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="https://placehold.co/400" 
            alt="Alex Rodriguez" 
            className="w-64 h-64 md:w-96 md:h-96 rounded-full shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <FileCode size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold text-xl mb-2">Software Development</h3>
              <p>Python, JavaScript, TypeScript, Go, Java</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <Brain size={48} className="mx-auto mb-4 text-green-600" />
              <h3 className="font-bold text-xl mb-2">Machine Learning</h3>
              <p>TensorFlow, PyTorch, Scikit-Learn, Keras</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <Server size={48} className="mx-auto mb-4 text-purple-600" />
              <h3 className="font-bold text-xl mb-2">DevOps & Cloud</h3>
              <p>Docker, Kubernetes, AWS, GCP, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <Github className="mr-2" size={20} /> View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-base md:text-xl text-gray-600 mb-8">
            Interested in collaborating or discussing innovative tech solutions? Reach out!
          </p>
          <a 
            href="mailto:alex.rodriguez@email.com" 
            className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm md:text-base">&copy; 2024 Alex Rodriguez. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;