import aboutImage from "../assets/images/about.jpg";

export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="about-layout">
                <img src={aboutImage} alt="Textile fabric production" />

                <div>
                    <span className="eyebrow">About Shivansh Silk Mill</span>
                    <h2>
                        Experienced fabric manufacturing for <span className="highlight">modern</span> garment buyers
                    </h2>
                    <p>
                        Shivansh Silk Mill is a trusted manufacturer of premium shirting
                        fabrics, serving garment manufacturers, wholesalers, exporters, and
                        fashion brands.
                    </p>
                    <p>
                        With textile industry expertise dating back to 1989 and a modern
                        manufacturing setup, we combine traditional knowledge with advanced
                        production discipline.
                    </p>
                    <p>
                        Our annual production capacity exceeds 40 lakh meters, enabling
                        large-scale orders while maintaining strict quality standards.
                    </p>
                </div>
            </div>
        </section>
    );
}
