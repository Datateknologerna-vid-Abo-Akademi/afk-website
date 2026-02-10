import React from "react";

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
