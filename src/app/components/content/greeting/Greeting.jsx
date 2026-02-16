"use client";
import React from "react";
import Image from "next/image";
import Countdown from "@/app/components/ui/Countdown";

const eventDate = new Date("2026-11-27T11:00:00");

const Greeting = () => {
    return (
        <section className="w-full my-16" id="welcome-text">
            <div className="flex items-center justify-center gap-40">
                <div className="ml-10 flex flex-col justify-center">
                    { /* <div className="afk-pill">Recruitment Fair</div> */ }
                    <div className="flex flex-col justify-center gap-3">
                        <h1 className="afk-title text-white text-6xl">
                            AFK 2026
                        </h1>
                        <p className="text-xl max-w-xl">
                        Meet the companies, attend insightful keynotes and presentations, and close the day with a relaxing sauna evening.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <Image
                        src="/images/logos/AFK_LOGO.png"
                        alt="AFK logo"
                        height={300}
                        width={300}
                        className="m-auto"
                    />
                </div>
            </div>
            <div className="flex m-auto mt-6 justify-center text-2xl">
                <div className="flex flex-col items-center gap-4">
                    <p className="text-2xl font-extrabold max-w-xl">
                        November 27th, 2026 @ Aurum, Turku
                    </p>
                    <Countdown targetDate={eventDate} /> 
                    <div className="flex items-center">
                        <button
                            className="afk-pill text-xl hover:bg-blue-500/80 mt-3 transition-colors duration-300"
                            onClick={() => {
                                document
                                    .getElementById("contact")
                                    .scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Attend AFK
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Greeting;
