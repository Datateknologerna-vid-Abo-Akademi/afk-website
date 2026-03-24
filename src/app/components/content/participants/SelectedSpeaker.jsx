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
                "rounded-lg p-4 h-56 m-1 flex items-center justify-center lg:cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:hover:scale-[1.02] lg:hover:bg-participant"
            }
            id="speaker"
            onClick={() => props.handleClick(props.speaker)}
        >
            <Image
                src={props.speaker.picture}
                alt={props.speaker.name + " picture"}
                height={100}
                width={200}
                className="object-contain"
            />
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
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="leading-relaxed mt-4">
                    <p>
                        Read more on their website:{" "}
                        <Link
                            name={props.speaker.linkname}
                            link={props.speaker.linkurl}
                        />
                    </p>
                </div>
                {props.speaker.feedback ? (
                    <div className="mt-4">
                        <p>Feedback:</p>
                        <div className="italic text-blue-300">
                            {'"' + props.speaker.feedback + '"'}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export { Speaker, SelectedSpeaker };
