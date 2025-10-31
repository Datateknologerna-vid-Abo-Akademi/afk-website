import Image from "next/image";

const WelcomeMobile = () => {
    return (
        <div className="bg-primary h-fit relative w-full mb-10 mt-5 animate-appear" id="welcome-text">
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <Image src="/images/AFK_logo.png" alt="Welcome" width={375} height={375} className="p-5" />
                </div>
            </div>
            <div className="text-center relative flex justify-center items-center flex-col text-gray-200 font-bold [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">
                <h1 className="text-4xl">Welcome to AFK 2025</h1>
                <h2 className="text-2xl">December 5th @ Agora, Turku</h2>
            </div>
        </div>
    )
}

export default WelcomeMobile;