"use client"

import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-primary flex items-center border-black border-b-2" id="header">
      <Image src="/images/AFK_logo.png" alt="AFK logo" height={300} width={300} className="p-1"/>
    </div>
  );
}

export default Header;