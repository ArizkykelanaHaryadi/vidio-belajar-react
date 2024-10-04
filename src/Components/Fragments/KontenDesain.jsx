import HeroSection from "../Elements/HeroSection"

const KontenDesain = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {/* <!--  4 --> */}
                <HeroSection img="a4.svg" title="Big 4 Auditor Financial Analyst" text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." name="Jenna Ortega" job="Senior Accountant di Gojek" star="★★★★☆" nilai={86} harga={300} avatar="b4.svg" />
                {/* <!--  5 --> */}
                <HeroSection img="a5.svg" title="Big 4 Auditor Financial Analyst" text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." name="Jenna Ortega" job="Senior Accountant di Gojek" star="★★★★☆" nilai={86} harga={300} avatar="b5.svg" />
                {/* <!--  6 --> */}
                <HeroSection img="a6.svg" title="Big 4 Auditor Financial Analyst" text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." name="Jenna Ortega" job="Senior Accountant di Gojek" star="★★★★☆" nilai={86} harga={300} avatar="b6.svg" />
            </div>
        </div>
    )
}
export default KontenDesain