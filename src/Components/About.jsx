function About() {
  return (
    <>
      <main className="w-full ">
        <div
          id="about"
          className="flex bg-[url('/bg-image.svg')] min-h-screen  md:bg-none bg-cover md:flex-row flex-col  overflow-hidden "
        >
          <div className="w-full md:w-[40%] flex flex-col md:items-start text-left mb-8 md:mb-0 px-8 md:px-16 py-[5%]  ">
            <h1 className="text-bold text-[1.5rem] md:text-[2rem] font-['Space_grotesk'] mb-2 tracking-wide font-medium text-white">
              Hi, I am Ankit Mishra <span className="text-white"></span>
            </h1>

            <p className="text-bold tracking-wider text-[1rem] md:text-[1.6rem] mb-4 font-medium font-['Space_grotesk'] text-textPrimary">
              I am a Web Developer
            </p>

            <p className="mb-4 tracking-wider leading-relaxed font-['Space_grotesk'] text-[1rem] md:text-[1.3rem] text-textPrimary max-w-[500px]">
              With a keen eye for creating engaging and responsive web
              experiences.
            </p>

            <p className="text-[#E3DACC] tracking-wider leading-relaxed font-['Space_grotesk'] text-[1rem] md:text-[1.3rem] mb-4 max-w-[500px]">
              Over the years, I&apos;ve honed my skills in crafting seamless
              user interfaces and bringing designs to life through clean and
              efficient code.
            </p>

            <p className="text-textPrimary tracking-wider text-[1rem] font-primary md:text-[1.3rem] max-w-[500px]">
              My journey in the tech world is not just about writing code,
              it&apos;s a continuous exploration of new challenges and a
              commitment to learning. Let&apos;s connect and explore the
              possibilities of crafting exceptional digital experiences
              together.
            </p>

            <div className="flex md:justify-start mt-6 space-x-4">
              <a
                href="#contact"
                className="flex-1 min-w-[140px] text-center text-white bg-primary border border-secondary px-[1em] py-[.5em] font-['Space_grotesk'] rounded-[22px] focus:outline-none hover:bg-green-600 md:text-l whitespace-nowrap"
              >
                Work With Me
              </a>

              <a
                href="#projects"
                className="flex-1 min-w-[140px] text-center text-white bg-gray-800 border border-gray-400 px-[1em] py-[.5em] font-['Space_grotesk'] rounded-[22px] focus:outline-none hover:bg-gray-700 md:text-l whitespace-nowrap"
              >
                See My Past Work
              </a>
            </div>
          </div>

          <div className="w-full md:w-[59%]  relative -mt-[2%]">
            <img
              className="object-cover  hidden md:block  pt-6 overflow-hidden rounded opacity-75"
              alt="hero"
              src="bg-image.svg"
            />

            <div className="absolute block  z-10 left-1/3 md:-left-[6%] top-1/3 ">
              <a
                href="/Ankit-cv.pdf"
                download="Ankit_Cv.pdf"
                className=" flex justify-around cursor-pointer md:bg-gray-900 bg-primary border-2  border-gray-500 font-primary px-3 py-2 rounded-full text-textPrimary tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-2  w-[150px]"
              >
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-5 h-5 animate-bounce text-secondary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
