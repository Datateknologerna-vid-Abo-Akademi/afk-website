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
            className="w-full transition duration-150 ease-in-out bg-primary hover:bg-blue-400 hover:text-white border-black border-2 rounded-md p-2 flex items-center justify-center"
            onClick={() => window.open(props.link)}
        >
            {props.name}
        </button>
    );
};

export default ButtonLink;
