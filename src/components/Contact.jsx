import { useState } from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

export default function Contact() {
    const [status, setStatus] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setStatus("Thank you. Your inquiry is ready to send, and our team will contact you shortly.");
        event.currentTarget.reset();
    }

    return (
        <section id="contact" className="section contact-section">
            <div className="contact-layout">
                <div className="contact-copy">
                    <span className="eyebrow">Contact</span>
                    <h2>Send a fabric inquiry</h2>
                    <p>
                        Share your fabric requirement, quantity, and delivery timeline. We
                        will help you with the right shirting or garment fabric option.
                    </p>

                    <div className="contact-list">
                        <a href="tel:+919011411477">
                            <FaPhone />
                            +91 90114 11477
                        </a>
                        <a href="mailto:info@shivanshsilk.com">
                            <FaEnvelope />
                            info@shivanshsilk.com
                        </a>
                        <span>
                            <FaLocationDot />
                            Mumbai Office and Bhiwandi Manufacturing Unit
                        </span>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input name="name" type="text" placeholder="Your name" required />
                    </label>
                    <label>
                        Phone
                        <input name="phone" type="tel" placeholder="+91 ..." required />
                    </label>
                    <label>
                        Requirement
                        <select name="requirement" defaultValue="Shirting">
                            <option>Shirting</option>
                            <option>Uniform fabric</option>
                            <option>Corporate fabric</option>
                            <option>Custom manufacturing</option>
                        </select>
                    </label>
                    <label>
                        Message
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Fabric type, quantity, shade, timeline..."
                            required
                        />
                    </label>
                    <button type="submit">Submit Inquiry</button>
                    {status && <p className="form-status">{status}</p>}
                </form>
            </div>
        </section>
    );
}
