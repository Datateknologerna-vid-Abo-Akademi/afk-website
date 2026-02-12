import React from "react";

/**
 * Button component for links, opens the link in a new tab
 * @param {*} props - 
 * - props.name: the text to display on the button, 
 * - props.link: the link to open when the button is clicked
 * @returns a button element that opens the specified link in a new tab when clicked
 */

const ButtonLink = (props) => {
    return (
        <button
            className="w-full transition duration-150 ease-in-out border border-blue-500/60 rounded-full p-3 flex items-center justify-center uppercase tracking-[0.2em] text-blue-100 hover:bg-blue-600/30"
            onClick={() => window.open(props.link)}
        >
            {props.name}
        </button>
    );
};

export default ButtonLink;
