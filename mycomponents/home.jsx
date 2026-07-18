import { ArrowRight, Code2, Zap, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-blue-400 font-semibold flex items-center gap-2">
                  <Zap size={16} /> Welcome to my portfolio
                </p>
                <div className="block md:hidden mt-6">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-3xl"></div>
                    <div className="relative bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 h-full flex items-center justify-center">
                      <Code2
                        size={60}
                        className="sm:w-24 sm:h-24 md:w-32 md:h-32 text-slate-700"
                      />
                    </div>
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Hi, I'm Krishna Kushwaha.
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-400">
                  I'm a passionate web developer specializing in building modern
                  and responsive web applications. I love turning ideas into
                  reality through clean and efficient code.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="/projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center sm:justify-start gap-2 transition transform hover:scale-105 text-sm sm:text-base"
                >
                  View My Work <ArrowRight size={20} />
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="border-2 border-slate-600 text-white hover:bg-slate-800 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden md:block relative h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-96">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-3xl"></div>
              <div className="relative bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 h-full flex items-center justify-center">
                <Code2
                  size={60}
                  className="sm:w-24 sm:h-24 md:w-32 md:h-32 text-slate-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            What I Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Clean Code",
                desc: "Well-structured, maintainable code following best practices",
              },
              {
                icon: Zap,
                title: "High Performance",
                desc: "Optimized applications that load fast and run smoothly",
              },
              {
                icon: ExternalLink,
                title: "Responsive Design",
                desc: "Beautiful layouts that work seamlessly on all devices",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 hover:bg-slate-800/80 transition group"
              >
                <item.icon
                  size={40}
                  className="text-blue-400 mb-4 group-hover:scale-110 transition"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">Let's Work Together</h2>
          <p className="text-xl text-slate-400">
            Have an exciting project in mind? I'd love to hear about it.
          </p>
          <a
            href="/contact"
            className="inline-block bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 KrishnaK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
