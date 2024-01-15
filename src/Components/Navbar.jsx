import { Link } from 'react-router-dom'
import { HandIcon, HomeIcon } from '../assets/icons';
import { useState } from 'react'
import Modal from "../UI/Modal"



export default function Navbar() {
  const [showWork, setShowWork] = useState(false)


  const workHandler = () => {
    setShowWork(true)

  }
  return (
    <header className="bg-blue-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        <Link to='/' className="inline-flex title-font font-medium   py-1 px-3  rounded text-white hover:text-green-300  md:ml-3  text-xl">
          <HomeIcon />
          Ankit Mishra
        </Link>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to='projects' className="mr-5 text-white hover:text-green-300">
            My projects
          </Link>
          <Link to='skills' className="mr-5 text-white hover:text-green-300">
            Skills
          </Link>

        </nav>

        <button
          onClick={workHandler}
          className="inline-flex items-center bg-indigo-500 border-10px py-1 px-3 p-4rem rounded hover:bg-black text-white mt-4 md:mt-0">
          Contact Me
          <HandIcon />
        </button>
        {showWork && <Modal open={setShowWork} />}

      </div>
    </header>
  );
}





