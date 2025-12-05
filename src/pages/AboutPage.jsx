import { Heart, Award, Users, Sparkles } from 'lucide-react';
import image from '../assets/2.png';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 pt-10 md:pt-20 dark:bg-slate-950 transition-colors duration-500">
      <section className="py-24 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-20 animate-slideUp">
            <div className="inline-block mb-6">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 px-6 py-2 rounded-full text-sm font-bold shadow-sm flex items-center gap-2">
                <Sparkles size={16} className="text-emerald-500" />
                <span>Welcome to My Kitchen</span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
              Luto ni <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Tine</span>
            </h2>
            
            <div className="h-10 mb-8 flex justify-center items-center">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-400 font-medium typing-container px-2">
                Para craving satisfied! 🍽️
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className=" border-green-200 relative bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border dark:border-slate-800">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl"></div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white flex items-center gap-2">
                   Hello po! 
                </h3>
                <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  Nagsimula po ang aking passion sa pagluluto noong bata pa ako, nanonood sa aking lola habang nagluluto siya. Gumawa ako ng <span className="font-bold text-emerald-500">Cook Book</span> para hindi ko makalimutan ang mga specialties niya.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-emerald-100 dark:border-slate-700">
                <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed italic">
                  "Sa website ko po na ito, ibabahagi ko ang lahat ng aking mga recipe, tips, at secrets galing kay lola para gawing simple at masarap ang bawat lutong bahay."
                </p>
              </div>
            </div>

            <div className="relative group order-first lg:order-last animate-float">
              <div className="absolute inset-0 bg-emerald-500/30 rounded-[2rem] blur-2xl group-hover:bg-emerald-500/40 transition-all duration-500"></div>
              <img 
                src={image}
                alt="Filipino cooking"
                className="relative rounded-[2rem] shadow-2xl w-full object-cover transform transition-transform duration-500 group-hover:scale-[1.02] border border-white/20 dark:border-slate-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Heart, val: '45+', label: 'Recipes' },
              { icon: Users, val: '50M+', label: 'Subscribers' },
              { icon: Award, val: '80+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <div key={idx} className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-900/20 transition-all duration-300 border border-gray-100 dark:border-slate-800">
                <div className="relative z-10">
                  <div className="bg-emerald-50 dark:bg-slate-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-all duration-300 group-hover:bg-emerald-100 dark:group-hover:bg-slate-700">
                    <stat.icon className="text-emerald-600 dark:text-emerald-400" size={36} strokeWidth={2} />
                  </div>
                  <h4 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.val}</h4>
                  <p className="text-gray-500 dark:text-slate-400 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;