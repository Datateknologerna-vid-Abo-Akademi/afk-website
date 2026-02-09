"use client"
import React, { useEffect } from "react";
import Companies from "./companies";

const Participants = () => {
    return (
        <div id="participants">
            <div id="what-is">
                <h1 className="text-3xl mb-2">AFK 2026 Participants</h1>
            </div>
            <div className="mt-7">
                <Companies />
            </div>
        </div>
    )
}

export default Participants;