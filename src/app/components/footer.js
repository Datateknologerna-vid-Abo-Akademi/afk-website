import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white z-30 h-fit" id="footer">
            <div className="flex flex-row items-center justify-around text-center h-fit p-4">
                <div className="w-1/3 items-center justify-center flex">
                    <Image src="/images/AFK_logo_small.png" alt="AFK logo" height={150} width={150} className="p-1 flex"/>
                </div>
                <div className="w-1/3 text-center">
                    <br />
                    <p>The AFK organizers can be reached though he following means:</p>
                    <br />
                    <p>Email: afk@abo.fi</p>
                    <br />
                    <p>Address: <br /> Åbo Akademi <br /> Agora Vattenborgsvägen 5 <br /> 20500 Åbo</p>
                    </div>
                <div className="w-1/3 items-center justify-center flex">
                    <Image src="/images/footeralbin.png" alt="Albin image" height={150} width={150} className="p-1 flex"/>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
