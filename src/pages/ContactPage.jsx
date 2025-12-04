import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Youtube, CheckCircle, Sparkles } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              💬 Don't hesitate to contact us po
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Contact Us Now
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If ever po na gusto niyo ng recipe request.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Column */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles size={16} />
                Contact Info
              </div>
              
              <div className="space-y-4">
                <div className="group relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-emerald-600" size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">Address</h4>
                      <p className="text-gray-600">Navotas Balayan Batangas<br/>Philippines</p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-emerald-600" size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">Phone</h4>
                      <p className="text-gray-600">+63 906 672 8010</p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-emerald-600" size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">Email</h4>
                      <p className="text-gray-600">tinadepadua19@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-3xl shadow-2xl p-8 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl"></div>
              </div>
              <div className="relative">
                <h4 className="text-2xl font-bold mb-3">Follow Us</h4>
                <p className="mb-6 text-white/90">Stay updated with our latest recipes!</p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/christine.purilan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group bg-white/90 backdrop-blur-sm text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg"
                  >
                    <Facebook size={26} />
                  </a>
                  <a 
                    href="https://www.instagram.com/chrixtinnnne/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group bg-white/90 backdrop-blur-sm text-pink-600 w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg"
                  >
                    <Instagram size={26} />
                  </a>
                  <button className="group bg-white/90 backdrop-blur-sm text-red-600 w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Youtube size={26} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Send size={16} />
              Send Message
            </div>
            
            {isSubmitted ? (
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-500 rounded-2xl p-12 text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="text-emerald-600" size={48} strokeWidth={2.5} />
                </div>
                <h4 className="text-3xl font-bold text-emerald-800 mb-3">Message Sent!</h4>
                <p className="text-emerald-700 text-lg">Salamat sa pag-contact sa amin!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Juan Dela Cruz"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="juan@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Recipe Request"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none resize-none transition-colors"
                    placeholder="Kamusta po! Gusto ko pong mag-request ng recipe..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 text-lg"
                >
                  <Send size={22} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;