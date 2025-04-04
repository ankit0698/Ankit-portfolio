import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../Data/Data";

function Skills() {
  const half = Math.ceil(skills.length / 2);
  const firstRow = [...skills.slice(0, half), ...skills.slice(0, half)];
  const secondRow = [...skills.slice(half), ...skills.slice(half)];

  return (
    <div className="w-full px-4 pb-10 mt-14 flex md:flex-row flex-col overflow-hidden">
      <section id="skills" className="w-full">
        <div className="py-8 w-full">
          <div className="text-center mb-12">
            <ChipIcon className="w-8 inline-block text-white mt-12 mb-2" />
            <h1 className="md:text-3xl text-2xl font-medium title-font font-primary text-white mb-2">
              Skills &amp; Technologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 text-left text-textPrimary font-primary mx-auto">
              Below is a curated list of my skills, reflecting my proficiency
              and experience as a frontend developer, particularly focused on
              React.js.
            </p>
          </div>
          <div className="relative w-full overflow-hidden space-y-4">
            <div className="w-full overflow-hidden">
              <div className="flex space-x-8 animate-scroll w-max whitespace-nowrap">
                {firstRow.map((skill, index) => (
                  <div
                    key={`first-${index}`}
                    className="p-2 w-auto flex-shrink-0 shadow-lg "
                  >
                    <div className="bg-secondary rounded flex p-4 h-full items-center">
                      <BadgeCheckIcon className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" />
                      <span className="title-font font-medium text-textPrimary font-primary whitespace-nowrap">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full overflow-hidden ">
              <div className="flex space-x-8 animate-scroll-reverse w-max whitespace-nowrap">
                {secondRow.map((skill, index) => (
                  <div
                    key={`second-${index}`}
                    className="p-2 w-auto flex-shrink-0 shadow-lg "
                  >
                    <div className="bg-secondary rounded flex p-4 h-full items-center">
                      <BadgeCheckIcon className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" />
                      <span className="title-font font-medium text-textPrimary font-primary whitespace-nowrap">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
