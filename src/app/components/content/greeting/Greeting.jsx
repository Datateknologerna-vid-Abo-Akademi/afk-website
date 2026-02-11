"use client";
import React from "react";
import Image from "next/image";

const Greeting = () => {
    return (
        <section className="afk-hero text-md w-full" id="welcome-text">
            <div className="ml-10 col-span-6 flex flex-col justify-center">
                { /* <div className="afk-pill">Recruitment Fair</div> */ }
                <div className="mx-auto flex flex-col justify-center gap-6">
                    <h1 className="afk-title text-6xl lg:text-7xl">
                            AFK 2026
                    </h1>
                    <p className="text-lg text-blue-100 max-w-xl">
                        November 27th, 2026 at Aurum, Turku. Meet the companies, dive
                        into talks, and end the day with our sauna evening.
                    </p>
                    <div className="flex items-center gap-4">
                        <button
                            className="afk-pill"
                            onClick={() => {
                                document
                                    .getElementById("contact")
                                    .scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Attend AFK
                        </button>
                        <span className="text-md uppercase tracking-[0.3em] text-blue-200">
                            2026
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-span-6 flex">
                <Image
                    src="/images/AFK_LOGO.png"
                    alt="AFK logo"
                    height={350}
                    width={350}
                    className="m-auto"
                />
            </div>
        </section>
    );
};

export default Greeting;
