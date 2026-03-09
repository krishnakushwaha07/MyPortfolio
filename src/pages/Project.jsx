import { useEffect, useState } from "react";
import projects from "../api/projects.json";

function Project() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getApiData = () => {
      setData(projects);
    };
    getApiData();
  }, []);

  return (
    <section className="max-w-4xl m-auto flex p-4 min-h-screen justify-center">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start ">
        {data.map((project) => {
          return (
            <li
              key={project.id}
              className="bg-blue-50 flex flex-col p-5 rounded-[5px] justify-center gap-2 max-w-100"
            >
              <img src={project.image} alt="kk" />
              <p className="font-bold text-xl">{project.name}</p>
              <p>{project.description}</p>
              <p>Technology: {project.technology.join(", ")}</p>
              <div className="flex gap-4 mt-1">
                <button className="px-1.5 py-0.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
                  <a href={project.github}>Github repo</a>
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
                  <a href={project.live}>View live</a>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Project;
