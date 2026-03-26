import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Profile Image */}
        <div className="w-64 h-64 md:w-96 md:h-96 relative rounded-full p-2 bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-2xl">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img 
              src="/profile.jpg" 
              alt="Hari's Profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://ui-avatars.com/api/?name=Hari&size=512&background=random";
              }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2 tracking-wide uppercase">Welcome to my world</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Hari</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            A passionate student dedicated to academic excellence, continuous growth, and diverse achievements in both education and sports.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50 transition-all active:scale-95">
              Get in Touch
            </a>
            <a href="#academics" className="px-8 py-3 bg-white text-slate-700 font-medium rounded-full shadow-md hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-2">
              Explore My Journey <ArrowDown size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
