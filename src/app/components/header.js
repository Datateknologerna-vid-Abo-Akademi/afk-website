"use client"

import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-primary flex items-center justify-between fixed border-black shadow-md top-0 h-fit w-full z-30 opacity-95" id="header">
      <div className="ml-5 flex items-center justify-center">
        <Image src="/images/AFK_logo_small.png" alt="AFK logo" height={50} width={50} className="p-1"/>
      </div>
      <div className="mr-5 flex items-center gap-10 p-4 text-lg">
        {/*Temporary links/sections, could be changed to different pages with images or companies etc.*/}
        <a href="#afk" className="text-black hover:text-white">About</a>
        <a href="#success" className="text-black hover:text-white">AFK in the past</a>
        <a href="#success" className="text-black hover:text-white">The Organizers</a>
        <a href="#footer" className="text-black hover:text-white">Contact</a>
      </div>
    </nav>
  );
}

export default Header;