import React from "react";
import Image from "next/image";
import { ImageTextLeft, ImageTextRight } from "./imageText";
import Links from "./links";

const About = () => {
    const imageLeftTitle = "What can you expect as a company attending AFK?"
    const imageLeftText = "As a company you can expect to chat and connect with students that are studying information technology at Åbo Akademi University. You can also hold presentations and workshops to introduce your company and what kind of roles you are looking to fill."
    const imageRightTitle = "What can you expect as a student attending AFK?"
    const imageRightText = "As a student you can expect to chat and connect with companies from all over the country who are looking for new employees. You can also attend presentations and workshops held by the companies." 

    return (
        <div id="about">
            <div>
                <h1 className="text-3xl mb-2">About AFK</h1>
                <p>Albins Företagskonferens AFK is a recruitment fair organized by <Links name="Datateknologerna vid Åbo Akademi rf" link="https://datateknologerna.org/"/>, aimed at students from Åbo Akademi University. The event was organized for the first time in the spring of 2024 and we got very positive feedback from both companies and students.</p> 
                <br /> 
                <p>This year we are expanding the fair to include even more participants and events, with the aim of improving the experience for students and company representatives alike.</p>
            </div>
            <div className="hidden md:flex flex-col">
                <div className="pt-10 flex">
                    <ImageTextLeft imagesrc="/images/afk24-crowd.jpg" imagealt="AFK crowd" imageheight={1063} imagewidth={1600} title={imageLeftTitle} text={imageLeftText} />
                </div>
                <div className="pt-10 flex">
                    <ImageTextRight imagesrc="/images/afk24-presentation.jpg" imagealt="AFK presentation" imageheight={1063} imagewidth={1600} title={imageRightTitle} text={imageRightText} />
                </div>
            </div>
            <div className="md:hidden inline-block">
                <br />
                <Image src="/images/afk24-crowd.jpg" alt="AFK crowd" height={1063} width={1600} className="w-full py-1 rounded-md"/>
                <br />
                <h2 className="mb-1 text-xl font-bold md:hidden">{imageLeftTitle}</h2>
                <p>{imageLeftText}</p>
                <br />
                <Image src="/images/afk24-presentation.jpg" alt="AFK presentation" height={1063} width={1600} className="w-full py-1 rounded-md"/>
                <br />
                <h2 className="mb-1 text-xl font-bold">{imageRightTitle}</h2>
                <p>{imageRightText}</p>
            </div>
        </div>
    );
}

export default About;