import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Facebook,
  ArrowUp,
  Heart,
  ExternalLink,
  BookOpen,
  Award,
  Users,
  Zap
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const footerLinks = {
    company: [
      { label: 'About Us', action: () => scrollToSection('about') },
      { label: 'Our Mission', action: () => scrollToSection('about') },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'News', href: '#' }
    ],
    courses: [
      { label: 'All Courses', action: () => scrollToSection('courses') },
      { label: 'Machine Learning', href: '#' },
      { label: 'Web Development', href: '#' },
      { label: 'Data Science', href: '#' },
      { label: 'UI/UX Design', href: '#' },
      { label: 'Mobile Development', href: '#' }
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', action: () => scrollToSection('contact') },
      { label: 'Live Chat', href: '#' },
      { label: 'Course Support', href: '#' },
      { label: 'Technical Issues', href: '#' },
      { label: 'Accessibility', href: '#' }
    ],
    resources: [
      { label: 'Student Gallery', action: () => scrollToSection('gallery') },
      { label: 'Success Stories', action: () => scrollToSection('reviews') },
      { label: 'Free Resources', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'E-books', href: '#' },
      { label: 'Podcasts', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Refund Policy', href: '#' },
      { label: 'Academic Integrity', href: '#' },
      { label: 'Code of Conduct', href: '#' }
    ]
  };

  const socialLinks = [
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: '#', 
      label: 'Twitter',
      hoverColor: 'hover:bg-blue-500'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: '#', 
      label: 'LinkedIn',
      hoverColor: 'hover:bg-blue-700'
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: '#', 
      label: 'Instagram',
      hoverColor: 'hover:bg-pink-500'
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      href: '#', 
      label: 'YouTube',
      hoverColor: 'hover:bg-red-500'
    },
    { 
      icon: <Facebook className="w-5 h-5" />, 
      href: '#', 
      label: 'Facebook',
      hoverColor: 'hover:bg-blue-600'
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: '50K+', label: 'Active Students' },
    { icon: <BookOpen className="w-6 h-6" />, number: '200+', label: 'Courses' },
    { icon: <Award className="w-6 h-6" />, number: '95%', label: 'Success Rate' },
    { icon: <Zap className="w-6 h-6" />, number: '24/7', label: 'Support' }
  ];

  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          
          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 mb-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated with AlEdura
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest course updates, career tips, and exclusive offers delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                />
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  AlEdura
                </div>
                <div className="text-sm text-gray-400 mb-4">AI Education Era</div>
                <p className="text-gray-300 leading-relaxed">
                  Transforming careers through innovative AI-powered learning experiences. 
                  Join thousands of students who have achieved their dream jobs with AlEdura.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>hello@aledura.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Courses</h4>
              <ul className="space-y-3">
                {footerLinks.courses.map((link, index) => (
                  <li key={index}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.hoverColor} hover:text-white transition-all duration-300 hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-gray-800 mt-8">
              <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
                <span>© 2024 AlEdura. Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>for learners worldwide. All rights reserved.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;