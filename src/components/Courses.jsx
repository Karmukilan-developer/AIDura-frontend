import React, { useState } from 'react';
import { Clock, Users, Star, ArrowRight, BookOpen, Award, TrendingUp, Code, Database, Palette, BarChart } from 'lucide-react';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const categories = [
    { id: 'all', label: 'All Courses', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'tech', label: 'Technology', icon: <Code className="w-4 h-4" /> },
    { id: 'data', label: 'Data Science', icon: <Database className="w-4 h-4" /> },
    { id: 'design', label: 'Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'business', label: 'Business', icon: <BarChart className="w-4 h-4" /> }
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Machine Learning & AI Bootcamp",
      category: "tech",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      students: 15420,
      rating: 4.9,
      price: 199,
      originalPrice: 299,
      instructor: "Dr. Sarah Chen",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"],
      description: "Master AI and Machine Learning from scratch with hands-on projects and real-world applications."
    },
    {
      id: 2,
      title: "Full Stack Web Development Mastery",
      category: "tech",
      level: "Intermediate",
      duration: "16 weeks",
      students: 23150,
      rating: 4.8,
      price: 179,
      originalPrice: 249,
      instructor: "Mark Rodriguez",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      skills: ["React", "Node.js", "MongoDB", "JavaScript"],
      description: "Build modern, scalable web applications using the latest technologies and best practices."
    },
    {
      id: 3,
      title: "Data Science & Analytics Professional",
      category: "data",
      level: "Beginner",
      duration: "10 weeks",
      students: 18750,
      rating: 4.9,
      price: 159,
      originalPrice: 229,
      instructor: "Prof. Emily Watson",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      skills: ["Python", "Pandas", "SQL", "Tableau"],
      description: "Transform raw data into actionable insights with comprehensive data science training."
    },
    {
      id: 4,
      title: "UI/UX Design Specialization",
      category: "design",
      level: "Beginner to Intermediate",
      duration: "8 weeks",
      students: 12300,
      rating: 4.7,
      price: 139,
      originalPrice: 199,
      instructor: "Alex Kim",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description: "Create stunning user interfaces and experiences that users love and businesses need."
    },
    {
      id: 5,
      title: "Digital Marketing & Growth Hacking",
      category: "business",
      level: "All Levels",
      duration: "6 weeks",
      students: 9850,
      rating: 4.6,
      price: 119,
      originalPrice: 169,
      instructor: "Jessica Liu",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      skills: ["SEO", "Social Media", "Analytics", "Content Strategy"],
      description: "Scale your business with proven digital marketing strategies and growth techniques."
    },
    {
      id: 6,
      title: "Cloud Computing & DevOps",
      category: "tech",
      level: "Intermediate to Advanced",
      duration: "14 weeks",
      students: 11200,
      rating: 4.8,
      price: 189,
      originalPrice: 269,
      instructor: "David Park",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description: "Master cloud infrastructure and modern deployment practices for scalable applications."
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course?.category === activeCategory);

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Contact form will be available soon!');
    }
  };

  return (
    <section id="courses" className="py-20 bg-gray-800 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 rounded-full px-4 py-2 border border-purple-500/20 mb-6">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Popular Courses</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Master New 
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Skills
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our expertly crafted courses designed to accelerate your career. 
            Each course includes hands-on projects, mentorship, and industry certifications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCourses?.length > 0 ? filteredCourses.map((course) => (
            <div
              key={course.id}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
              className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:translateY-2 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              
              {/* Course Image/Gradient */}
              <div 
                className="h-48 relative overflow-hidden"
                style={{ background: course.image }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-lg text-white text-xs font-medium px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-lg text-white text-xs font-medium px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredCourse === course.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {course.skills?.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="bg-white/20 backdrop-blur-lg text-white text-xs px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {course.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students?.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>by {course.instructor}</span>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400">Certificate</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">${course.price}</span>
                    <span className="text-gray-400 line-through">${course.originalPrice}</span>
                    <span className="bg-green-500/20 text-green-400 text-xs font-medium px-2 py-1 rounded-full">
                      Save {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg group flex items-center justify-center space-x-2">
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center text-gray-400 py-12">
              <p>No courses found for the selected category.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We're constantly adding new courses based on industry demands. 
            Get notified when new courses launch or request a custom learning path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Request a Course
            </button>
            <button 
              onClick={handleContactClick}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get Custom Training
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;