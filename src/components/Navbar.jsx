import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

const links = [
    { label: "About", href: "#about" },
    { label: "Process", href: "#manufacturing" },
    { label: "Products", href: "#products" },
    { label: "Infrastructure", href: "#infrastructure" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="announcement-bar">
                <FaTruckFast aria-hidden="true" />
                <span>Premium shirting fabrics · Bulk orders welcome · Since 1989</span>
            </div>

            <header className="site-header">
                <a className="brand" href="#home" aria-label="Shivansh Silk Mill home">
                    <span className="brand-mark">SS</span>
                    <span>
                        <strong>Shivansh Silk Mill</strong>
                        <small>Premium Shirting Fabrics</small>
                    </span>
                </a>

                <button
                    className="menu-button"
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    onClick={() => setOpen((value) => !value)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>

                <nav className={open ? "site-nav open" : "site-nav"}>
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                    <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
                        Get Quote
                    </a>
                </nav>
            </header>
        </>
    );
}
