import { CodeIcon } from "@heroicons/react/solid";

import { projects } from "../Data/Data";
//bg-[url('spiral2.png')] bg-no-repeat md:bg-contain bg-bottom

export default function Projects() {
  return (
    <section
      id="projects"
      className=" text-gray-400  body-font lg:-mt-44 min-h-screen relative overflow-hidden "
    >
      <img
        src="spiral2.png"
        className="hidden md:block w-full top-56 absolute animate-trans-up"
      />
      <div className="  px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-8">
          <CodeIcon className="mx-auto inline-block text-textPrimary w-10 mt-4 md:mt-16 mb-4 lg:mb-2" />
          <h1 className=" text-2xl md:text-3xl font-medium font-primary title-font mb-2  text-white">
            Apps I&apos;ve Built
          </h1>
          <p className="  text-textPrimary font-primary mx-auto leading-relaxed text-l md:text-xl">
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
              className="relative md:w-[35vw] md:h-[61vh] w-[300px] h-[420px] border-2 z-10 bg-gray-950 shadow-2xl shadow-secondary border-secondary mx-auto justify-center items-center mb-4  rounded-xl hover:scale-[1.04] transition delay-150 duration-300 ease-in-out  overflow-hidden group "
            >
              <div className="  ">
                <img
                  alt="gallery"
                  className=" md:h-[32vh] h-[150px] w-full  "
                  src={project.image}
                />

                <div className="px-8 py-2  relative z-10 w-full    ">
                  <h2 className="tracking-widest text-sm md:text-2xl title-font font-primary  group-hover:-translate-x-12 transition duration-700 ease-in-out  font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font md:text-lg text-left font-medium font-primary text-white mb-3 ">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-left  text-textPrimary font-primary text-sm  -mt-2 ">
                    {project.description}
                  </p>
                </div>
              </div>

              <button className="w-full absolute bottom-0 text-bold text-xl text-white left-0 py-3 bg-blue-900 group-hover:opacity-100 group-hover:animate-spinny md:opacity-0  transition-opacity duration-700 ease-out ">
                See Demo
              </button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
