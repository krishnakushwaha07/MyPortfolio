

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen gap-5 p-2">
      <p className="text-2xl font-bold">Oops! Page not found.</p>
      <button className="mt-6 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        <a href="/">Go to home</a>
      </button>
    </div>
  );
}

export default ErrorPage;
