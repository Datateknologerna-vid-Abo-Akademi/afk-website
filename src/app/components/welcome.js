import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="relative w-full mb-16" id="welcome-text">
      <Image src="/images/banner.jpg" alt="Welcome to AFK" height={1063} width={1600} className="w-full"/> 
      <div className="text-4xl text-center absolute inset-0 flex justify-center items-center flex-col text-secondary font-bold [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        <div className="text-2xl">Welcome to</div>
        <h1 className="text-9xl">AFK 2025</h1><br/>
        <h2 className="text-6xl">32th zointember 2099</h2>
        <h3 className="text-6xl">At somewhere in Turku</h3>
      </div>
    </div>
  )
}

export default Welcome;