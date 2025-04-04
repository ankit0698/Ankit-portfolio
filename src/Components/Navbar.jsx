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
      <div className="container  flex  md:p-5 p-3  flex-row justify-between items-center">
        <a
          href="#"
          className="inline-flex  font-primary font-medium opacity-1 tracking-wider py-1 px-3  rounded text-textPrimary md:ml-3 text-lg  md:text-2xl "
        >
          <HomeIcon />
          Ankit Mishra
        </a>

        <nav className=" md:mr-auto md:ml-4 tracking-wider md:py-1 md:pl-4 pl-1 md:border-l-2  md:border-textPrimary opacity-1	items-center text-lg  md:text-2xl">
          <a href="#projects" className="mr-5 text-textPrimary font-primary  ">
            My projects
          </a>
          <a
            href="#skills"
            className="mr-5 text-textPrimary  tracking-wider font-primary "
          >
            Skills
          </a>
        </nav>
        <div className="md:block hidden">
          <button
            onClick={workHandler}
            className=" inline-flex items-center tracking-wider  text-lg  md:text-2xl border-10px py-1 px-3 p-4rem rounded font-primary bg-black cursor-pointer  hover:border hover:border-secondary focus:outline-none text-textPrimary mt-4 md:mt-0"
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
