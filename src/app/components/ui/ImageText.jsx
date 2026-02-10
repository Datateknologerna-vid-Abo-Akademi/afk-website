import React from "react";
import Image from "next/image";

/**
 * ImageTextLeft component, displays an image on the left and text on the right
 * @param {*} props - 
 * - props.imagesrc: the source of the image, 
 * - props.imagealt: the alt text for the image, 
 * - props.imageheight: the height of the image, 
 * - props.imagewidth: the width of the image, 
 * - props.title: the title text, 
 * - props.text: the body text
 * @returns a component with an image on the left and text on the right
 */

const ImageTextLeft = (props) => {
    return (
        <div className="w-full relative mb-12">
            <Image
                src={props.imagesrc}
                alt={props.imagealt}
                height={props.imageheight}
                width={props.imagewidth}
                className="w-2/5 rounded-md"
            />
            <div className="bg-blue-100 p-6 absolute top-1/2 left-[30%] transform -translate-y-[20%] rounded-md">
                <h1 className="text-3xl">{props.title}</h1>
                <p className="text-md mt-2">{props.text}</p>
            </div>
        </div>
    );
};

/**
 * ImageTextRight component, displays an image on the right and text on the left
 * @param {*} props - 
 * - props.imagesrc: the source of the image, 
 * - props.imagealt: the alt text for the image, 
 * - props.imageheight: the height of the image, 
 * - props.imagewidth: the width of the image, 
 * - props.title: the title text, 
 * - props.text: the body text
 * @returns a component with an image on the right and text on the left
 */

const ImageTextRight = (props) => {
    return (
        <div className="w-full relative flex justify-end mb-12">
            <Image
                src={props.imagesrc}
                alt={props.imagealt}
                height={props.imageheight}
                width={props.imagewidth}
                className="w-2/5 rounded-md"
            />
            <div className="bg-blue-100 text-black p-6 absolute top-1/2 right-[30%] transform -translate-y-[20%] rounded-md">
                <h1 className="text-3xl">{props.title}</h1>
                <p className="text-md mt-2">{props.text}</p>
            </div>
        </div>
    );
};

export { ImageTextLeft, ImageTextRight };