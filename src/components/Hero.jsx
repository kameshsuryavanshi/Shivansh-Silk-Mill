import { motion } from "framer-motion";
import { FaGlobe, FaIndianRupeeSign, FaPalette } from "react-icons/fa6";
import heroVideo from "../assets/videos/textile-hero.mp4";

const features = [
    { icon: FaPalette, label: "Custom Shades" },
    { icon: FaIndianRupeeSign, label: "Wholesale Pricing" },
    { icon: FaGlobe, label: "Pan-India Delivery" },
];

export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <video autoPlay loop muted playsInline className="hero-video">
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="hero-overlay" />

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <span className="eyebrow">Since 1989</span>
                <h1>
                    Crafting <span className="highlight">Premium</span> Quality Fabrics
                </h1>
                <p>
                    Manufacturers of shirting, uniform, corporate, and custom garment
                    fabrics for bulk buyers across India.
                </p>
                <div className="hero-actions">
                    <a className="primary-button" href="#contact">Get Quote</a>
                    <a className="secondary-button" href="#products">View Products</a>
                </div>
            </motion.div>

            <div className="hero-features">
                {features.map(({ icon: Icon, label }) => (
                    <div className="hero-feature" key={label}>
                        <Icon aria-hidden="true" />
                        <span>{label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
