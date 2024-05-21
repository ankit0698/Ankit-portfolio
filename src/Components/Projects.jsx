import { CodeIcon } from "@heroicons/react/solid";

import { projects } from "../Data/Data";

export default function Projects() {
  return (
    <section id="projects" className=" text-gray-400   body-font lg:-mt-44  ">
      <div className="  px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-8">
          <CodeIcon className="mx-auto inline-block text-white w-10 mt-4 md:mt-16 mb-4 lg:mb-2" />
          <h1 className=" text-2xl md:text-3xl font-medium title-font mb-2  text-white">
            Apps I&apos;ve Built
          </h1>
          <p className="  text-white mx-auto leading-relaxed text-l md:text-xl">
            Following are the list of apps I&apos;ve built using different
            concepts of React
          </p>
        </div>
        <div className=" grid  lg:grid-cols-2 grid-cols-1 gap-4  md:mt-8">
          {projects.map((project) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.link}
              key={project.image}
              className="relative md:w-[500px] md:h-[480px] w-[300px] h-[420px] border-2  shadow-2xl shadow-blue-900 border-blue-900 mx-auto justify-center items-center mb-4  rounded-xl hover:scale-[1.04] transition delay-150 duration-300 ease-in-out  overflow-hidden group "
            >
              <div className="  ">
                <img
                  alt="gallery"
                  className=" md:h-[250px] h-[150px] w-full  "
                  src={project.image}
                />

                <div className="px-8 py-2  relative z-10 w-full    ">
                  <h2 className="tracking-widest text-sm md:text-2xl title-font  group-hover:-translate-x-12 transition duration-700 ease-in-out  font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font md:text-lg text-left font-medium text-white mb-3 ">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-left text-sm  -mt-2 ">
                    {project.description}
                  </p>
                </div>
              </div>

              <button className="w-full absolute bottom-0 text-bold text-xl text-white left-0 py-3 bg-blue-900 group-hover:opacity-100 group-hover:animate-spin md:opacity-0  transition-opacity duration-700 ease-out ">
                See Demo
              </button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
