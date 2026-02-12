import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="text-white bg-black z-30 h-fit" id="footer">
            <div className="afk-divider"></div>
            <div className="grid grid-cols-3 items-center justify-center text-left md:text-center h-fit py-10 px-6 gap-10">
                <div className="items-center justify-center flex">
                    <Image
                        src="/images/logos/AFK_LOGO.png"
                        alt="AFK logo"
                        height={200}
                        width={200}
                    />
                </div>
                <div className="md:col-span-1 col-span-2 text-blue-100">
                    <h2 className="uppercase text-lg tracking-[0.2em] text-blue-200 mb-2">
                        Contact
                    </h2>
                    <p>
                        The AFK organizers can be reached through the following
                        means:
                    </p>
                    <br />
                    <p>Email: afk[at]abo.fi</p>
                    <br />
                    <p>
                        Address: <br /> Åbo Akademi <br /> Agora
                        Vattenborgsvägen 5 <br /> 20500 Åbo
                    </p>
                </div>
                <div className="items-center justify-center md:flex hidden">
                    <Image
                        src="/images/logos/footeralbin.png"
                        alt="Albin image"
                        height={180}
                        width={180}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
