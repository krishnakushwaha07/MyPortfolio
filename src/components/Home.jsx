function Home() {
  return (
    <section className="flex flex-col h-full w-full items-center">
      <div className="flex flex-col items-center gap-5 justify-evenly h-[80%] md:flex-col md:h-[70%] lg:w-[70%] lg:flex-row xl:h-full xl:w-[60%] ">
        <div>
          <img
            src="/krishnakushwaha.jpg"
            alt="kk"
            className="h-80 rounded-[50%]"
          />
        </div>
        <div className="flex flex-col w-[90%] gap-5 sm:w-[70%] text-center item-center md:w-[60%] lg:w-[55%]">
          <p className="text-3xl">Hi! I'm krishna kushwaha</p>
          <p className="text-xl wrap">
            {" "}
            A passionate full-stack developer crafting modern, user-friendly web
            apps with React, Node.js, and Tailwind CSS. I love solving problems
            and creating impactful projects that blend functionality with
            design.
          </p>
          <div className="flex justify-evenly w-full mt-15">
            <button className="border-2 rounded-[3px] px-4 flex">
              <a href="/project">View my work</a>
            </button>

            <button>
              <a href="/resume.pdf" className="border-2 rounded-[3px] px-4 flex">
                Download resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
