import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Comparison from "../components/Comparison"
import Features from "../components/Features"
import FAQs from "../components/FAQs"
//import Footer from "../components/Footer"

function LandingPage() {
    return (
        <div className="h-[140vh] bg-[#0B1221] text-white bg-[url('./assets/bg-img.svg')] bg-[length:100%] bg-no-repeat bg-center">
            <Navbar />
            <Hero />
            <Comparison />
            <Features />
            <FAQs />
        </div>
    )
}

export default LandingPage;