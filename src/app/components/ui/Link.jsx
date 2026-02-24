import React from "react";

/**
 * Link component, displays a link with custom text
 * @param {*} props - 
 * - props.name: the text to display for the link, 
 * - props.link: the URL to navigate to when the link is clicked
 * @returns a link element with the specified text and URL
 */

const Link = (props) => {
    return (
        <a 
        className="afk-link font-semibold cursor-pointer" 
        href={props.link}
        target="_blank" 
        rel="noopener noreferrer">
        {props.name}
        </a>
    );
}

export default Link;