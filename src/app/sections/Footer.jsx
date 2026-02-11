import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="text-white z-30 h-fit" id="footer">
            <div className="afk-divider"></div>
            <div className="grid grid-cols-3 items-center justify-center text-left md:text-center h-fit py-10 px-6 gap-10">
                <div className="items-center justify-center flex">
                    <Image
                        src="/images/AFK_LOGO.png"
                        alt="AFK logo"
                        height={150}
                        width={150}
                    />
                </div>
                <div className="md:col-span-1 col-span-2 text-md text-blue-100">
                    <p className="uppercase tracking-[0.2em] text-blue-200 text-md mb-2">
                        Contact
                    </p>
                    <p>
                        The AFK organizers can be reached through the following
                        means:
                    </p>
                    <br />
                    <p>Email: afk@abo.fi</p>
                    <br />
                    <p>
                        Address: <br /> Abo Akademi <br /> Agora
                        Vattenborgsvagen 5 <br /> 20500 Abo
                    </p>
                </div>
                <div className="items-center justify-center md:flex hidden">
                    <Image
                        src="/images/footeralbin.png"
                        alt="Albin image"
                        height={130}
                        width={130}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
