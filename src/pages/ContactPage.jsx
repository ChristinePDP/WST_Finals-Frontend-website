import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Youtube, CheckCircle, Sparkles } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-slideUp">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-sm">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-slate-900 dark:text-white">Contact Us Now</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-6 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="grid gap-6">
              {[
                { icon: MapPin, title: 'Address', text: 'Navotas Balayan Batangas, Philippines' },
                { icon: Phone, title: 'Phone', text: '+63 906 672 8010' },
                { icon: Mail, title: 'Email', text: 'tinadepadua19@gmail.com' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 hover:border-emerald-500/50 transition-colors">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-2xl text-emerald-600 dark:text-emerald-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-slate-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials - Glass Effect */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white shadow-xl">
               <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
               <h4 className="text-2xl font-bold mb-6 relative z-10">Follow Our Kitchen</h4>
               <div className="flex gap-4 relative z-10">
                 {[Facebook, Instagram, Youtube].map((Icon, i) => (
                   <a key={i} href="#" className="bg-white/20 backdrop-blur-md p-3 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:-translate-y-1">
                     <Icon size={24} />
                   </a>
                 ))}
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-slate-800 p-8 lg:p-10 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            {isSubmitted ? (
              <div className="text-center py-20">
                <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-6 animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-slate-400">Thank you for reaching out.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                      placeholder="Juan Dela Cruz" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                      placeholder="email@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Recipe Inquiry" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none"
                    placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
                  <Send size={20} /> Send Message
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