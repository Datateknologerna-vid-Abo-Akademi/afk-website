"use client"

import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-primary flex items-center justify-between fixed border-black shadow-md top-0 h-fit w-full z-30 opacity-95" id="header">
      <div className="flex items-center justify-center p-1">
        <Image src="/images/AFK_logo.png" alt="AFK logo" height={200} width={200} className="p-1"/>
      </div>
      <div className="flex items-center gap-10 p-6 text-lg">
        {/*Temporary links/sections, could be changed to different pages with images or companies etc.*/}
        <a href="#afk" className="text-black hover:text-white">About</a>
        <a href="#success" className="text-black hover:text-white">Previous Successes</a>
        <a href="#success" className="text-black hover:text-white">The Team</a>
        <a href="#footer" className="text-black hover:text-white">Contact</a>
      </div>
    </nav>
  );
}

export default Header;