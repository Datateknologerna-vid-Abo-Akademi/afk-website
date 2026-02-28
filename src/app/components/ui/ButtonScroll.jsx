import React from "react";

const ButtonScroll = (props) => {
    return (
        <button
            className="w-full transition duration-150 ease-in-out border border-blue-500/60 rounded-full p-3 flex items-center justify-center uppercase tracking-[0.2em] hover:bg-blue-600/30"
            onClick={() => {
                document
                    .getElementById(props.id)
                    .scrollIntoView({ behavior: "smooth" });
            }}
        >
            {props.text}
        </button>
    );
};

export default ButtonScroll;
