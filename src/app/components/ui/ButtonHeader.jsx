import React from "react";

/**
 * Button component for headers, scrolls to the specified element when clicked
 * @param {*} props - 
 * - props.name: the text to display on the button, 
 * - props.id: the id of the element to scroll to when the button is clicked
 * @returns a button element that scrolls to the specified element when clicked
 */

const ButtonHeader = (props) => {
    return (
        <button 
        className="text-white transition duration-150 ease-in-out hover:text-blue-200 cursor-pointer px-3 py-2 rounded-full border border-transparent hover:border-blue-500/50" 
        onClick={() => {document.getElementById(props.id).scrollIntoView({behavior: "smooth"})}}>
        {props.name}
        </button>
    );
}

export default ButtonHeader;