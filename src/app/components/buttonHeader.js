import React from "react";

const Button = (props) => {
    return (
        <button 
        className="text-black transition duration-150 ease-in-out hover:bg-blue-400 hover:text-white cursor-pointer p-2 rounded-md" 
        onClick={() => {document.getElementById(props.id).scrollIntoView({behavior: "smooth"})}}>
        {props.name}
        </button>
    );
}

export default Button;