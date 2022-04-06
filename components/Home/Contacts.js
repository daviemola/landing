import React from "react";

export default function Contacts() {
  return (
    <div className="max-w-6xl mx-auto h-[80vh] grid sm:grid-cols-2 grid-cols-1">
      <div className="">
        <h1 className="text-indigo-600 text-6xl w-3/4 mb-12 uppercase font-bold">
          Contacts
        </h1>
        <p className="text-indigo-600 sm:text-4xl w-full">
          For any enquiries,
          <br />
          or just to say hello,
          <br />
          get in touch and contact us.
        </p>
        <div className="">
          <p className="text-indigo-600 my-2 uppercase mt-24 font-bold text-xl">
            Email
          </p>
          <p className="text-indigo-600 text-lg">grimace@services.com</p>
        </div>
        <div className="">
          <p className="text-indigo-600 my-2 uppercase mt-8 font-bold text-xl">
            Follow Us
          </p>
          <div className="flex items-center gap-6 text-indigo-600 text-lg">
            <div>Facebook</div>
            <div>Instagram</div>
          </div>
        </div>
      </div>
      <div className="w-3/4 bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
        <h2 className="text-indigo-600 sm:text-3xl text-lg mb-1 font-bold">
          Feedback
        </h2>
        <p className="leading-relaxed mb-5 text-indigo-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-indigo-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-indigo-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-indigo-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-indigo-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
        <p className="text-xs text-indigo-600 mt-3">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}
