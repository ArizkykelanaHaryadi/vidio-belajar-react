import HeroSection from "../Elements/HeroSection"

const KontenDesain = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {/* <!--  7 --> */}
                <HeroSection img="a7.svg" title="Big 4 Auditor Financial Analyst" text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." name="Jenna Ortega" job="Senior Accountant di Gojek" star="★★★★☆" nilai={86} harga={300} avatar="b7.svg" />
                {/* <!--  8 --> */}
                <HeroSection img="a8.svg" title="Big 4 Auditor Financial Analyst" text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." name="Jenna Ortega" job="Senior Accountant di Gojek" star="★★★★☆" nilai={86} harga={300} avatar="b8.svg" />
                {/* <!--  9 --> */}
                <HeroSection img="a9.svg" title="Big 4 Auditor Financial Analyst" text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." name="Jenna Ortega" job="Senior Accountant di Gojek" star="★★★★☆" nilai={86} harga={300} avatar="b9.svg" />
            </div>
        </div>
    )
}
export default KontenDesain