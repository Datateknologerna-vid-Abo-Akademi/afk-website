import React from "react";
import WhatIs from "./what_is";
import Image from "next/image";
import { ImageTextLeft, ImageTextRight } from "./imageText";
import Links from "./links";

const About = () => {
    return (
        <div id="about">
            <div>
                <h1 className="text-3xl mb-2">About AFK</h1>
                <p className="text-md">Albins Företagskonferens AFK2025 is a recruitment fair organized by <Links name="Datateknologerna vid Åbo Akademi rf" link="https://datateknologerna.org/"/>, aimed at students from Åbo Akademi University and the University of Turku. The event was organized for the first time in the spring of 2024 and we got very positive feedback from both companies and students. Now we are expanding the fair with even more participants. The fair will be held on Friday 5th of December 2025.</p>
                <br />
                <p className="text-md">
                The day begins with the recruitment fair, and after that, there will be a small cocktail party in the same building. The fair will be held at our student campus, to bring visibility to IT students from both universities.
                </p>
            </div>
            <div className="pt-10 hidden md:flex">
                <ImageTextLeft imagesrc="/images/afk24-crowd.jpg" imagealt="AFK presentation" imageheight={1063} imagewidth={1600} title="What can you expect as a company attending AFK?" text="As a company you can expect to chat and connect with students from all over the country who study information technology at either Åbo Akademi University or Turku University."/>
            </div>
            <div className="pt-10 hidden md:flex">
                <ImageTextRight imagesrc="/images/afk24-presentation.jpg" imagealt="AFK presentation" imageheight={1063} imagewidth={1600} title="What can you expect as a student attending AFK?" text="As a student you can expect to chat and connect with companies from all over the country who are looking for new employees. You can also attend presentations and workshops held by the companies."/>
            </div>
        </div>
    );
}

export default About;