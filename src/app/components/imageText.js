import React from "react";
import Image from "next/image";

export const ImageTextLeft = (props) => {
  return (
    <div className="w-full relative">
      <Image 
      src={props.imagesrc} 
      alt={props.imagealt} 
      height={props.imageheight} 
      width={props.imagewidth} 
      className="w-2/5 rounded-md"/>
      <div className="bg-blue-100 p-6 absolute top-1/2 left-1/5 transform -translate-y-1/2 rounded-md">
        <h1 className="text-3xl">{props.title}</h1>
        <p className="text-md mt-2">{props.text}</p>
      </div>
  </div>
  );
}

export const ImageTextRight = (props) => {
  return (
    <div className="text-justify w-full relative flex justify-end">
      <Image 
        src={props.imagesrc} 
        alt={props.imagealt} 
        height={props.imageheight} 
        width={props.imagewidth} 
        className="w-2/5 rounded-md"
      />
      <div className="bg-blue-100 text-black p-6 absolute top-1/2 right-1/5 transform -translate-y-1/2 rounded-md">
        <h1 className="text-3xl">{props.title}</h1>
        <p className="text-md mt-2">{props.text}</p>
      </div>
    </div>
  );
}


