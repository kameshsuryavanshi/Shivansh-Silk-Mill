import { useMemo, useState } from "react";
import factoryImage from "../assets/images/factory.jpg";
import officeImage from "../assets/images/office.jpg";
import aboutImage from "../assets/images/about.jpg";
import heroImage from "../assets/images/hero.jpg";

const products = [
    {
        title: "Cotton Shirting Fabrics",
        category: "Shirting",
        image: aboutImage,
        description: "Soft, breathable shirting fabric for everyday and formal wear.",
    },
    {
        title: "Poly Cotton Fabrics",
        category: "Shirting",
        image: heroImage,
        description: "Durable blended fabrics built for dependable large-scale production.",
    },
    {
        title: "Formal Wear Fabrics",
        category: "Garments",
        image: officeImage,
        description: "Refined finishes and consistent shades for premium garment lines.",
    },
    {
        title: "Uniform Fabrics",
        category: "Garments",
        image: factoryImage,
        description: "Strong, repeatable fabrics suited for institutions and workwear.",
    },
    {
        title: "Corporate Shirting",
        category: "Corporate",
        image: heroImage,
        description: "Business-ready textures and colors for corporate apparel programs.",
    },
    {
        title: "Custom Fabric Manufacturing",
        category: "Custom",
        image: factoryImage,
        description: "Custom yarn, weave, shade, and finishing support for bulk buyers.",
    },
];

export default function Products() {
    const categories = ["All", ...new Set(products.map((item) => item.category))];
    const [filter, setFilter] = useState("All");

    const filteredProducts = useMemo(() => {
        if (filter === "All") {
            return products;
        }

        return products.filter((item) => item.category === filter);
    }, [filter]);

    return (
        <section id="products" className="section products-section">
            <div className="section-heading">
                <span className="eyebrow">Product Range</span>
                <h2>
                    Fabric categories for <span className="highlight">serious</span> garment production
                </h2>
                <p>
                    From shirting to uniform and custom bulk fabric, our production setup
                    supports repeatable quality across high-volume orders.
                </p>
            </div>

            <div className="filter-bar" aria-label="Product filters">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={filter === category ? "active" : ""}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <article className="product-card" key={product.title}>
                        <img src={product.image} alt={product.title} />
                        <div>
                            <span>{product.category}</span>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
