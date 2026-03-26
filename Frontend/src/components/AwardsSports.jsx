import React from 'react';
import { Trophy, Medal, Star, Target } from 'lucide-react';

const AwardsSports = () => {
  const achievements = [
    {
      title: "Inter-School Relay Champion",
      category: "Sports",
      icon: <Medal className="w-8 h-8 text-yellow-500" />,
      desc: "Won the Gold medal in the 4x100m relay representing the school."
    },
    {
      title: "National Debate Finalist",
      category: "Extracurricular",
      icon: <Star className="w-8 h-8 text-purple-500" />,
      desc: "Secured a spot in the top 10 finalists nationwide."
    },
    {
      title: "Science Fair 1st Prize",
      category: "Academics",
      icon: <Trophy className="w-8 h-8 text-blue-500" />,
      desc: "Awarded first prize for the most emerging player in the interstae cricket tournament"
    },
    {
      title: "Basketball Team Captain",
      category: "Leadership / Sports",
      icon: <Target className="w-8 h-8 text-red-500" />,
      desc: "Led the basketball team to the state semi-finals."
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Awards & Extracurriculars</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Beyond academics, I believe in an active and engaged life outside the classroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-50 p-8 rounded-3xl cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center border border-slate-100"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-200 mb-2">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 group-hover:text-blue-100 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSports;
