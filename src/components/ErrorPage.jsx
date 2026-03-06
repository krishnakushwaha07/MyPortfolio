import React from "react";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen gap-5">
      <p className="text-2xl">404 Page not found.</p>
      <button className="border-2 rounded-[3px] hover:scale-x-105 hover:bg-green-600 hover:text-white">
        <a href="/">Go to home</a>
      </button>
    </div>
  );
}

export default ErrorPage;
