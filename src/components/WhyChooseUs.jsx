const features = [
    "35+ Years Industry Experience",
    "40 Lakh+ Meters Production Capacity",
    "Modern Manufacturing Infrastructure",
    "Strict Quality Control",
    "Timely Bulk Deliveries",
    "Customized Fabric Solutions",
];

export default function WhyChooseUs() {
    return (
        <section className="section why-section">
            <div className="section-heading">
                <span className="eyebrow">Why Choose Us</span>
                <h2>Built for dependable textile sourcing</h2>
            </div>
            <ul className="check-grid">
                {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                ))}
            </ul>
        </section>
    );
}
