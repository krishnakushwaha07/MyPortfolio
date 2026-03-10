import { FaDotCircle } from "react-icons/fa";

function About() {
  return (
    <section className="max-w-4xl m-auto flex flex-col  p-5 gap-3 min-h-screen">
      <p className="font-semibold text-[17px] p-3">
        I’m Krishna, currently pursuing a Bachelor’s degree in Computer Science,
        where I’m building a strong foundation in programming, algorithms, and
        software design. My expertise lies in full-stack development with React,
        Tailwind CSS, Node.js, Express, and EJS.
      </p>

      <div className="pl-3">
        <div className="flex items-center gap-3">
          <FaDotCircle size={9} className="text-blue-500" />
          <h2 className="font-bold text-2xl">Education</h2>
        </div>
        <div className="border-l-3 border-blue-500 p-6 ml-1 text-[17px]">
          <p>Bachelor’s degree in Computer Science</p>
          <p>CSJM University, kanpur</p>
        </div>
      </div>

      <div className="pl-3">
        <div className="flex items-center gap-3">
          <FaDotCircle size={9} className="text-blue-500" />
          <h2 className="font-bold text-2xl">Skills</h2>
        </div>
        <div className="border-l-3 border-blue-500 p-6 ml-1 text-[17px] ">
          <p>
            <span className="font-semibold">Programming languages: </span>C/C++,
            JavaScript
          </p>
          <p>
            <span className="font-semibold">Frontend development: </span>HTML,
            CSS, JavaScript, React.js, TailwindCSS
          </p>
          <p>
            <span className="font-semibold">Backend development: </span>Node.js,
            Express.js
          </p>
          <p>
            <span className="font-semibold">Database: </span>MySql, MongoDB
          </p>
          <p>
            <span className="font-semibold">Other tools: </span>VS code,
            Git/Github, Postman
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
