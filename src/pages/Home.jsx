import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import ManufacturingProcess from "../components/ManufacturingProcess";
import Products from "../components/Products";
import Infrastructure from "../components/Infrastructure";
import WhyChooseUs from "../components/WhyChooseUs";
import Industries from "../components/Industries";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Maps from "../components/Maps";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Stats />
            <ManufacturingProcess />
            <Products />
            <Infrastructure />
            <WhyChooseUs />
            <Industries />
            <Testimonials />
            <Contact />
            <Maps />
            <Footer />
            <WhatsappButton />
        </>
    );
}
