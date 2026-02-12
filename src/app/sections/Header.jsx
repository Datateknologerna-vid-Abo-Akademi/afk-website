"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import ButtonHeader from "../components/ui/ButtonHeader";

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
            className={`grid grid-cols-2 items-center justify-between fixed left-0 w-full z-20 transition-transform duration-300 border-b border-blue-500/30 bg-black/70 backdrop-blur ${hidden ? "-translate-y-full" : "translate-y-0"}`}
            id="header"
        >
            <button
                className="ml-6 text-lg flex py-3"
                onClick={() => {
                    document
                        .getElementById("root")
                        .scrollIntoView({ behavior: "smooth" });
                }}
            >
                <span className="afk-pill">AFK 2026</span>
            </button>
            {/*
            <div className="ml-6">
                <Image
                    src="/images/AFK_LOGO.png"
                    alt="AFK logo"
                    height={80}
                    width={80}
                    />
            </div>
            */}
            <div className="mr-6 flex text-base justify-end items-center gap-3 p-3 tracking-[0.12em] uppercase">
                {/*Temporary links/sections, could be changed to different pages with images or companies etc.*/}
                <ButtonHeader name="About" id="about" />
                <ButtonHeader name="AFK26 Info" id="event-info" />
                <ButtonHeader name="The Organizers" id="organizers" />
                {/* <ButtonHeader name="Participants" id="participants"/> */}
                <ButtonHeader name="Contact" id="contact" />
            </div>
        </nav>
    );
};

export default Header;
