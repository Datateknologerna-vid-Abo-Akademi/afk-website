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
        <div className="bg-primary text-black" id="content">
            <div className="sm:mb-10 sm:flex hidden">
                <Greeting />
            </div>
            <div className="sm:hidden flex">
                <GreetingMobile />
            </div>
            <div className="max-w-5xl mb-10 sm:px-14 px-8 bg-white rounded-md mx-4 lg:mx-auto">
                <div className="pt-10">
                    <About />
                </div>
                <div className="pt-10">
                    {/*Change around Prices and Fair depending on the time until the event.
                    When it is around 1-2 months until the event then showcase the fair, otherwise show the prices*/}
                    <InfoBeforeFair />
                    {/*<InfoFair />*/}
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
