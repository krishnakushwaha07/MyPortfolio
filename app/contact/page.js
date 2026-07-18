import React from 'react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-12 sm:px-6 font-sans antialiased">
      <section className="mx-auto w-full max-w-3xl rounded-[2rem] border border-slate-800/90 bg-slate-900/90 p-8 sm:p-12 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur-xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Contact Me</h1>
        <p className="text-slate-300/90 mb-10 sm:mb-12">Feel free to reach out via LinkedIn, email, or GitHub.</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="https://www.linkedin.com/in/krishnakushwaha"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-3xl border border-slate-700/80 bg-slate-950/70 px-5 py-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/95"
            aria-label="LinkedIn"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v14h-4V8zM8.5 8h3.8v1.9h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v8h-4v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V22h-4V8z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">LinkedIn</p>
              <p className="mt-1 text-sm text-slate-400">Connect professionally</p>
            </div>
          </a>

          <a
            href="mailto:example@email.com"
            className="group flex items-start gap-4 rounded-3xl border border-slate-700/80 bg-slate-950/70 px-5 py-6 transition duration-300 hover:-translate-y-1 hover:border-rose-400/40 hover:bg-slate-900/95"
            aria-label="Email"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 13.065L.762 5.25A2 2 0 0 1 2 4h20a2 2 0 0 1 1.238 1.25L12 13.065z" />
                <path d="M11.25 14.096L2.01 7.016A2 2 0 0 0 0 8.848V18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8.848a2 2 0 0 0-2.01-1.832L12.75 14.096a1 1 0 0 1-1.5 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">Email</p>
              <p className="mt-1 text-sm text-slate-400">example@email.com</p>
            </div>
          </a>

          <a
            href="https://github.com/krishnakushwaha07"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-3xl border border-slate-700/80 bg-slate-950/70 px-5 py-6 transition duration-300 hover:-translate-y-1 hover:border-slate-400/40 hover:bg-slate-900/95"
            aria-label="GitHub"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-400/10 text-slate-100 transition group-hover:bg-slate-400/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.9 3.17 9.06 7.57 10.53.55.1.75-.24.75-.53v-1.86c-3.08.67-3.73-1.49-3.73-1.49-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.67 2.54 1.19 3.16.91.1-.7.38-1.19.69-1.46-2.46-.28-5.05-1.23-5.05-5.49 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 5.56 0c2.12-1.43 3.05-1.13 3.05-1.13.61 1.53.23 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.21-5.08 5.48.39.34.73 1 .73 2.02v2.99c0 .29.2.64.76.53 4.4-1.47 7.56-5.63 7.56-10.53C23.25 5.48 18.27.5 12 .5z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">GitHub</p>
              <p className="mt-1 text-sm text-slate-400">View profile</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  )
}
