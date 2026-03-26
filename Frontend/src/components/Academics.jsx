import React from 'react';
import { BookOpen, Award, GraduationCap } from 'lucide-react';

const Academics = () => {
  const achievements = [
    {
      year: "2025",
      title: "High School Graduation",
      description: "Graduated with top honors, achieving a 95% overall score.",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />
    },
    {
      year: "2024",
      title: "Science Olympiad Winner",
      description: "Secured 1st place in the State Level Science Olympiad.",
      icon: <Award className="w-6 h-6 text-indigo-600" />
    },
    {
      year: "2021",
      title: "Best Student Award",
      description: "Recognized for outstanding academic performance and leadership.",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section id="academics" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Academic Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            My educational journey has been marked by dedication, curiosity, and a drive for excellence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>

          <div className="space-y-12">
            {achievements.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>

                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-blue-100 shadow-md z-10 shrink-0 my-4 md:my-0">
                  {item.icon}
                </div>

                <div className="w-full md:w-5/12 bg-slate-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
