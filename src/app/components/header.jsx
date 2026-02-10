"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import ButtonHeader from "./buttonHeader";

const Header = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`bg-primary flex items-center justify-between fixed border-black shadow-md left-0 w-full z-10 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
            id="header"
        >
            <button
                className="ml-5 flex items-center justify-center"
                onClick={() => {
                    document
                        .getElementById("root")
                        .scrollIntoView({ behavior: "smooth" });
                }}
            >
                <Image
                    src="/images/AFK_logo_small.png"
                    alt="AFK logo"
                    height={50}
                    width={50}
                    className="p-1"
                />
            </button>
            <div className="mr-5 flex items-center gap-4 p-3 text-lg">
                {/*Temporary links/sections, could be changed to different pages with images or companies etc.*/}
                <ButtonHeader name="About" id="about" />
                <ButtonHeader name="AFK25 Info" id="event-info" />
                <ButtonHeader name="The Organizers" id="organizers" />
                {/*<ButtonHeader name="Participants" id="participants"/>*/}
                <ButtonHeader name="Contact" id="contact" />
            </div>
        </nav>
    );
};

export default Header;
