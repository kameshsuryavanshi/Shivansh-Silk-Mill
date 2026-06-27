import { motion } from "framer-motion";

const stats = [
    { number: "35+", title: "Years Industry Experience" },
    { number: "40L+", title: "Meters Annual Production" },
    { number: "2", title: "Strategic Locations" },
    { number: "100%", title: "Quality Inspection" },
];

export default function Stats() {
    return (
        <section className="stats-section">
            {stats.map((item) => (
                <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                >
                    <strong>{item.number}</strong>
                    <span>{item.title}</span>
                </motion.article>
            ))}
        </section>
    );
}
