"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Company = (props) => {
  const [hover, setHover] = useState(false);


  return (
    <div className={"bg-primary rounded-lg p-2 h-56 m-1 flex items-center justify-center"} id="company" onClick={() => props.handleClick(props.company)}>
      <Image src={props.company.logo} alt={props.company.name + " logo"} height={100} width={200} className=""/>
    </div>
  );
}

export const SelectedCompnany = (props) => {
  return (
    <div className={"bg-primary rounded-lg  w-full"} id="company">
      <div className="p-4">
        <h1 className="text-2xl">{props.company.name}</h1>
        <div className="text-lg mb-3">{props.company.description}</div>
        <div className="text-lg">{"\""+props.company.feedback+"\""}</div>
      </div>
    </div>
  );
}