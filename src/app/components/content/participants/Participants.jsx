"use client"
import React, { useEffect } from "react";
import Companies from "./Companies";
import Speakers from "./Speakers";

/**
 * Participants component, used to display the list of participating companies and the selected company. Contains the title and the Companies component.
 * 
 * NOTE: In the future, this component could be expanded to include more types of participants, such as speakers or other student organizations.
 * @returns JSX element representing the participants section
 */

const Participants = () => {
    return (
        <div id="participants">
            <div>
                <h1 className="afk-section-title afk-title text-white text-2xl">AFK 2026 Participants</h1>
            </div>
            <p className="leading-relaxed">Below you can find the participating companies as well as our keynote speaker for this year, Lucas Käldström. Additional information about each participant can be found by clicking on their respective cards.</p>
            <h2 className="my-4 text-xl text-white font-semibold">Speakers</h2>
            <div>
                <Speakers />
            </div>
            <h2 className="mb-2 mt-4 text-xl text-white font-semibold">Companies</h2>
            <div>
                <Companies />
            </div>
        </div>
    )
}

export default Participants;