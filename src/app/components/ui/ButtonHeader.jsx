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
        className="text-black transition duration-150 ease-in-out hover:bg-blue-400 hover:text-white cursor-pointer p-2 rounded-md" 
        onClick={() => {document.getElementById(props.id).scrollIntoView({behavior: "smooth"})}}>
        {props.name}
        </button>
    );
}

export default ButtonHeader;