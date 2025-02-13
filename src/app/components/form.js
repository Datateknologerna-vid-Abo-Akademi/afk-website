import React from "react";

const Form = () => {
    return (
        <div id="contact">
            <div>
                <h1 className="text-3xl mb-5">Contact Us</h1>
                <p className="text-md mb-5">If your company is interested in attending AFK, please don't hesitate in reaching out to us by filling out the form below. Alternatively you can send an email to us directly at afk@abo.fi</p>
            </div>
            <div className="bg-primary rounded-md border-black border-2">
                <form className="p-10 flex flex-col">
                    <h1 className="text-3xl mb-5">Contact Form</h1>
                    <div className="mb-5">
                        <label>Name:</label>
                        <div className="bg-white rounded-md flex flex-col">
                            <input className="mx-2 focus:outline-none" type="text" name="user_name" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label>Email:</label>
                        <div className="bg-white rounded-md flex flex-col">
                            <input className="mx-2 focus:outline-none" type="email" name="user_email" />
                        </div>
                    </div>
                    <div className="mb-5 flex flex-col">
                        <label>Message</label>
                        <div className="bg-white rounded-md flex flex-col">
                            <textarea className="mx-2 focus:outline-none" name="message" />
                        </div>
                    </div>
                    <div className="cursor-pointer w-fit hover:bg-blue-400 hover:text-white border-black border-2 rounded-md p-2 mt-2">
                        <input type="submit" value="Send" className="cursor-pointer" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;