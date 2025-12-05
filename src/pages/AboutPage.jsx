import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
import image from '../assets/2.png';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-emerald-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✨ Welcome to My Kitchen
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Luto ni Tine
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              Para craving satisfied! 🍽️
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
            <div className="space-y-6">
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p className="bg-white p-6 rounded-2xl shadow-sm border-4 border-emerald-500">
                  Hello po, welcome po sa aking <span className="font-bold text-emerald-600">Cook Book</span>! 
                </p>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <Sparkles size={16} />
                  My story
                </div>
                <p className="bg-emerald-100 p-6 rounded-2xl shadow-sm">
                  Nagsimula po ang aking passion sa pagluluto noong bata pa ako, nanonood sa aking 
                  lola habang nagluluto siya ng masasarap na ulam para sa buong pamilya. Mula noon, 
                  naisipan ko na pong gumawa ng cook book para hindi ko makalmutan mga specialties n'ya.
                </p>
                <p className="bg-emerald-100 p-6 rounded-2xl shadow-sm">
                  Sa website na ito, ibabahagi ko ang lahat ng aking mga recipe, tips, at secrets 
                  para gawing simple at masarap ang bawat lutong bahay. Sama-sama nating bigyang 
                  buhay ang mga klasikong Filipino dishes!
                </p>
              </div>
            </div>
            
            {/* Image - Below text on medium, side by side on large */}
            <div className="relative group order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img 
                src={image}
                alt="Filipino cooking"
                className="relative rounded-3xl shadow-2xl w-full transform"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Heart className="text-emerald-600" size={36} strokeWidth={2.5} />
                </div>
                <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">200+</h4>
                <p className="text-gray-600 font-semibold text-lg">Recipes</p>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Users className="text-emerald-600" size={36} strokeWidth={2.5} />
                </div>
                <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">50K+</h4>
                <p className="text-gray-600 font-semibold text-lg">Subscribers</p>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Award className="text-emerald-600" size={36} strokeWidth={2.5} />
                </div>
                <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">30+</h4>
                <p className="text-gray-600 font-semibold text-lg">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;