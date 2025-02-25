"use client"

import React, { useEffect } from "react";

const Form = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [messageState, setMessageState] = React.useState(null);
    const [isClient, setIsClient] = React.useState(false);

    useEffect(() => {
        setIsClient(true);
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);

        fetch("https://contactapi.afk-fair.com/contact", {
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
            })
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then((data) => {
            setMessageState("Message Sent!");
            setIsSubmitting(false);
            setTimeout(() => {
                setMessageState(null);
            }
            , 5000);
        });

        // Clear the form
        e.target.reset();
    };

    return (
        <div className="bg-primary mx-auto max-w-3xl rounded-md border-black border-2">
            <form className="md:px-10 px-5 py-5 flex flex-col" onSubmit={sendEmail}>
                <h1 className="text-3xl mb-2">Contact Form</h1>
                <p className="mb-4">Fields marked with <span className="text-red-600">*</span> are mandatory, the rest can be left empty.</p>
                <div className="mb-3">
                    <label>Name: <span className="text-red-600">*</span></label>
                    <div className="bg-white rounded-md flex flex-col">
                        <input className="mx-2 py-1 focus:outline-none" type="text" name="from_name" placeholder="Matti Meikäläinen" required />
                    </div>
                </div>
                <div className="mb-3">
                    <label>Company: <span className="text-red-600">*</span></label>
                    <div className="bg-white rounded-md flex flex-col">
                        <input className="mx-2 py-1 focus:outline-none" type="text" name="company_name" placeholder="Company Oy" required />
                    </div>
                </div>
                <div className="mb-3">
                    <label>Email: <span className="text-red-600">*</span></label>
                    <div className="bg-white rounded-md flex flex-col">
                        <input className="mx-2 py-1 focus:outline-none" type="email" name="from_email" placeholder="placeholder@company.com" required />
                    </div>
                </div>
                <div className="mb-3">
                    <label>What are you interested in: </label>
                    <div className="bg-white rounded-md flex flex-col">
                        <input className="mx-2 py-1 focus:outline-none" type="text" name="options" placeholder="e.g. a stand, readme and presentation" />
                    </div>
                </div>
                <div className="mb-4">
                    <label>Message <span className="italic text-sm">(max 2000 characters)</span></label>
                    <div className="bg-white rounded-md flex flex-col">
                        <textarea className="mx-2 py-1 focus:outline-none min-h-20" name="message" maxLength={2000} />
                    </div>
                </div>
                {isClient && (
                    <div className="cf-turnstile" data-sitekey="0x4AAAAAAA9l0AlYgV9onEKD"></div>
                )}
                <div className="cursor-pointer w-fit transition duration-150 ease-in-out bg-blue-400 hover:bg-blue-600 hover:text-white border-black border-2 rounded-md p-2 flex items-center justify-center">
                    <input type="submit" value="Send" className="cursor-pointer" disabled={isSubmitting} />
                </div>
                {messageState && (
                    messageState === "Message Sent!" ? 
                    <div className="bg-green-200 p-2 text-center rounded-md mt-4"><p className="text-green-800">{messageState}</p></div> : 
                    <div className="bg-red-200 p-2 text-center rounded-md mt-4"><p className="text-red-800">{messageState}</p></div>
                )}
            </form>
        </div>
    )
}

export default Form;