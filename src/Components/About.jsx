import { Link } from "react-router-dom"
function About() {
  return (
    <>
      <div className="container min-h-screen mx-auto flex flex-wrap px-10 py-20  md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-300 ">
            Hi, I am Ankit Mishra.
            <br className="hidden lg:inline-block" />I am a front end  Web developer
          </h1>
          <p className="mb-8 leading-relaxed text-l text-white">
            with a keen eye for creating engaging and responsive web experiences. </p>
          <br className="hidden lg:inline-block" />
          <p className="text-white text-l">Over the years, I&apos;ve honed my skills in crafting seamless user interfaces and bringing designs to life through clean and efficient code.</p>

          <br className="hidden lg:inline-block" />
          <p className="text-white text-l"> Driven by a love for problem-solving and a commitment to staying at the forefront of web technologies, I thrive in turning ideas into intuitive, user-friendly applications. From translating design concepts into reality to collaborating with cross-functional teams, I enjoy the dynamic nature of frontend development.</p>

          <br className="hidden lg:inline-block" />
          <p className="text-white text-l">My journey in the tech world is not just about writing code, it&apos;s a continuous exploration of new challenges and a commitment to learning. Let&apos;s connect and explore the possibilities of crafting exceptional digital experiences together.</p>
          <br />


          <div className="flex justify-center">
            <Link
              to='contact'

              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </Link>

            <Link
              to='projects'
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-lg md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded animate-trans-right"
            alt="hero"
            src="about.svg"
          />
        </div>
      </div>
    </>

  )
}
export default About