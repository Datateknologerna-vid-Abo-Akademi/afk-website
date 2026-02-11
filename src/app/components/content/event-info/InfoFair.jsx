"use client"
import React from "react";
import Image from "next/image";
import ButtonLink from "@/app/components/ui/ButtonLink";

const InfoFair = () => {
    return (
        <div id="event-info">
            <h1 className="mb-4 text-3xl">AFK 2025 Information</h1>
            <p>AFK 2025 will be held on Friday 5th of December 2025. The day begins with the recruitment fair itself, where all companies will be able to present themselves and their work to students. During the event there will also be a drop-in CV clinic, where you can get quick feedback on your CV, cover letter, or LinkedIn profile. Bring your document either printed or on your device, drop by during the session, and get a short individual review. The event will be followed up by a sauna evening at Marlibastun, which is available to students that have attended at least two presentations during the fair. </p>
            <br />
            <p>The fair will be held on our student campus, specifically on the third floor of the Agora building, where the IT department of Åbo Akademi is located. We hope to see you there!</p>
            <br />
            <h2 className="mb-1 text-xl font-bold">Hackathon:</h2>
            <p> At AFK 2025, we are excited to announce the inclusion of a hackathon as part of the event! The hackathon is made in collaboration with Navielektro and will provide an excellent opportunity for students to engage in hands-on coding and problem-solving activities. The first price for the hackathon is a 150€ gift card to Verkkokauppa, so we hope to see many great submissions. </p>
            <br />
            <p> More information about the hackathon can be found here on the event page: </p>
            <ButtonLink link="https://datateknologerna.org/events/afk25_hackathon/" name="AFK25 x Navielektro Hackathon" />
            <br />
            <p className="font-bold">Note: To win the hackathon, you have to be present when the winner is revealed at 16:00. The submission deadline is 4.12 at 23:59.</p>
            <br />
            <h2 className="mb-1 text-xl font-bold">Timetable for AFK 2025:</h2>
            <Image src="/images/AFK25-Timetable.png" alt="AFK 2025 Timetable" width={800} height={600} className="my-2 w-fit rounded-md"/>
            <br />
            <h2 className="mb-1 text-xl font-bold">ReadMe:</h2>
            <p> The event leaflet, ReadMe.afk can be found below!</p>
            <ButtonLink link="https://albin-storage.cdn.datateknologerna.org/date/public/2025/afk/readme25.pdf" name="ReadMe.afk" />
        </div>
    )
}

export default InfoFair;