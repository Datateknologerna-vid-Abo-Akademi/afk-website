import React from "react";
import { Speaker, SelectedSpeaker } from "./SelectedSpeaker";
import participants from "@/app/json/speakers.json";
import { useState, useEffect } from "react";

/**
 * Speakers component, used to display a list of all participating speakers and the selected speaker. Contains the logic for selecting a speaker and displaying its details.
 * @returns JSX element including all speakers
 */

const Speakers = () => {
    const allSpeakers = participants.speakers;
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    const [selectedSpeakerDelay, setSelectedSpeakerDelay] = useState(true);
    const [selectedSpeakerHidden, setSelectedSpeakerHidden] = useState(false);


    const handleClick = (speaker) => {
        setSelectedSpeaker(speaker);
    };

    const handleBack = () => {
        setSelectedSpeakerHidden(false);
        setSelectedSpeaker(null);
    };

    useEffect(() => {
        if (selectedSpeaker) {
            setSelectedSpeakerHidden(true);
        } else {
            setSelectedSpeakerHidden(false);
        }
    }, [selectedSpeaker]);

    return (
        <div className="relative w-full flex flex-col">
            {/* Maintain height with a wrapping div */}
            <div className={`grid grid-rows-[auto,1fr] w-full max-h-[37rem] ${selectedSpeaker ? "h-[34rem]" : ""}`}>
                
                {/* Selected speaker div (Initially hidden but takes space) */}
                <div className={`absolute afk-card top-0 left-0 right-0 bottom-0 w-full overflow-auto ${selectedSpeaker ? "transition-all duration-500 ease-in-out" : "transition-none"} ${selectedSpeakerHidden ? "scale-y-100 origin-top" : "scale-y-0 origin-top"}`}>
                    {selectedSpeaker && <SelectedSpeaker speaker={selectedSpeaker} id={selectedSpeaker.id} />}
                </div>

                {/* Back Button (Only visible when a speaker is selected) */}
                {selectedSpeaker && (
                    <button onClick={handleBack} className="absolute top-3 right-3 border border-blue-500/60 z-10 px-3 py-2 rounded-full transition-all delay-150 hover:bg-red-600/70 text-xs uppercase">
                        x
                    </button>
                )}

                {/* List of speakers (Hides smoothly but retains space) */}
                <div className={`relative grid lg:grid-cols-4 grid-cols-1 gap-4 overflow-y-auto overflow-x-hidden w-full transition-all duration-500 ease-in-out ${selectedSpeaker ? "scale-y-0 h-[34rem] origin-bottom overflow-hidden" : "opacity-100 visible scale-100"}`}>
                    {allSpeakers.map((speaker) => (
                        <Speaker speaker={speaker} key={speaker.id} handleClick={() => handleClick(speaker)} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Speakers;