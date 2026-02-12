import Form from "./ContactForm";

const Contact = () => {
    return (
        <div id="contact">
            <div>
                <h1 className="afk-section-title afk-title text-2xl">Contact Us / Sign Up for AFK</h1>
                <p className="text-blue-100 leading-relaxed mb-5">If your company is interested in attending AFK, or if you have any other questions, please don't hesitate in reaching out to us by filling out the form below. Alternatively you can send an email to us directly at <span className="font-semibold">afk@abo.fi</span></p>
            </div>
            <Form />
        </div>
    )
}

export default Contact;