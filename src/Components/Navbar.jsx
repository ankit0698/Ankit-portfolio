import { HandIcon, HomeIcon } from "../assets/icons";
import { useState } from "react";
import Modal from "../UI/Modal";

export default function Navbar() {
  const [showWork, setShowWork] = useState(false);

  const workHandler = () => {
    setShowWork(true);
  };
  return (
    <header className="bg-black  sticky top-0 z-20 scroll-smooth">
      <div className="container mx-auto flex  md:p-5 p-3  flex-row items-center ">
        <a
          href="#"
          className="inline-flex title-font font-medium opacity-1  py-1 px-3  rounded text-white hover:text-green-300 hover:scale-[1.1]  md:ml-3  text-xl "
        >
          <HomeIcon />
          Ankit Mishra
        </a>

        <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 pl-1 border-l-2 hover:scale-[1.1] md:border-white opacity-1	items-center text-base ">
          <a href="#projects" className="mr-5 text-white  hover:text-green-300">
            My projects
          </a>
          <a href="#skills" className="mr-5 text-white  hover:text-green-300">
            Skills
          </a>
        </nav>
        <div className="md:block hidden">
          <button
            onClick={workHandler}
            className=" inline-flex items-center  border-10px py-1 px-3 p-4rem rounded bg-black hover:border-green-300 hover:border-2 hover:shadow-lg hover:scale-[1.2] focus:outline-none text-white mt-4 md:mt-0"
          >
            Contact Me
            <HandIcon />
          </button>
        </div>
        {showWork && <Modal open={setShowWork} />}
      </div>
    </header>
  );
}
