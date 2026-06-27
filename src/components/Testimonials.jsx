const testimonials = [
    {
        quote: "Consistent fabric quality and dependable timelines make Shivansh Silk Mill a practical partner for our shirting range.",
        name: "Garment Buyer",
        role: "Mumbai",
    },
    {
        quote: "Their team understands bulk fabric requirements and communicates clearly from sampling to dispatch.",
        name: "Wholesale Partner",
        role: "Maharashtra",
    },
    {
        quote: "We value their custom shade and finishing support for repeat garment programs.",
        name: "Uniform Supplier",
        role: "India",
    },
];

export default function Testimonials() {
    return (
        <section className="section testimonials-section">
            <div className="section-heading">
                <span className="eyebrow">What Our Customers Say</span>
                <h2>Trusted by fabric buyers and garment teams</h2>
                <p className="rating-badge">4.9 average · 50+ bulk buyers</p>
            </div>

            <div className="testimonial-grid">
                {testimonials.map((item) => (
                    <figure className="testimonial-card" key={item.quote}>
                        <blockquote>{item.quote}</blockquote>
                        <figcaption>
                            <strong>{item.name}</strong>
                            <span>{item.role}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
