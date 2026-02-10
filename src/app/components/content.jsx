import React from "react";
import Image from "next/image";
import Welcome from "./welcome";
import WelcomeMobile from "./welcomeMobile";
import Participants from "./participants";
import About from "./about";
import Organizers from "./organizers";
import Contact from "./contact";
import EventInformationPrices from "./eventInformationPrices";
import EventInformationFair from "./eventInformationFair";

const Content = () => {
    return (
        <div className="bg-primary text-black" id="content">
            <div className="sm:mb-10 sm:flex hidden">
                <Welcome />
            </div>
            <div className="sm:hidden flex">
                <WelcomeMobile />
            </div>
            <div className="max-w-5xl mb-10 sm:px-14 px-8 bg-white rounded-md mx-4 lg:mx-auto">
                <div className="pt-10">
                    <About />
                </div>
                <div className="pt-10">
                    {/*Change around Prices and Fair depending on the time until the event.
                    When it is around 1-2 months until the event then showcase the fair, otherwise show the prices*/}
                    <EventInformationPrices />
                    {/*<EventInformationFair />*/}
                </div>
                <div className="pt-10">
                    <Organizers />
                </div>
                {/*<div className="pt-10"> // Commented out until we get permission from the companies
                    <Participants />
                </div>*/}
                <div className="pt-10 pb-10">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default Content;
