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

const Speaker = (props) => {
    return (
        <div
            className={
                "rounded-lg p-4 h-fit m-1 flex flex-col items-center justify-center lg:cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:hover:scale-[1.02] lg:hover:bg-participant"
            }
            id="speaker"
            onClick={() => props.handleClick(props.speaker)}
        >
            <h2 className="afk-title text-white text-xl font-bold">
                {props.speaker.name}
            </h2>
            <Image
                src={props.speaker.picture}
                alt={props.speaker.name + " picture"}
                height={100}
                width={200}
                className="object-contain grayscale mt-4 rounded-md"
            />
            <p className="text-white text-center mt-2">{props.speaker.title}</p>
            <p className="text-gray-400 text-center mt-2">Click to Read More</p>
        </div>
    );
};

/**
 * Selected speaker component, used to display detailed information about a selected speaker.
 * @param {*} props - props.speaker: the speaker object containing the name, logo, description and feedback of the speaker
 * @returns JSX element representing a selected speaker
 */

const SelectedSpeaker = (props) => {
    return (
        <div id="speaker">
            <div className="lg:p-6 py-6 w-full h-full">
                <h1 className="afk-title text-white text-3xl mb-3">
                    {props.speaker.name}
                </h1>
                <div className="flex flex-row my-4 gap-4">
                    {props.speaker.linkedin ? (
                        <a href={props.speaker.linkedin} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/icons/InBug-White.png"
                                alt="LinkedIn"
                                width={26}
                                height={26}
                            />
                        </a>
                    ) : null}
                    {props.speaker.github ? (
                        <a href={props.speaker.github} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/icons/GitHub_Invertocat_White.png"
                                alt="GitHub"
                                width={26}
                                height={26}
                            />
                        </a>
                    ) : null}
                </div>
                <div className="lg:grid lg:grid-cols-4 flex gap-10">
                    <div className="grid col-span-3">
                        <div className="flex flex-col leading-relaxed gap-4">
                            {props.speaker.description.map((desc, index) => (
                                <div key={index}>
                                    <p>{desc.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:grid lg:col-span-1 hidden">
                        <Image
                            src={props.speaker.picture}
                            alt={props.speaker.name + " picture"}
                            height={1000}
                            width={1000}
                            className="object-contain rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Speaker, SelectedSpeaker };
