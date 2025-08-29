import React, { useState } from 'react';
import { ExternalLink, Github, Award, Users, Eye, Heart, Filter } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML Projects' },
    { id: 'design', label: 'UI/UX Design' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce AI Recommendation System",
      category: "ai",
      student: "Sarah Johnson",
      course: "Machine Learning Bootcamp",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "Advanced recommendation engine using collaborative filtering and deep learning to personalize shopping experiences.",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      likes: 234,
      views: 1520,
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      category: "web",
      student: "Mike Chen",
      course: "Full Stack Development",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Scalable real-time messaging app with video calls, file sharing, and advanced security features.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      likes: 189,
      views: 987,
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Financial Dashboard Analytics",
      category: "web",
      student: "Emma Davis",
      course: "Data Science Professional",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: "Interactive dashboard for financial data visualization with predictive analytics and automated reporting.",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      likes: 156,
      views: 743,
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Fitness Tracking Mobile App",
      category: "mobile",
      student: "Alex Rodriguez",
      course: "Mobile App Development",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      description: "Cross-platform fitness app with workout tracking, nutrition planning, and social features.",
      technologies: ["React Native", "Firebase", "Node.js", "ML Kit"],
      likes: 278,
      views: 1340,
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Smart Home IoT Controller",
      category: "ai",
      student: "David Kim",
      course: "IoT & AI Integration",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      description: "AI-powered home automation system with voice control, energy optimization, and predictive maintenance.",
      technologies: ["Python", "Raspberry Pi", "TensorFlow", "React"],
      likes: 203,
      views: 892,
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Travel Planning Platform Design",
      category: "design",
      student: "Lisa Wang",
      course: "UI/UX Design Specialization",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "Complete design system for a travel planning platform with user research, wireframes, and prototypes.",
      technologies: ["Figma", "Adobe XD", "Principle", "Sketch"],
      likes: 167,
      views: 623,
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "Blockchain Voting System",
      category: "web",
      student: "James Wilson",
      course: "Blockchain Development",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Secure, transparent voting system built on blockchain technology with smart contracts and decentralized architecture.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      likes: 312,
      views: 1876,
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 8,
      title: "Mental Health Support App",
      category: "mobile",
      student: "Maria Lopez",
      course: "Mobile Psychology Tech",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: "Mental wellness app with mood tracking, meditation guides, and AI-powered emotional support chatbot.",
      technologies: ["Flutter", "Python", "Firebase", "TensorFlow"],
      likes: 245,
      views: 1156,
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div 
            className="h-64 rounded-t-2xl"
            style={{ background: project.image }}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              ×
            </button>
            {project.featured && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span>Featured</span>
              </div>
            )}
          </div>
          
          <div className="p-8">
            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex items-center space-x-4 text-gray-400 mb-6">
              <span>by {project.student}</span>
              <span>•</span>
              <span>{project.course}</span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{project.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{project.views}</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <a 
                  href={project.liveUrl}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a 
                  href={project.githubUrl}
                  className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="gallery" className="py-20 bg-gray-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 rounded-full px-4 py-2 border border-purple-500/20 mb-6">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Student Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Amazing 
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover incredible projects created by our students. From AI applications to stunning designs, 
            see what's possible when passion meets expert guidance.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-gray-400 mr-4">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              
              {/* Project Image */}
              <div 
                className="h-40 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center text-white text-sm">
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{project.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{project.views}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                <div className="text-gray-400 text-sm mb-3">
                  <div>by {project.student}</div>
                  <div className="text-xs text-gray-500">{project.course}</div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 2).map((tech, idx) => (
                    <span key={idx} className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-gray-400 text-xs px-2 py-1">
                      +{project.technologies.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Gallery;