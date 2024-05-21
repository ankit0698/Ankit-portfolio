import { useForm, ValidationError } from "@formspree/react";
import { BadgeCheckIcon } from "@heroicons/react/solid";

function Contact() {
  const [state, handleSubmit] = useForm("xrgnkpql");
  if (state.succeeded) {
    return (
      <div className="container min-h-screen   mx-auto flex  px-10 py-20 md:flex-row flex-col">
        <BadgeCheckIcon className="h-10 w-10 text-green-400 flex mx-1" />
        <p className="flex h-32 w-100 pt-1 pl-1 text-2xl pr-4 text-yellow-100">
          Thanks for Joining! I will get in touch with you soon.
        </p>
        <div>
          <a
            href="/"
            className="inline-block px-4 py-2 bg-green-500  text-white rounded-full hover:bg-green-600"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className=" min-h-screen mx-auto flex bg-[url('spiral.png')] bg-no-repeat bg-contain   px-10 pb-12 md:mt-0 -mt-20  md:flex-row flex-col items-center "
    >
      <div className="lg:flex-grow md:w-3/4 lg:pr-24 flex flex-col md:items-start mb-16   text-center">
        <img
          className="  max-w-[90%] lg:max-w-[650px] opacity-100 mt-8 z-10  "
          src="dev.png"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        name="contact"
        className="md:w-[500px] w-[320px] border-2 shadow-2xl shadow-teal-900 bg-gray-950 border-teal-200 rounded-2xl flex flex-col p-6 md:-mt-8 -mt-12"
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
