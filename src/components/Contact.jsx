import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'general'
  });
  
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@aledura.com",
      description: "Send us an email anytime",
      link: "mailto:hello@aledura.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "123 Innovation Street",
      link: "#"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      content: "24/7 Support",
      description: "Get instant help",
      link: "#"
    }
  ];

  const interestOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'courses', label: 'Course Information' },
    { value: 'corporate', label: 'Corporate Training' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'support', label: 'Technical Support' },
    { value: 'career', label: 'Career Guidance' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setFormStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          interest: 'general'
        });
        // Reset success message after 3 seconds
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    }, 2000);
  };

  const faqs = [
    {
      question: "How do I get started with AlEdura?",
      answer: "Simply browse our course catalog, choose a program that interests you, and enroll. You'll have immediate access to course materials and our learning platform."
    },
    {
      question: "Do you offer corporate training?",
      answer: "Yes! We provide customized corporate training programs tailored to your team's needs. Contact us to discuss your requirements and get a personalized quote."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, dedicated mentorship, peer community access, and career guidance throughout your learning journey."
    },
    {
      question: "Are certificates recognized by employers?",
      answer: "Our certificates are industry-recognized and backed by leading technology companies. Many of our graduates have successfully used them to advance their careers."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 rounded-full px-4 py-2 border border-purple-500/20 mb-6">
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact 
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Us
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our courses or need personalized guidance? 
            We're here to help you start your learning journey.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:translateY(-4px) hover:shadow-lg hover:shadow-purple-500/10 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-purple-300 font-medium mb-1">{info.content}</p>
              <p className="text-gray-400 text-sm">{info.description}</p>
            </a>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
            </div>

            <div className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Interest and Subject */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    I'm interested in
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors duration-300"
                  >
                    {interestOptions.map(option => (
                      <option key={option.value} value={option.value} className="bg-gray-800">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors duration-300"
                    placeholder="Brief subject line"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors duration-300 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={formStatus === 'loading'}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  formStatus === 'loading'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 shadow-lg'
                } text-white`}
              >
                {formStatus === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/20 p-3 rounded-xl">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-400/20 p-3 rounded-xl">
                  <AlertCircle className="w-5 h-5" />
                  <span>Please fill in all required fields.</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Info & FAQs */}
          <div className="space-y-8">
            
            {/* Quick Info */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Quick Info</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Response Time</h4>
                  <p className="text-gray-300">We typically respond within 2-4 hours during business days.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Office Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM PST</p>
                  <p className="text-gray-300">Weekend: 10:00 AM - 4:00 PM PST</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Emergency Support</h4>
                  <p className="text-gray-300">24/7 technical support available for enrolled students.</p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors duration-300">
                      <span className="font-medium text-white group-hover:text-purple-300">
                        {faq.question}
                      </span>
                      <span className="text-gray-400 group-hover:text-purple-400 transform group-open:rotate-180 transition-transform duration-300">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-2 px-4 pb-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our admissions team is here to help you choose the right learning path. 
              Schedule a free consultation call to discuss your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                Schedule Free Call
              </button>
              <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;