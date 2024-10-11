import HeroSection from "../Elements/HeroSection"

const KontenDesain = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {/* <!--  1 --> */}
                <HeroSection
                    img="a1.svg"
                    title="Big 4 Auditor Financial Analyst"
                    text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                    name="Jenna Ortega"
                    job="Senior Accountant di Gojek"
                    star="★★★★☆"
                    rating="4"
                    nilai={86}
                    harga={300}
                    avatar="b1.svg"
                />

                {/* <!--  2 --> */}
                <HeroSection
                    img="a3.svg"
                    title="Big 4 Auditor Financial Analyst"
                    text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                    name="Jenna Ortega"
                    job="Senior Accountant di Gojek"
                    star="★★★★☆"
                    rating="4"
                    nilai={86}
                    harga={300}
                    avatar="b3.svg"
                />

                {/* <!--  3 --> */}
                <HeroSection
                    img="a3.svg"
                    title="Big 4 Auditor Financial Analyst"
                    text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                    name="Jenna Ortega"
                    job="Senior Accountant di Gojek"
                    star="★★★★☆"
                    rating="4"
                    nilai={86}
                    harga={300}
                    avatar="b3.svg"
                />
            </div>
        </div>
    )
}
export default KontenDesain