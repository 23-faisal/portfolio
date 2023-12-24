import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yqhpa1j",
        "template_v8xjg91",
        form.current,
        "3QtKWC66gXMlX9cmo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="max-w-[700px] mx-auto mb-4">
        <h1 className="text-semibold text-4xl font-bold font-titleFont  text-center mt-12 mb-4  pb-4">
          Contact Me
        </h1>
        <p className="text-center text-md">
          Please fill out the form below to discuss any work opportunities.
        </p>
      </div>
      <div className="py-6 max-w-[700px] mx-auto ">
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <input
            className="py-3 mt-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            type="text"
            placeholder="Your name"
            name="your_name"
          />
          <input
            className="py-3 mt-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="email"
            placeholder="Your email"
            name="your_email"
          />
          <textarea
            className="py-3 mt-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            rows={7}
            placeholder="Your message"
            name="message"
          />
          <button
            className="bg-teal-600 mt-6 py-2 text-bold rounded-lg text-xl hover:bg-teal-700 transition duration-300 ease ease-in-out"
            type="submit"
            value="Send"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
