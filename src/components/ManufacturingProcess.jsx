import { motion } from "framer-motion";

const process = [
    "Yarn Procurement",
    "Warping",
    "Weaving",
    "Dyeing",
    "Finishing",
    "Quality Check",
    "Packaging",
    "Dispatch",
];

export default function ManufacturingProcess() {
    return (
        <section id="manufacturing" className="section process-section">
            <div className="section-heading">
                <span className="eyebrow">Manufacturing Process</span>
                <h2>Reliable production from yarn to dispatch</h2>
                <p>
                    Every order moves through a controlled workflow designed for consistency,
                    shade accuracy, and timely bulk delivery.
                </p>
            </div>

            <div className="process-grid">
                {process.map((step, index) => (
                    <motion.article
                        className="process-step"
                        key={step}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.04 }}
                    >
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <h3>{step}</h3>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
