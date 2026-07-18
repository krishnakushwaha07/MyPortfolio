import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="space-y-6 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-slate-900/80 p-8 shadow-[0_0_60px_rgba(15,23,42,0.45)]">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-t-4 border-sky-400 border-t-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
