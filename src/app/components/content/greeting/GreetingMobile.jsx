import Image from "next/image";

const GreetingMobile = () => {
    return (
        <section className="px-6 pt-8 pb-10 m-auto flex flex-col items-center animate-appear" id="welcome-text">
            <Image
                src="/images/logos/AFK_LOGO.png"
                alt="AFK logo"
                height={300}
                width={300}
                className="m-auto pb-10"
            />
            <h1 className="afk-title text-5xl">AFK 2026</h1>
            <p className="text-blue-100 text-center mt-3">November 27th, 2026 @ Aurum, Turku</p>
            <p className="text-blue-100 text-center mt-3">Meet the companies, dive into talks, and end the day with our sauna evening.</p>
            <button
                className="afk-pill mt-6"
                onClick={() => {
                    document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" });
                }}
            >
                Attend AFK
            </button>
        </section>
    )
}

export default GreetingMobile;