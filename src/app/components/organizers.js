import React from "react";
import Image from "next/image";
import Links from "./links";

const Organizers = () => {
    return (
        <div id="organizers">
            <h1 className="mb-4 text-3xl">The Organizers</h1>
            <div className="flex flex-col md:flex-row md:gap-10">
                <div className="md:w-4/5 w-full flex flex-col justify-center">
                    <h2 className="mb-1 text-xl font-bold">Datateknologerna</h2>
                    <p><Links name="Datateknologerna vid Åbo Akademi rf (DaTe)" link="https://datateknologerna.org/"/> is the organization for students in the Computer Engineering program at the Faculty of Science and Engineering at Åbo Akademi, as well as for students in other technically oriented programs in computing. The organization was founded in 1999, specifically on August 24th at 16:32, and its members are recognized by their black overalls and stylish white caps. The organization is led by the <Links name="Datateknologerna board" link="https://datateknologerna.org/pages/styrelsen/"/> which is in charge of the organization's day to day operations.</p>
                </div>
                <div className="md:flex hidden items-center justify-end w-1/4">
                    <Image src="/images/date-styssebild25.png" alt="DaTe Stysse" height={1063} width={1600} className="p-1 rounded-lg"/>
                </div>
                <div className="md:hidden flex items-center justify-center">
                    <Image src="/images/date-styssebild25.png" alt="DaTe Stysse" height={1063} width={1600} className="p-1 rounded-lg mt-3"/>
                </div>
            </div>
            <p className="mb-6 mt-1 flex justify-end text-sm pt-2 text-gray-700">Pictured from top-left to bottom-right: Johnny Löfman, Daniel Kass, Svante Södergård, Linnéa Lehtonen, Julia Wentjärvi, Ida Wiberg, Linus Haga, Oskar Jansén, Titus Paalanen</p>

            <div className="flex flex-col md:flex-row md:gap-10">
                <div className="md:flex hidden items-center justify-center w-1/3">
                    <Image src="/images/organizers-ai.png" alt="Projektgruppen" height={1063} width={1600} className="p-1 rounded-lg"/>
                </div>
                <div className="md:w-2/3 w-full flex flex-col justify-center">
                    <h2 className="mb-1 text-xl font-bold">The Project Group</h2>
                    <p>"Projektgruppen" <span className="italic">(translated as "The Project Group" in English)</span> is the elected committee responsible for organizing AFK. The group is elected by the members of Datateknologerna vid Åbo Akademi rf and is responsible for all stages of planning as well as promotion of the event. The committee is always led by the Vice Chairperson of the Datateknologerna board, that being Ida Wiberg this year.</p>
                </div>
                <div className="md:hidden flex items-center justify-center">
                    <Image src="/images/organizers-ai.png" alt="Projektgruppen" height={1063} width={1600} className="p-1 rounded-lg mt-3"/>
                </div>
            </div>
            <p className="inline-block mt-1 text-sm pt-2 text-gray-700">Pictured from left to right: Ida Wiberg, Johnny Löfman, Adam Beijar, Anton Näsman, Rasmus Vilen, Valter Lax, Hugo Söderholm</p>
        </div>
    )
};

export default Organizers;