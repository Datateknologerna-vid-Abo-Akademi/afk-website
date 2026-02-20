"use client";
import React from "react";
import ButtonLink from "@/app/components/ui/ButtonLink";

const InfoBeforeFair = () => {
    return (
        <div id="event-info">
            <h1 className="afk-section-title afk-title text-white text-2xl">
                AFK 2026 Information
            </h1>
            <p className="leading-relaxed">
                AFK 2026 will be held on Friday 27th of November 2026. The day
                begins with the recruitment fair itself, where all companies
                will be able to present themselves and their work to students.
                The event will be followed up by a Sauna evening at Marlibastun,
                which is available to students that have attended at least two
                presentations during the fair.
            </p>
            <br />
            <p className="leading-relaxed">
                The fair will be hosted at Aurum, a state-of-the-art building on
                our student campus and the primary hub for the Faculty of
                Science and Engineering. This gives your company exposure to not
                only IT students, but also students from other disciplines
                within the faculty.
            </p>
            <br />
            <h2 className="mb-2 text-xl text-white font-semibold">
                Pricing for the year 2026 will be as follows:
            </h2>
            <ul className="list-disc list-inside">
                <li className="font-semibold text-lg italic">
                    Stand at the fair
                    <span className="font-semibold text-blue-500"> - </span>
                    700 EUR
                </li>
                <ul className="list-disc list-inside">
                    <li className="mb-3 ml-5 list-['- ']">
                        A stand for your company at the fair equipped with a
                        table, chair, and power outlets.
                    </li>
                </ul>
                <li className="font-semibold text-lg italic">
                    Company presentation{" "}
                    <span className="font-semibold text-blue-500"> - </span> 
                    500 EUR
                </li>
                <ul className="list-disc list-inside">
                    <li className="mb-3 ml-5 list-['- ']">
                        A 45-minute time slot in one of our lecture halls. 30
                        minutes for a presentation and 15 minutes for questions.
                        Graphics and audio output are available.
                    </li>
                </ul>
                <li className="font-semibold text-lg italic">
                    Hackathon/coding workshop sponsor{" "}
                    <span className="font-semibold text-blue-500"> - </span> 
                    400 EUR
EUR
                </li>
                <ul className="list-disc list-inside">
                    <li className="mb-2 ml-5 list-['- ']">
                        Be the company to sponsor our hackathon! Design a
                        hackathon or coding workshop for participants of the
                        fair and shed some more light on what tech you use.
                    </li>
                    <li className="mb-2 ml-5 list-['- ']">
                        The top 3 hackathon projects will be presented at the
                        end of the fair, with the winner being announced at the
                        end.
                    </li>
                    <li className="ml-5 list-['- ']">
                        The price is negotiable so if it interests you, don't
                        hesitate to reach out. (Only available for one company,
                        first come first served)
                    </li>
                </ul>
            </ul>
            <br />
            <h2 className="mb-2 text-xl text-white font-semibold">
                Included for free with attendance:
            </h2>
            <ul className="list-disc list-inside">
                <li className="font-semibold text-lg italic">
                    README.afk page
                </li>
                <ul className="list-disc list-inside">
                    <li className="mb-3 ml-5 list-['- ']">
                        A page (A5 size) in our information leaflet that will be
                        available for free at the fair in both digital and
                        physical format.
                    </li>
                </ul>
                <li className="font-semibold text-lg italic">
                    Company on the AFK website
                </li>
                <ul className="list-disc list-inside">
                    <li className="mb-3 ml-5 list-['- ']">
                        Your company's logo and a short presentation will be
                        featured on the AFK website as a participating company
                        in AFK 2026, added as soon as your participation is
                        confirmed.
                    </li>
                </ul>
            </ul>
            <br />
            <h2 className="mb-2 text-xl text-white font-semibold">
                Previous AFK Leaflets:
            </h2>
            <p className="leading-relaxed">
                {" "}
                The event leaflets from previous years can be found below!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 my-4">
                <ButtonLink
                    link="https://fra1.digitaloceanspaces.com/albin-storage/date/public/2023/events/readme_afk-1.pdf"
                    name="README.afk 2024"
                />
                <ButtonLink
                    link="https://albin-storage.cdn.datateknologerna.org/date/public/2025/afk/readme25.pdf"
                    name="README.afk 2025"
                />
            </div>
            <br />
            <p className="leading-relaxed">
                If you are interested in attending AFK, or if you have any
                questions, don't hesitate in reaching out and{" "}
                <span className="font-bold italic">contacting us</span>. Our
                contact information is available at the{" "}
                <span className="font-bold italic">
                    bottom of the page, or by clicking the button below.
                </span>
            </p>
            <br />
            <p className="text-xl text-white font-semibold italic">
                We hope to see you at AFK 2026!
            </p>
            <br />
            <button
                className="w-full transition duration-150 ease-in-out border border-blue-500/60 rounded-full p-3 flex items-center justify-center uppercase tracking-[0.2em] hover:bg-blue-600/30"
                onClick={() => {
                    document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" });
                }}
            >
                Contact Us / Attend AFK 2026!
            </button>
        </div>
    );
};

export default InfoBeforeFair;
