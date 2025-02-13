"use client"

import React from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [messageState, setMessageState] = React.useState(null);

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);

        // EmailJS keys, can be public
        emailjs.sendForm(
            'service_s2a3bfl',    // Service ID
            'template_ljb5rrr',   // Template ID
            e.target,           // Form
            'W4pn0aqcV5OYbhJhV'   // Public Key
        )
        .then((result) => {
            setMessageState("Message Sent!");
            setIsSubmitting(false);
            setTimeout(() => {
                setMessageState(null);
            }, 5000) // Hide message after 5 seconds
            }, (error) => {
                setMessageState("Something went wrong, please try again later.");
                setIsSubmitting(false);
                setTimeout(() => {
                    setMessageState(null);
                }, 5000) // Hide message after 5 seconds
            }
        );
        // Clear the form
        e.target.reset();
    };

    return (
        <div id="contact">
            <div>
                <h1 className="text-3xl mb-5">Contact Us!</h1>
                <p className="text-md mb-5">If your company is interested in attending AFK, please don't hesitate in reaching out to us by filling out the form below. Alternatively you can send an email to us directly at afk@abo.fi</p>
            </div>
            <div className="bg-primary mx-10 rounded-md border-black border-2">
                <form className="px-10 py-5 flex flex-col" onSubmit={sendEmail}>
                    <h1 className="text-3xl mb-5">Contact Form</h1>
                    <div className="mb-3">
                        <label>Name:</label>
                        <div className="bg-white rounded-md flex flex-col">
                            <input className="mx-2 py-1 focus:outline-none" type="text" name="from_name" placeholder="Matti Meikäläinen" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Company Name:</label>
                        <div className="bg-white rounded-md flex flex-col">
                            <input className="mx-2 py-1 focus:outline-none" type="text" name="company_name" placeholder="Company Oy" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Email:</label>
                        <div className="bg-white rounded-md flex flex-col">
                            <input className="mx-2 py-1 focus:outline-none" type="email" name="from_email" placeholder="placeholder@company.com" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>What are you interested in:</label>
                        <div className="bg-white rounded-md flex flex-col">
                            <input className="mx-2 py-1 focus:outline-none" type="text" name="options" placeholder="e.g. a stand, readme and presentation" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label>Message</label>
                        <div className="bg-white rounded-md flex flex-col">
                            <textarea className="mx-2 py-1 focus:outline-none min-h-20" name="message" />
                        </div>
                    </div>
                    <div className="cursor-pointer w-fit bg-blue-400 hover:bg-blue-600 hover:text-white border-black border-2 rounded-md p-2 flex items-center justify-center">
                        <input type="submit" value="Send" className="cursor-pointer" />
                    </div>
                    {messageState && (
                        messageState === "Message Sent!" ? 
                        <div className="bg-green-200 p-2 text-center rounded-md mt-4"><p className="text-green-800">{messageState}</p></div> : 
                        <div className="bg-red-200 p-2 text-center rounded-md mt-4"><p className="text-red-800">{messageState}</p></div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Form;