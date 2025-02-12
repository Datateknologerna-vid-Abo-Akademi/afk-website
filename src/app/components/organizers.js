import React from "react";
import Image from "next/image";
import Links from "./links";

const Organizers = () => {
    return (
        <div className="p-10" id="organizers">
            <div className="p-4">
                <h1 className="mb-4 text-3xl">The Organizers</h1>
                <div className="mb-6">
                    <h2 className="mb-1 text-xl font-bold">Datateknologerna</h2>
                    <p><Links name="Datateknologerna vid Åbo Akademi rf (DaTe)" link="https://datateknologerna.org/"/> is an association for students in the Computer Engineering program at the Faculty of Science and Engineering at Åbo Akademi, as well as for students in other technically oriented programs in computing. The association was founded in 1999, specifically on August 24th at 16:32. Members are recognized by their black overalls and stylish white caps.</p>
                </div>
                <div className="flex flex-row gap-10">
                    <div className="items-center justify-center w-1/3">
                        <Image src="/images/organizers-ai.png" alt="Organizers" height={1063} width={1600} className="p-1"/>
                    </div>
                    <div className="w-2/3 flex flex-col justify-center">
                        <h2 className="mb-1 text-xl font-bold">Projectgroup</h2>
                        <p>"Projektgruppen", or "Projectgroup" in English, is the elected committee responsible for organizing AFK. The group is elected by the members of <Links name="Datateknologerna vid Åbo Akademi rf" link="https://datateknologerna.org/"/> and is responsible for all stages of planning as well as promotion of the event. The committee is always led by the Vice Chairperson of the <Links name="Datateknologerna board" link="https://datateknologerna.org/pages/styrelsen/"/>, that being Ida Wiberg this year.</p>
                    </div>
                </div>
                <p className="text-sm pt-2 text-gray-700">Pictured from right to left: Ida Wiberg, Johnny Löfman, Adam Beijar, Anton Näsman, Rasmus Vilen, Valter Lax, Hugo Söderholm</p>
            </div>
        </div>
    )
};

export default Organizers;