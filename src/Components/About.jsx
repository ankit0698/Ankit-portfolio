function About() {
  return (
    <>
      <div
        id="about"
        className=" flex px-10 md:py-20 py-10 bg-[url('/bg-image.svg')]  md:bg-none  bg-cover  md:flex-row flex-col items-center "
      >
        <div className=" md:w-1/2  lg:pr-12 md:pr-16  flex flex-col md:items-start text-left mb-16 md:mb-0 md:-mt-20 items-center ">
          <h1 className="text-bold text-2xl font-['Open_Sans'] md:text-3xl mb-4 font-medium text-blue-300 ">
            Hi 🧑‍💻 I am Ankit Mishra.
            <br className="hidden lg:inline-block" />I am a front end Web
            developer
          </h1>
          <p className="mb-4 leading-relaxed  text-l md:text-xl text-white">
            with a keen eye for creating engaging and responsive web
            experiences.{" "}
          </p>

          <p className="text-white leading-relaxed text-l md:text-xl mb-4">
            Over the years, I&apos;ve honed my skills in crafting seamless user
            interfaces and bringing designs to life through clean and efficient
            code.
          </p>
          <p className="text-white leading-relaxed text-l md:text-xl">
            Driven by a love for problem-solving and a commitment to staying at
            the forefront of web technologies, I thrive in turning ideas into
            intuitive, user-friendly applications. From translating design
            concepts into reality to collaborating with cross-functional teams,
            I enjoy the dynamic nature of frontend development.
          </p>

          <br className="hidden lg:inline-block" />
          <p className="text-white leading-relaxed text-l md:text-xl">
            My journey in the tech world is not just about writing code,
            it&apos;s a continuous exploration of new challenges and a
            commitment to learning. Let&apos;s connect and explore the
            possibilities of crafting exceptional digital experiences together.
          </p>
          <br />

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>

            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className=" md:w-5/6   -mt-32 -mr-[280px] ">
          <img
            className="object-contain  rounded opacity-85"
            alt="hero"
            src="bg-image.svg"
          />
        </div>
      </div>
    </>
  );
}
export default About;
