import React from "react";
import Image from "next/image";
import { ImageTextLeft, ImageTextRight } from "@/app/components/ui/ImageText";
import Link from "./ui/Link";

const About = () => {
    const imageLeftTitle = "What can you expect as a company attending AFK?"
    const imageLeftText = "As a company you can expect to chat and connect with students that are studying information technology at Åbo Akademi University. You can also hold presentations and workshops to introduce your company and what kind of roles you are looking to fill."
    const imageRightTitle = "What can you expect as a student attending AFK?"
    const imageRightText = "As a student you can expect to chat and connect with companies from all over the country who are looking for new employees. You can also attend presentations and workshops held by the companies." 

    return (
        <div id="about">
            <div>
                <h1 className="afk-section-title afk-title text-2xl">About AFK</h1>
                <p className="text-blue-100 leading-relaxed">Albins Företagskonferens, AFK, is a recruitment fair organized by <Link name="Datateknologerna vid Åbo Akademi rf" link="https://datateknologerna.org/"/>, aimed at students from Åbo Akademi University. The event was first held in the spring of 2024 and was organized again in the fall of 2025, receiving positive feedback from both companies and students.</p> 
                <br /> 
                <p className="text-blue-100 leading-relaxed">This year we are expanding the fair to include even more participants and events, with the aim of improving the experience for students and company representatives alike.</p>

                { /* Later addition: Planning to include keynotes in the event this year so add in when keynote speakers are confirmed */ }

            </div>
            <div className="hidden md:flex flex-col">
                <div className="pt-10 flex">
                    <ImageTextLeft imagesrc="/images/stands/afk24-crowd.jpg" imagealt="AFK crowd" imageheight={1063} imagewidth={1600} title={imageLeftTitle} text={imageLeftText} />
                </div>
                <div className="pt-10 flex">
                    <ImageTextRight imagesrc="/images/presentations/afk24-presentation.jpg" imagealt="AFK presentation" imageheight={1063} imagewidth={1600} title={imageRightTitle} text={imageRightText} />
                </div>
            </div>
            <div className="md:hidden inline-block">
                <br />
                <Image src="/images/stands/afk24-crowd.jpg" alt="AFK crowd" height={1063} width={1600} className="w-full py-1 rounded-md"/>
                <br />
                <h2 className="mb-1 text-xl font-semibold text-blue-100 md:hidden">{imageLeftTitle}</h2>
                <p className="text-blue-100 leading-relaxed">{imageLeftText}</p>
                <br />
                <Image src="/images/presentations/afk24-presentation.jpg" alt="AFK presentation" height={1063} width={1600} className="w-full py-1 rounded-md"/>
                <br />
                <h2 className="mb-1 text-xl font-semibold text-blue-100 md:hidden">{imageRightTitle}</h2>
                <p className="text-blue-100 leading-relaxed">{imageRightText}</p>
            </div>
        </div>
    );
}

export default About;