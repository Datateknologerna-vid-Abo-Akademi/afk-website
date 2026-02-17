"use client"
import Image from "next/image";
import dynamic from "next/dynamic";

// Render Countdown client-side only to prevent hydration issues
const Countdown = dynamic(() => import("@/app/components/ui/Countdown"), { ssr: false });

const eventDate = new Date("2026-11-27T11:00:00");

const GreetingMobile = () => {
    return (
        <section className="px-6 pt-8 pb-10 m-auto flex flex-col items-center animate-appear" id="welcome-text">
            <Image
                src="/images/logos/AFK_LOGO.png"
                alt="AFK logo"
                height={300}
                width={300}
                className="m-auto pb-10"
            />
            <div className="flex m-auto justify-center items-center text-center text-2xl">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="afk-title text-5xl">AFK 2026</h1>
                    <p className="text-xl font-extrabold max-w-xl">
                        November 27th, 2026 @ Aurum, Turku
                    </p>
                    <Countdown targetDate={eventDate} /> 
                    <div className="flex items-center">
                        <button
                            className="afk-pill text-lg bg-blue-900/80 mt-3 transition-colors duration-300"
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
    )
}

export default GreetingMobile;