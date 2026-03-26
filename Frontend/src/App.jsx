import React from 'react';
import Hero from './components/Hero';
import Academics from './components/Academics';
import AttendanceGrowth from './components/AttendanceGrowth';
import AwardsSports from './components/AwardsSports';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hari's Portfolio</h1>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#academics" className="hover:text-blue-600 transition-colors">Academics</a>
            <a href="#attendance-growth" className="hover:text-blue-600 transition-colors">Growth</a>
            <a href="#achievements" className="hover:text-blue-600 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <Academics />
        <AttendanceGrowth />
        <AwardsSports />
        <Contact />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Hari. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
