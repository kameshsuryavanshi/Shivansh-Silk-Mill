import { FaLocationDot } from "react-icons/fa6";

const locations = [
    {
        title: "Mumbai Corporate / Sales Office",
        address: "384, J. Dhabolkar Wadi, Ground Floor, Room No. 5, Kalbadevi, Mumbai - 400002",
    },
    {
        title: "Bhiwandi Manufacturing Unit",
        address: "Meetali Commercial Complex, B Wing, 1st Floor, Room No. 114, Munisuvrat Compound, Rahanal Village, Bhiwandi - 421302, Dist. Thane",
    },
];

export default function Maps() {
    return (
        <section id="locations" className="section locations-section">
            <div className="section-heading">
                <span className="eyebrow">Locations</span>
                <h2>Mumbai office and Bhiwandi production base</h2>
            </div>

            <div className="location-grid">
                {locations.map((location) => (
                    <article className="location-card" key={location.title}>
                        <FaLocationDot aria-hidden="true" />
                        <h3>{location.title}</h3>
                        <p>{location.address}</p>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Directions
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}
