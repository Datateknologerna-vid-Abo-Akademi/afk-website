"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Company = (props) => {
  const [hover, setHover] = useState(false);

  if (hover) {
    return (
      <div className={"bg-secondary text-primary rounded-lg p-4 h-56 w-full m-1"} id="company" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <h1 className="text-2xl">{props.company.name}</h1>
        <span className="ml-2">
          <div className="text-lg mb-3">{props.company.description}</div>
          <div className="text-lg">{"\""+props.company.feedback+"\""}</div>
        </span>
      </div>
    );
  }
  return (
    <div className={"bg-secondary text-primary rounded-lg p-2 h-56 w-full m-1 flex items-center justify-center"} id="company" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Image src={props.company.logo} alt={props.company.name + " logo"} height={100} width={200} className=""/>
    </div>
  );
}

export default Company;