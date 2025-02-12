import React from "react";

const Links = (props) => {
    return (
        <a 
        className="font-bold text-blue-500 hover:text-primary" 
        href={props.link}>
        {props.name}
        </a>
    );
}

export default Links;