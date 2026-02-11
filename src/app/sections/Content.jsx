"use client"

import React from "react";
import Image from "next/image";
import Greeting from "../components/content/greeting/Greeting";
import GreetingMobile from "../components/content/greeting/GreetingMobile";
import Participants from "../components/content/participants/Participants";
import About from "../components/AboutAFK";
import Organizers from "../components/Organizers";
import Contact from "../components/content/contact/ContactInfo";
import InfoBeforeFair from "../components/content/event-info/InfoBeforeFair";
import InfoFair from "../components/content/event-info/InfoFair";

const Content = () => {
    return (
        <div className="text-white sm:pt-16 pt-2" id="content">
            <div className="lg:flex hidden">
                <Greeting />
            </div>
            <div className="lg:hidden flex">
                <GreetingMobile />
            </div>
            <div className="max-w-6xl mx-auto px-6 sm:px-10 pb-16 space-y-10">
                <div className="afk-card">
                    <About />
                </div>
                <div className="afk-card">
                    {/*Change around Prices and Fair depending on the time until the event.
                    When it is around 1-2 months until the event then showcase the fair, otherwise show the prices*/}
                    <InfoBeforeFair />
                    {/*<InfoFair />*/}
                </div>
                <div className="afk-card">
                    <Organizers />
                </div>
                { /* Participants commented out until we have approval from companies 
                <div className="afk-card">
                    <Participants />
                </div>
                */ }
                <div className="afk-card">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default Content;
