import React from 'react';
import {
  PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const AttendanceGrowth = () => {
  // Data for Attendance (Circular Graph)
  const attendanceData = [
    { name: 'Present', value: 92 },
    { name: 'Absent', value: 8 }
  ];
  const COLORS = ['#2563eb', '#cbd5e1']; // Blue-600 and Slate-300

  // Data for Growth (Line Graph)
  const growthData = [
    { year: '2020', grade: 85 },
    { year: '2021', grade: 88 },
    { year: '2022', grade: 92 },
    { year: '2023', grade: 95 },
    { year: '2024', grade: 96 }
  ];

  return (
    <section id="attendance-growth" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Attendance & Growth</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A visual representation of my consistency and continuous academic improvement over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Attendance Section */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Overall Attendance</h3>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={attendanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {attendanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => `${value}%`}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-slate-600 mt-4 text-center">
              Maintaining a <span className="font-bold text-blue-600">92%</span> attendance rate, ensuring active participation and consistent learning.
            </p>
          </div>

          {/* Growth Section */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Academic Growth</h3>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dy={10} />
                  <YAxis domain={['dataMin - 5', 100]} axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dx={-10} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Score']}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="grade" 
                    stroke="#4f46e5" 
                    strokeWidth={4} 
                    dot={{ fill: '#4f46e5', strokeWidth: 2, r: 6 }} 
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-slate-600 mt-4 text-center">
              A steady exponential growth in overall grades, reflecting adaptability and hard work.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AttendanceGrowth;
