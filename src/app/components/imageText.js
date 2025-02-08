import React from "react";
import Image from "next/image";

export const ImageTextLeft = (props) => {
  return (
    <div className="text-justify w-full relative">
      <Image src={props.imagesrc} alt={props.imagealt} height={props.imageheight} width={props.imagewidth} className="w-2/5"/>
      <div className="text-justify bg-white text-secondary p-6 w-2/5 absolute top-1/2 left-2/5 transform -translate-x-1/2 -translate-y-1/2 rounded-sm">
        <h1 className="text-4xl">{props.title}</h1>
        <p className="text-xl mt-3">{props.text}</p>
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
        className="w-2/5"
      />
      <div className="text-justify bg-white text-secondary p-6 w-2/5 absolute top-1/2 right-2/5 transform translate-x-1/2 -translate-y-1/2 rounded-sm">
        <h1 className="text-4xl">{props.title}</h1>
        <p className="text-xl mt-3">{props.text}</p>
      </div>
    </div>
  );
}


