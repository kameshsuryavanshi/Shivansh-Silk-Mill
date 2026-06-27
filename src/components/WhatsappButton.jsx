import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/919011411477"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={30} />
        </a>
    );
}
