import React from "react";
// import Image from "next/image";

export default function Navbar() {
  return (
    <header className="text-indigo-600 h-24 flex justify-center ">
      <div className="container mx-auto flex flex-wrap items-center justify-between max-w-7xl">
        <a className="text-indigo-600">
          <span className="text-3xl font-bold uppercase">Grimace Services</span>
        </a>
        <div className="flex items-center gap-12 text-xl text-indigo-600">
          <div>Intro</div>
          <div>About</div>
          <div>Services</div>
          <div>Contacts</div>
        </div>
      </div>
    </header>
  );
}
