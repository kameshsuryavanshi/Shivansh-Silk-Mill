import factoryImage from "../assets/images/factory.jpg";
import officeImage from "../assets/images/factory_.png";

const highlights = [
    "Modern weaving and finishing setup",
    "Dedicated quality inspection workflow",
    "Bulk order coordination from Mumbai and Bhiwandi",
    "Capacity planned for 40 lakh+ meters annually",
];

export default function Infrastructure() {
    return (
        <section id="infrastructure" className="section infrastructure-section">
            <div className="infrastructure-layout">
                <div>
                    <span className="eyebrow">Infrastructure</span>
                    <h2>Built for scale, consistency, and timely delivery</h2>
                    <p>
                        Shivansh Silk Mill combines textile experience with a focused
                        manufacturing setup for bulk shirting and garment fabric orders.
                    </p>
                    <ul className="check-list">
                        {highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="image-stack" aria-label="Factory and office images">
                    <img src={factoryImage} alt="Textile manufacturing unit" />
                    <img src={officeImage} alt="Shivansh Silk Mill office" />
                </div>
            </div>
        </section>
    );
}
