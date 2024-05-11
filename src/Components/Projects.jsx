import { CodeIcon } from "@heroicons/react/solid";

import { projects } from "../Data/Data";

export default function Projects() {
  return (
    <section id="projects" className=" text-gray-400  body-font mx-8 ">
      <div className="container  px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block text-white w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I&apos;ve Built
          </h1>
          <p className="lg:w-2/3  text-white mx-auto leading-relaxed text-xl">
            Following are the list of apps I&apos;ve built using different
            concepts of React
          </p>
        </div>
        <div className="animate-spin flex flex-wrap -m-12 overflow-hidden">
          {projects.map((project) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100  p-4 overflow-hidden"
            >
              <div className="flex relative h-[300px]  ">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full  object-center  rounded"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4  border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm md:text-2xl title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed md:text-xl">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
