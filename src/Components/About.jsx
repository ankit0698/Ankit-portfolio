function About() {
  return (
    <>
      <div
        id="about"
        className=" flex px-10 lg:mt-0 pt-12 bg-[url('/bg-image.svg')] min-h-screen md:bg-none  bg-cover  md:flex-row flex-col  items-center overflow-hidden "
      >
        <div className=" md:w-1/2   md:pr-16  flex flex-col md:items-start text-left mb-8 md:mb-0  md:-mt-44 -mt-4 margin-auto ">
          <h1 className="text-bold text-[1.5rem] md:text-[2.5rem] font-['Open_Sans']  mb-2 tracking-wide font-medium text-teal-200 ">
            Hi I am Ankit Mishra<span className="text-white">👨🏻‍💻</span>
          </h1>

          <p className="text-bold text-[1rem] md:text-[1.3rem]    mb-4 font-medium text-white">
            I am a Web developer
          </p>

          <p className="mb-4 leading-relaxed text-[1rem] md:text-[1.3rem]  text-white max-w-[500px]">
            with a keen eye for creating engaging and responsive web
            experiences.{" "}
          </p>

          <p className="text-white leading-relaxed text-[1rem] md:text-[1.3rem] mb-4 max-w-[500px]">
            Over the years, I&apos;ve honed my skills in crafting seamless user
            interfaces and bringing designs to life through clean and efficient
            code.
          </p>

          <p className="text-white leading-relaxed text-[1rem] md:text-[1.3rem] max-w-[500px]">
            My journey in the tech world is not just about writing code,
            it&apos;s a continuous exploration of new challenges and a
            commitment to learning. Let&apos;s connect and explore the
            possibilities of crafting exceptional digital experiences together.
          </p>
          <br />

          <div className="flex justify-center animate-spinny">
            <a
              href="#contact"
              className="inline-flex text-white z-20 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>

            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 z-20 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className=" md:w-[60%]  -mt-60 lg:-mt-84 -mr-[280px]  ">
          <img
            className="object-contain max-w-[900px]   pt-6  overflow-hidden  rounded opacity-75"
            alt="hero"
            src="bg-image.svg"
          />
        </div>
        <div className="absolute -bottom-[10%] md:bottom-[30%] z-10 left-[30%] md:left-[45%] ">
          <a
            href="/Ankit-cv.pdf"
            download="Ankit_Cv.pdf"
            className=" flex justify-around cursor-pointer bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-2 font-mono w-[150px]"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-5 h-5 animate-bounce text-green-400"
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
    </>
  );
}
export default About;
