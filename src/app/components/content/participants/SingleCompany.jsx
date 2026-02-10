"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * Single company component, used in the list of companies and for the selected company. Contains the logo and name of the company, and when selected, also the description and feedback.
 * @param {*} props -
 * - props.company: the company object containing the name, logo, description and feedback of the company
 * - props.handleClick: the function to call when the company is clicked, used to set the selected company in the parent component
 * @returns JSX element representing a company
 */

const Company = (props) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className={
                "bg-primary rounded-lg p-2 h-56 m-1 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out hover:bg-secondary"
            }
            id="company"
            onClick={() => props.handleClick(props.company)}
        >
            <Image
                src={props.company.logo}
                alt={props.company.name + " logo"}
                height={100}
                width={200}
                className=""
            />
        </div>
    );
};

/**
 * Selected company component, used to display detailed information about a selected company.
 * @param {*} props - props.company: the company object containing the name, logo, description and feedback of the company
 * @returns JSX element representing a selected company
 */

const SelectedCompany = (props) => {
    return (
        <div className={"bg-primary rounded-lg w-full min-h-full"} id="company">
            <div className="p-4">
                <h1 className="text-2xl">{props.company.name}</h1>
                <div className="text-lg mb-3">{props.company.description}</div>
                {props.company.feedback ? (
                    <div className="text-lg">
                        {'"' + props.company.feedback + '"'}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export { Company, SelectedCompany };