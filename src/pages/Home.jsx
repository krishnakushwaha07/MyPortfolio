import SocialMedia from "../components/SocialMedia";

function Home() {
  return (
    <section className="max-w-4xl m-auto flex flex-col justify-evenly items-center p-3 h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img
            src="/krishnakushwaha.jpg"
            alt="kk"
            className="h-70 rounded-[50%] shadow-2xl "
          />
        </div>
        <div className="flex flex-col  justify-center items-center gap-2">
          <p className="text-2xl font-semibold">Hi! I'm Krishna Kushwaha</p>
          <p className=" wrap">
            Computer Science student | MERN stack developer
            
          </p>
          <div className="flex gap-5 mt-7">
            <button className=" px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
              <a href="/project">View my work</a>
            </button>

            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
              <a href="/resume.pdf">Download CV</a>
            </button>
          </div>
        </div>
      </div>
      <SocialMedia/>
    </section>
  );
}

export default Home;
