export default function ProductCard({ product }) {
    return (
        <article className="product-card">
            <img src={product.image} alt={product.title} />
            <div>
                <span>{product.category}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
        </article>
    );
}
