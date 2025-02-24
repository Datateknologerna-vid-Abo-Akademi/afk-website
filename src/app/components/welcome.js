import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="relative w-full" id="welcome-text">
      {/*Image overlay*/}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/*Image*/}
      <Image src="/images/banner.jpg" alt="Welcome to AFK" height={1063} width={1600} className="w-full"/> 
      {/*Text over image*/}
      <div className="text-4xl text-center absolute inset-0 flex justify-center items-center flex-col text-gray-200 font-bold [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
        <div className="text-4xl mb-4">Welcome to</div>
        <h1 className="text-8xl">AFK 2025</h1><br/>
        <h2 className="text-4xl">December 5th, 2025</h2>
        <h3 className="text-4xl">At Aurum, Turku</h3>
      </div>
    </div>
  )
}

export default Welcome;