import React from "react";
import { BookOpen, Award, Briefcase, Calendar } from "lucide-react";

const educationData = [
  {
    institution: "CSJM University, Kanpur",
    degree: "Bachelor in computer science",
    period: "2024 — 2027",
    details: ["Graduated with Honors", "Coursework: Computer fundamentals, Data Structures, Algorithms"],
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-12 px-6 lg:px-20 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-blue-400" />
            <h1 className="text-5xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Education
            </h1>
          </div>
          <p className="mt-3 text-gray-500 text-lg">
            Academic background and highlights.
          </p>
        </header>

        <section className="space-y-6">
          {educationData.map((edu, idx) => (
            <article
              key={idx}
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3 flex-1">
                  <Award className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h2>
                    <p className="text-sm text-slate-300 mt-2 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 shrink-0 whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  <time>{edu.period}</time>
                </div>
              </div>
              <ul className="mt-4 ml-9 space-y-2">
                {edu.details.map((d, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-7 h-7 text-emerald-400" />
            <h3 className="text-3xl font-bold">Skills</h3>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "C/C++",
              "Python",
              "JavaScript",
              "HTML",
              "CSS",
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Data Structures",
              "Algorithms",
              "Next.js",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-linear-to-r from-blue-900/50 to-cyan-900/50 px-4 py-2 text-sm font-semibold text-blue-200 border border-blue-700/50 hover:border-blue-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
