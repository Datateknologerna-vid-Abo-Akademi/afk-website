"use client";
import React from "react";
import Image from "next/image";
import Link from "@/app/components/ui/Link";

/**
 * Single company component, used in the list of companies and for the selected company. Contains the logo and name of the company, and when selected, also the description and feedback.
 * @param {*} props -
 * - props.company: the company object containing the name, logo, description and feedback of the company
 * - props.handleClick: the function to call when the company is clicked, used to set the selected company in the parent component
 * @returns JSX element representing a company
 */

const Company = (props) => {
    return (
        <div
            className={
                "rounded-lg p-4 h-56 m-1 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out hover:scale-[1.02] hover:bg-participant"
            }
            id="company"
            onClick={() => props.handleClick(props.company)}
        >
            <Image
                src={props.company.logo}
                alt={props.company.name + " logo"}
                height={100}
                width={200}
                className="object-contain"
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
        <div className={"afk-card w-full min-h-full"} id="company">
            <div className="p-6">
                <h1 className="afk-title text-white text-3xl mb-3">
                    {props.company.name}
                </h1>
                <div className="grid grid-cols-4 gap-10">
                    <div className="grid col-span-3">
                        <div className="flex flex-col leading-relaxed gap-4">
                            {props.company.description.map((desc, index) => (
                                <div key={index}>
                                    <p>{desc.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid col-span-1">
                        <Image
                            src={props.company.logo}
                            alt={props.company.name + " logo"}
                            height={1000}
                            width={1000}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="leading-relaxed mt-4">
                    <p>
                        Read more on their website:{" "}
                        <Link
                            name={props.company.linkname}
                            link={props.company.linkurl}
                        />
                    </p>
                </div>
                {props.company.feedback ? (
                    <div className="text-blue-200 italic">
                        {'"' + props.company.feedback + '"'}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export { Company, SelectedCompany };
