import React from "react";
import Image from "next/image";

/**
 * Button component for social media
 * CURRENTLY NOT IN USE, BUT KEPT FOR FUTURE DEVELOPMENT
 */

const ButtonSocials = (props) => {
    return (
        <a className="p-2 flex items-center justify-center bg-gray-800 hover:bg-blue-700 rounded-md" type="button" href={props.href} target="_blank">
            <Image src={props.src} alt={props.alt} height={20} width={20} />
        </a>
    )
}

export default ButtonSocials;