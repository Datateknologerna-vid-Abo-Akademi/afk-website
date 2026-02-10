import Form from "./ContactForm";

const ContactInfo = () => {
    return (
        <div id="contact">
            <div>
                <h1 className="text-3xl mb-5">Contact Us / Sign Up for AFK</h1>
                <p className="text-md mb-5">If your company is interested in attending AFK, or if you have any other questions, please don't hesitate in reaching out to us by filling out the form below. Alternatively you can send an email to us directly at <span className="font-bold">afk@abo.fi</span></p>
            </div>
            <Form />
        </div>
    )
}

export default ContactInfo;