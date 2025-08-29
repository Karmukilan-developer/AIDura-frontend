import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp, Users } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Data Scientist",
      company: "Google",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      rating: 5,
      review: "AlEdura completely transformed my career. The AI-powered learning paths adapted perfectly to my schedule and learning style. Within 6 months, I landed my dream job at Google. The hands-on projects and mentorship were invaluable.",
      course: "Complete Machine Learning Bootcamp",
      beforeRole: "Marketing Analyst",
      salaryIncrease: "150%",
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Full Stack Developer",
      company: "Microsoft",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      rating: 5,
      review: "The quality of instruction and real-world projects at AlEdura is unmatched. I built a complete portfolio while learning, which made job hunting incredibly easy. The community support was amazing throughout my journey.",
      course: "Full Stack Development Mastery",
      beforeRole: "Junior Designer",
      salaryIncrease: "200%",
      featured: false
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Product Manager",
      company: "Apple",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      rating: 5,
      review: "What sets AlEdura apart is the focus on practical skills and industry connections. The career guidance and interview preparation helped me transition from a completely different field into tech leadership at Apple.",
      course: "Product Management Excellence",
      beforeRole: "Retail Manager",
      salaryIncrease: "180%",
      featured: true
    },
    {
      id: 4,
      name: "David Kim",
      role: "UX Designer",
      company: "Airbnb",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      rating: 5,
      review: "The design thinking methodology and user research techniques I learned at AlEdura gave me a competitive edge. The portfolio review sessions with industry experts were game-changing for my career transition.",
      course: "UI/UX Design Specialization",
      beforeRole: "Graphic Designer",
      salaryIncrease: "120%",
      featured: false
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Machine Learning Engineer",
      company: "Tesla",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      rating: 5,
      review: "The depth of technical content combined with practical applications made all the difference. I'm now working on autonomous vehicle AI at Tesla, something I never thought possible before joining AlEdura.",
      course: "Advanced AI & Deep Learning",
      beforeRole: "Software Tester",
      salaryIncrease: "220%",
      featured: true
    },
    {
      id: 6,
      name: "James Wilson",
      role: "DevOps Engineer",
      company: "Netflix",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      rating: 5,
      review: "The hands-on approach to cloud technologies and the emphasis on real-world problem-solving prepared me perfectly for the challenges at Netflix. The instructors are industry veterans with incredible insights.",
      course: "Cloud Computing & DevOps",
      beforeRole: "System Administrator",
      salaryIncrease: "160%",
      featured: false
    }
  ];

  const stats = [
    { number: '4.9', suffix: '/5', label: 'Average Rating', icon: <Star className="w-5 h-5" /> },
    { number: '95', suffix: '%', label: 'Success Rate', icon: <TrendingUp className="w-5 h-5" /> },
    { number: '50K', suffix: '+', label: 'Happy Students', icon: <Users className="w-5 h-5" /> },
    { number: '98', suffix: '%', label: 'Would Recommend', icon: <Award className="w-5 h-5" /> }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToReview = (index) => {
    setCurrentReview(index);
    setAutoPlay(false);
  };

  return (
    <section id="reviews" className="py-20 bg-gray-800 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 rounded-full px-4 py-2 border border-purple-500/20 mb-6">
            <Quote className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our 
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Students Say
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from students who have transformed their careers 
            and achieved their dream jobs through AlEdura.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50"
            >
              <div className="flex justify-center text-purple-400 mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-12">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-700/50 relative overflow-hidden">
            
            {/* Background Pattern */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-2xl"
              style={{ background: testimonials[currentReview].image }}
            ></div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="text-purple-400/30 mb-6">
                <Quote size={60} />
              </div>

              {/* Review Text */}
              <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                "{testimonials[currentReview].review}"
              </blockquote>

              {/* Reviewer Info */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
                    style={{ background: testimonials[currentReview].image }}
                  >
                    {testimonials[currentReview].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonials[currentReview].name}</h4>
                    <p className="text-purple-300">{testimonials[currentReview].role}</p>
                    <p className="text-gray-400">{testimonials[currentReview].company}</p>
                  </div>
                </div>

                {/* Career Growth Stats */}
                <div className="flex flex-col items-end space-y-2">
                  <div className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+{testimonials[currentReview].salaryIncrease} salary increase</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    From {testimonials[currentReview].beforeRole}
                  </div>
                  <div className="flex">
                    {[...Array(testimonials[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-700/80 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-700/80 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview 
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Featured Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.filter(t => t.featured).map((testimonial,) => (
            <div 
              key={testimonial.id}
              className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:translateY(-2px)"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                  Featured
                </div>
              </div>
              
              <blockquote className="text-gray-300 mb-4 line-clamp-4">
                "{testimonial.review.substring(0, 120)}..."
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: testimonial.image }}
                >
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their careers with AlEdura. 
              Your success story could be next.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('courses');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;