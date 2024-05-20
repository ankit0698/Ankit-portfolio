import { CodeIcon } from "@heroicons/react/solid";

import { projects } from "../Data/Data";

export default function Projects() {
  return (
    <section id="projects" className=" text-gray-400  body-font  ">
      <div className="  px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-8">
          <CodeIcon className="mx-auto inline-block text-white w-10 mt-12 md:mt-20 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I&apos;ve Built
          </h1>
          <p className="  text-white mx-auto leading-relaxed text-xl">
            Following are the list of apps I&apos;ve built using different
            concepts of React
          </p>
        </div>
        <div className=" grid  lg:grid-cols-2 grid-cols-1 gap-4  mt-8">
          {projects.map((project) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.link}
              key={project.image}
              className="relative md:w-[500px] md:h-[450px] w-[300px] h-[450px] border-2  shadow-2xl shadow-blue-900 border-blue-900 mx-auto justify-center items-center mb-4  rounded-xl overflow-hidden"
            >
              <div className="  ">
                <img
                  alt="gallery"
                  className="w-full md:h-[200px] h-[150px] object-cover "
                  src={project.image}
                />
                <div className="px-8 py-2  relative z-10 w-full    ">
                  <h2 className="tracking-widest text-sm md:text-2xl title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font md:text-lg text-left font-medium text-white mb-3 ">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-left text-sm  -mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
              <button className="w-full absolute bottom-0 left-0 py-3 bg-blue-900">
                See Demo
              </button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
