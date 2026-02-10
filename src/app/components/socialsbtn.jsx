import React from "react";
import Image from "next/image";

const SocialsBtn = (props) => {
    return (
        <a className="p-2 flex items-center justify-center bg-gray-800 hover:bg-blue-700 rounded-md" type="button" href="https://www.instagram.com/albinsforetagskonferens/" target="_blank">
            <Image src={props.src} alt={props.alt} height={20} width={20} />
        </a>
    )
}

export default SocialsBtn;