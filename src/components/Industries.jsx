import {
    FaBuilding,
    FaIndustry,
    FaShirt,
    FaStore,
    FaTruckFast,
    FaUsersGear,
} from "react-icons/fa6";

const industries = [
    { name: "Garment Manufacturers", icon: FaIndustry },
    { name: "Fashion Brands", icon: FaShirt },
    { name: "Uniform Suppliers", icon: FaUsersGear },
    { name: "Retail Chains", icon: FaStore },
    { name: "Export Houses", icon: FaTruckFast },
    { name: "Wholesalers", icon: FaBuilding },
];

export default function Industries() {
    return (
        <section className="section industries-section">
            <div className="section-heading">
                <span className="eyebrow">Industries Served</span>
                <h2>Supplying fabric partners across the garment trade</h2>
            </div>

            <div className="industry-grid">
                {industries.map(({ name, icon: Icon }) => (
                    <article className="industry-card" key={name}>
                        <Icon aria-hidden="true" />
                        <h3>{name}</h3>
                    </article>
                ))}
            </div>
        </section>
    );
}
