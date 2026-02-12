"use client";
import React from "react";
import Image from "next/image";

const Greeting = () => {
    return (
        <section className="w-full my-16" id="welcome-text">
            <div className="flex items-center justify-center gap-48">
                <div className="ml-10 flex flex-col justify-center">
                    { /* <div className="afk-pill">Recruitment Fair</div> */ }
                    <div className="flex flex-col justify-center gap-3">
                        <h1 className="afk-title text-6xl lg:text-7xl">
                            AFK 2026
                        </h1>
                        <p className="text-xl font-semibold text-blue-100 max-w-xl">
                            November 27th, 2026 @ Aurum, Turku
                        </p>
                        <p className="text-blue-100 max-w-xl">
                        Meet the companies, attend insightful keynotes and presentations, and close the day with a relaxing sauna evening.
                        </p>
                        <div className="flex items-center">
                            <button
                                className="afk-pill hover:bg-blue-500/80 mt-3 transition-colors duration-300"
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
                <div className="flex">
                    <Image
                        src="/images/logos/AFK_LOGO.png"
                        alt="AFK logo"
                        height={350}
                        width={350}
                        className="m-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Greeting;
