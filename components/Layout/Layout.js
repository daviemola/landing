import React from "react";
import Navbar from "./Navbar";
import BGImages from "./BGImages";

export default function Layout({ children }) {
  return (
    <div className="relative z-10 min-h-screen w-full overflow-hidden bg-white">
      <div id="main-container">
        <BGImages />
        <Navbar />
        {children}
      </div>
    </div>
  );
}
