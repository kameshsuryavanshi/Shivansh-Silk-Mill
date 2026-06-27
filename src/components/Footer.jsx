import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationDot,
    FaPhone,
} from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-grid">
                <div>
                    <h3>Shivansh Silk Mill</h3>
                    <p>Specialists in shirting and garment fabrics since 1989.</p>
                </div>

                <div>
                    <h4>Quick Links</h4>
                    <a href="#about">About</a>
                    <a href="#products">Products</a>
                    <a href="#manufacturing">Manufacturing</a>
                    <a href="#contact">Contact</a>
                </div>

                <div>
                    <h4>Locations</h4>
                    <p><FaLocationDot /> Mumbai Office</p>
                    <p><FaLocationDot /> Bhiwandi Manufacturing Unit</p>
                </div>

                <div>
                    <h4>Contact</h4>
                    <a href="tel:+919011411477"><FaPhone /> +91 90114 11477</a>
                    <a href="mailto:info@shivanshsilk.com"><FaEnvelope /> info@shivanshsilk.com</a>
                    <div className="social-links">
                        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <span>&copy; {currentYear} Shivansh Silk Mill. All rights reserved.</span>
                <span>Premium Fabric Manufacturer</span>
            </div>
        </footer>
    );
}
