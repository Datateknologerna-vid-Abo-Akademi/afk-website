"use client"

import Image from "next/image";

const HeaderMobile = () => {
    return (
        <nav className={`bg-primary flex items-center justify-between fixed border-black shadow-md left-0 w-full bg-opacity-95 z-10"}`} id="headerMobile">
            <button className="ml-5 flex items-center justify-center py-2" onClick={() => {document.getElementById("root").scrollIntoView({behavior: "smooth"})}}>
                <Image src="/images/AFK_logo_small.png" alt="AFK logo" height={50} width={50} className="p-1"/>
            </button>
            <div className="mr-5 flex p-3 text-lg">
                <button className="text-black p-2">
                    Menu
                </button>
            </div>
        </nav>
    )
}

export default HeaderMobile;