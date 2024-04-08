import { useForm, ValidationError } from "@formspree/react";
import successIcon from "../assets/success.svg";

function Contact() {
  const [state, handleSubmit] = useForm("xrgnkpql");
  if (state.succeeded) {
    return (
      <div
        className="container min-h-screen 
      mx-auto flex flex-wrap px-10 py-20  
      md:flex-row flex-col items-left"
      >
        <img src={successIcon} alt="" className=" h-10 w-10 flex mx-1" />
        <p className="flex h-32 w-100 pt-1 pl-1 text-2xl text-yellow-100 ">
          Thanks for Joining! I will get in touch with you soon.
        </p>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="container min-h-screen mx-auto flex flex-wrap px-10 pb-12  md:flex-row flex-col items-center "
    >
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col md:items-start mb-16  items-center text-center">
        <img
          className=" lg:max-w-lg object-cover w-full"
          style={{ filter: "opacity(1)" }}
          src="Hire.svg"
        />
        <div className="bg-white hover:scale-[1.1] relative flex flex-wrap pr-4 py-4  md:flex-row md:pr-12 rounded-xl shadow-md">
          <div className="md:w-1/2 px-6">
            <h2 className="title-font font-bold text-black text-xs">ADDRESS</h2>
            <p className="mt-1 text-rose-600">
              Bengaluru <br />
              Karnataka, India
            </p>
          </div>
          <div className="md:w-1/2 px-6 flex flex-col">
            <div>
              <h2 className="title-font font-bold text-black text-xs">EMAIL</h2>
              <a className="text-indigo-600 leading-relaxed">
                ankit0698@gmail.com
              </a>
            </div>
            <div>
              <h2 className="title-font font-bold text-black tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-indigo-600">+91-8340245040</p>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        name="contact"
        className="md:w-[500px] border-2 border-teal-200 rounded-2xl flex flex-col p-6 mt-4 sm:mt-0"
      >
        <h2 className="text-white sm:text-4xl text-3xl mb-4 font-medium title-font">
          Work With Me
        </h2>
        <p className="leading-relaxed mb-6 text-gray-400">
          Thank you for considering me for your project or team. Please fill out
          the form below to provide me with your requirements.
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-20 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
