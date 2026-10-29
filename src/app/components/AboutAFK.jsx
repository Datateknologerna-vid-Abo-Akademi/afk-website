import React from "react";
import Image from "next/image";
import { ImageTextLeft, ImageTextRight } from "@/app/components/ui/ImageText";
import Link from "./ui/Link";
import ButtonLink from "./ui/ButtonLink";

const About = () => {
    const imageLeftTitle = "What can you expect as a company attending AFK?"
    const imageLeftText = "As a company, you can expect to connect and engage with students studying information technology at Åbo Akademi University. You will also have the opportunity to hold presentations and workshops to introduce your company and the types of roles you are looking to fill. In addition, company representatives are welcome to attend keynote sessions held by leading professionals in the industry."
    const imageRightTitle = "What can you expect as a student attending AFK?"
    const imageRightText = "As a student, you can expect to connect and engage with companies from across the country that are looking for new talent. You will also have the opportunity to attend company-led presentations and workshops, as well as keynote sessions held by industry experts." 

    return (
        <div id="about">
            <div>
                <h1 className="afk-section-title text-white afk-title text-2xl">About AFK</h1>
                <p className="leading-relaxed text-lg">Albins Företagskonferens, AFK, is a recruitment fair organized by <Link name="Datateknologerna vid Åbo Akademi rf" link="https://datateknologerna.org/"/>, aimed at students from Åbo Akademi University. The event was first held in the spring of 2024 and was organized again in the fall of 2025, receiving positive feedback from both companies and students.</p> 
                <br /> 
                <p className="leading-relaxed text-lg">This year, AFK is joining forces with Root Expo. Instead of organizing two separate events, we have combined our fairs into one massive IT career fair, held on November 17th, 2026 at Logomo in Turku. By bringing the fairs together, students get to meet even more companies in one place, and companies get to connect with an even larger pool of talented students.</p>
                <br />
                <p className="leading-relaxed text-lg">We hope to see as many of you as possible at Root Expo 2026! Whether you are a student looking for your next internship or job, or a company looking for new talent, Root Expo is the place to be.</p>
                <br />
                <ButtonLink link="https://rootexpo.fi/" name="Visit Root Expo" />
            </div>
            {/*
            <div className="hidden md:flex flex-col">
                <div className="pt-10 flex">
                    <ImageTextLeft imagesrc="/images/stands/afk24-crowd.jpg" imagealt="AFK crowd" imageheight={1063} imagewidth={1600} title={imageLeftTitle} text={imageLeftText} />
                </div>
                <div className="pt-10 flex">
                    <ImageTextRight imagesrc="/images/presentations/crosskey-presentation-25.jpg" imagealt="AFK presentation" imageheight={1063} imagewidth={1600} title={imageRightTitle} text={imageRightText} />
                </div>
            </div>
            <div className="md:hidden inline-block">
                <br />
                <Image src="/images/stands/afk24-crowd.jpg" alt="AFK crowd" height={1063} width={1600} className="w-full py-1 rounded-md"/>
                <br />
                <h2 className="mb-1 text-xl text-white font-semibold md:hidden">{imageLeftTitle}</h2>
                <p className="leading-relaxed">{imageLeftText}</p>
                <br />
                <Image src="/images/presentations/crosskey-presentation-25.jpg" alt="AFK presentation" height={1063} width={1600} className="w-full py-1 rounded-md"/>
                <br />
                <h2 className="mb-1 text-xl text-white font-semibold md:hidden">{imageRightTitle}</h2>
                <p className="leading-relaxed">{imageRightText}</p>
            </div>
            */}
        </div>
    );
}

export default About;