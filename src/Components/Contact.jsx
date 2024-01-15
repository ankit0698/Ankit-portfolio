function Contact() {
  return (
    <section id="contact" className="container min-h-screen mx-auto flex flex-wrap px-10 py-20  md:flex-row flex-col ">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className=" container lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <img
            className=" absolute lg:max-w-lg lg:w-lg object-cover object-center   "

            style={{ filter: "opacity(0.8)" }}
            src="Hire.svg"
          />
          <div className=" bg-blue-300 hover:animate-trans-right  relative flex flex-wrap  py-6 rounded shadow-md ">
            <div className=" lg:w-1/2 px-6">
              <h2 className="title-font font-bold text-black tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-rose-600">
                Bengaluru <br />
                Karnataka , India
              </p>

            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-bold text-black tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-600 leading-relaxed">
                ankit0698@gmail.com
              </a>
              <h2 className="title-font font-bold text-black tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-indigo-600">+91-8340245040</p>
            </div>
          </div>
        </div>
        <form
          // netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Work With Me
          </h2>
          <p className="leading-relaxed mb-5">

            Thank you for considering me for your project or team.
            Please fill out the form below to provide me  your requirements.

          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  )

}

export default Contact