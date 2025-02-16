"use client"
import React from "react";

const EventInformation = () => {
    return (
        <div id="event-info">
            <h1 className="mb-4 text-3xl">AFK 2025 Information</h1>
            <p>AFK 2025 will be held on Friday 5th of December 2025. The day begins with the recruitment fair itself, where all companies will be able to present themselves and their work to students. The event will be followed up by a cocktail party in the same building, where students and company representatives can discuss amongst each other in a more personal setting. The fair will be held at our student campus, specifically at Aurum — a shared building between Turun Yliopisto and Åbo Akademi — to bring visibility to IT students of both universities. </p>
            <br />
            <p>In addition we will also offer the opportunity for one company to sponsor a hackathon. The hackathon will be held at the fair in a separate area and is an opportunity for your company to bring more visibility into what kind of technology and skills you utilize and/or are looking for. </p>
            <br />
            <p>The hackathon is completely customizable to your liking. You can decide what you want to showcase, if you want to plan the entire hackathon yourself, or if you only want to sponsor the hackathon financially, and leave the planning to us. </p>
            <br />
            <p className="italic">Do not wait too long as we will be using a first come, first served policy, especially regarding the Hackathon. </p>
            <br />
            <h2 className="mb-1 text-xl font-bold">Pricing for the year 2025 will be as follows:</h2>
            <ul className="list-disc list-inside">
                <li className="font-bold italic">Stand at the fair 800 €</li>
                <ul className="list-disc list-inside">
                    <li className="mb-3 ml-5 list-['—_']">A stand for your company at the fair equipped with a table, chair, and power outlets.</li>
                </ul>
                <li className="font-bold italic">Company presentation 600 €</li>
                <ul className="list-disc list-inside">
                    <li className="mb-3 ml-5 list-['—_']">A 45-minute time slot in one of our lecture halls. 30 minutes for a presentation and 15 minutes for questions. Graphics and audio output are available.</li>
                </ul>
                <li className="font-bold italic">README.afk page and visibility on our website 200 €</li>
                <ul className="list-disc list-inside">
                    <li className="mb-3 ml-5 list-['—_']">A page (A5 size) in our information leaflet that will be available for free at the fair in both digital and physical format as well as permanent visibility on the AFK website as a participant of AFK 2025.</li>
                </ul>
                <li className="font-bold italic">Hackathon/coding workshop sponsor 800 €</li>
                <ul className="list-disc list-inside">
                    <li className="mb-2 ml-5 list-['—_']">Be the company to sponsor our hackathon! Design a hackathon or coding workshop for participants of the fair and shed some more light on what tech you use.</li>
                    <li className="mb-2 ml-5 list-['—_']">The hackathon has a separate stand/area at the fair and is completely customizable to your liking.</li>
                    <li className="ml-5 list-['—_']">The price is negotiable so if it interests you, don't hesitate to reach out. (Only available for one company, first come first served)</li>
                </ul>
            </ul>
            <br />
            <p>If you are intereseted in attending AFK, or if you have any questions, don't hesitate in reaching out and <span className="font-bold italic">contacting us</span>. Our contact information is available at the <span className="font-bold italic">bottom of the page, or by clicking the button here below.</span></p>
            <br />
            <p className="test-xl font-bold italic">We hope to see you at AFK2025!</p>
            <br />
            <button className="w-full transition duration-150 ease-in-out bg-primary hover:bg-blue-400 hover:text-white border-black border-2 rounded-md p-2 flex items-center justify-center" onClick={() => {document.getElementById("contact").scrollIntoView({behavior: "smooth"})}}>Contact Us / Attend AFK25!</button>
        </div>
    )
}

export default EventInformation;