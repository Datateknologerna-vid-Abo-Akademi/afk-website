"use client"

import React, { useEffect } from "react";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [messageState, setMessageState] = React.useState(null);
    const [isClient, setIsClient] = React.useState(false);

    useEffect(() => {
        setIsClient(true);

        // Avoid loading the script multiple times if the component is unmounted and remounted
        const exisiting = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
        if (exisiting) {
            return;
        }

        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    const resetTurnstile = () => {
        if (window.turnstile) {
            window.turnstile.reset();
        }        
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessageState(null);

        try {
            const token = e.target.elements["cf-turnstile-response"].value;
            if (!token) {
                setMessageState("Clouflare verification failed.");
                setIsSubmitting(false);
                return;
            }
            
            const response = await fetch("https://contactapi.afk-fair.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: e.target.elements.from_name.value,
                    company: e.target.elements.company_name.value,
                    email: e.target.elements.from_email.value,
                    options: e.target.elements.options.value,
                    message: e.target.elements.message.value,
                    "cf-turnstile-response": e.target.elements["cf-turnstile-response"].value
                }),
            });

            if (!response.ok) throw new Error("Network response was not ok.");

            // Assure the response is fully read before updating the state
            await response.json();
            setMessageState("Message Sent!");

            e.target.reset();
            resetTurnstile();
            setIsSubmitting(false);

            setTimeout(() => {
                setMessageState(null);
            }, 5000);
        } catch (error) {
            setMessageState("Error sending message.");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="afk-card mx-auto max-w-3xl">
            <form className="md:px-10 py-5 flex flex-col" onSubmit={sendEmail}>
                <h1 className="afk-section-title afk-title text-white text-xl">Contact Form</h1>
                <p className="mb-4 ">Fields marked with <span className="text-red-400">*</span> are mandatory, the rest can be left empty.</p>
                <div className="mb-3">
                    <label>Name: <span className="text-red-400">*</span></label>
                    <div className="bg-black/60 rounded-md border border-blue-500/30 flex flex-col">
                        <input className="mx-3 py-2 bg-transparent placeholder:text-blue-200/60 focus:outline-none" type="text" name="from_name" placeholder="Matti Meikäläinen" required />
                    </div>
                </div>
                <div className="mb-3">
                    <label>Company: <span className="text-red-400">*</span></label>
                    <div className="bg-black/60 rounded-md border border-blue-500/30 flex flex-col">
                        <input className="mx-3 py-2 bg-transparent placeholder:text-blue-200/60 focus:outline-none" type="text" name="company_name" placeholder="Company Oy" required />
                    </div>
                </div>
                <div className="mb-3">
                    <label>Email: <span className="text-red-400">*</span></label>
                    <div className="bg-black/60 rounded-md border border-blue-500/30 flex flex-col">
                        <input className="mx-3 py-2 bg-transparent placeholder:text-blue-200/60 focus:outline-none" type="email" name="from_email" placeholder="placeholder@company.com" required />
                    </div>
                </div>
                <div className="mb-3">
                    <label>What are you interested in: </label>
                    <div className="bg-black/60 rounded-md border border-blue-500/30 flex flex-col">
                        <input className="mx-3 py-2 bg-transparent placeholder:text-blue-200/60 focus:outline-none" type="text" name="options" placeholder="e.g. a stand, presentation, and hackathon" />
                    </div>
                </div>
                <div className="mb-4">
                    <label>Message <span className="italic text-sm">(max 2000 characters)</span></label>
                    <div className="bg-black/60 rounded-md border border-blue-500/30 flex flex-col">
                        <textarea className="mx-3 py-2 bg-transparent placeholder:text-blue-200/60 focus:outline-none min-h-24" name="message" maxLength={2000} />
                    </div>
                </div>
                {isClient && (
                    <div className="cf-turnstile" data-sitekey="0x4AAAAAAA9l0AlYgV9onEKD"></div>
                )}
                <div className="cursor-pointer w-fit transition duration-150 ease-in-out border border-blue-500/60 rounded-full px-6 py-2 flex items-center justify-center uppercase tracking-[0.2em] hover:bg-blue-600/30">
                    <input type="submit" value="Send" className="cursor-pointer" disabled={isSubmitting} />
                </div>
                {messageState && (
                    messageState === "Message Sent!" ? 
                    <div className="bg-green-600/20 p-2 text-center rounded-md mt-4"><p className="text-green-200">{messageState}</p></div> : 
                    <div className="bg-red-600/20 p-2 text-center rounded-md mt-4"><p className="text-red-200">{messageState}</p></div>
                )}

                {/*
                // Use this for testing the form submisstion status messages
                {true && (
                    false ? 
                    <div className="bg-green-600/20 p-2 text-center rounded-md mt-4"><p className="text-green-200">example</p></div> : 
                    <div className="bg-red-600/20 p-2 text-center rounded-md mt-4"><p className="text-red-200">example</p></div>
                )}
                */}
            </form>
        </div>
    )
}

export default ContactForm;