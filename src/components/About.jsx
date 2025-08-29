import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, BookOpen, Target, Zap, Globe, Brain } from 'lucide-react';

const About = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [countersStarted]);

  const Counter = ({ end, suffix = '', duration = 2000, started }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!started) return;

      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [started, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Learning",
      description: "Personalized learning paths adapted to your pace and style using advanced artificial intelligence."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from industry veterans and certified professionals with years of real-world experience."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Community",
      description: "Connect with learners worldwide, collaborate on projects, and build lasting professional networks."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hands-on Projects",
      description: "Apply your knowledge through real-world projects that build your portfolio and enhance skills."
    }
  ];

  const stats = [
    { number: 50000, suffix: '+', label: 'Active Students', icon: <Users className="w-6 h-6" /> },
    { number: 95, suffix: '%', label: 'Completion Rate', icon: <Target className="w-6 h-6" /> },
    { number: 200, suffix: '+', label: 'Expert Mentors', icon: <Award className="w-6 h-6" /> },
    { number: 150, suffix: '+', label: 'Course Modules', icon: <BookOpen className="w-6 h-6" /> }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About 
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}AlEdura
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of education through innovative AI-powered learning experiences. 
            We're transforming how people acquire skills and knowledge in the digital age.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 rounded-full px-4 py-2 border border-purple-500/20 mb-6">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Our Mission</span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">
              Democratizing Quality Education Through Technology
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We believe everyone deserves access to world-class education. Our platform combines cutting-edge 
              AI technology with expert instruction to create personalized learning experiences that adapt 
              to each student's unique needs, goals, and learning style.
            </p>

            <div className="space-y-4">
              {[
                "Personalized AI-driven curriculum paths",
                "Real-time progress tracking and analytics",
                "24/7 mentor support and community access",
                "Industry-recognized certifications"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    <Counter end={stat.number} suffix={stat.suffix} started={countersStarted} />
                  </div>
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:translateY(-2px)"
            >
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who've already upgraded their skills with AlEdura. 
              Start your journey today.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('courses');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;