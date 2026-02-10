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
        className="font-bold text-blue-500 hover:text-primary" 
        href={props.link}>
        {props.name}
        </a>
    );
}

export default Link;