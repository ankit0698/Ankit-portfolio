import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../Data/Data";

function Skills() {
  return (
    <div className="   mx-auto px-4 pb-10 mt-12 flex md:flex-row flex-col">
      <section id="skills">
        <div className=" px-5 py-8 mx-auto">
          <div className="text-center mb-4">
            <ChipIcon className="w-10 inline-block text-white  mt-12 md:mt-12 mb-4" />
            <h1 className="md:text-3xl text-2xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4  text-left text-yellow-50 mx-auto">
              Below is a curated list of my skills, reflecting my proficiency
              and experience as a frontend developer, particularly focused on
              React.js.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-2 sm:w-1/2 w-full shadow-2xl shadow-blue-900"
              >
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;

//text-gradient-to-t from-black to-teal-900
