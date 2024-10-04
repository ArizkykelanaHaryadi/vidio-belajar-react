import Footer from "@/Components/Layouts/Footer"
import TabsMenu from "../Components/Layouts/TabsMenu"
import Header from "@/Components/Layouts/Header"

const HomePage = () => {
    return (
        <div className="bg-[#FFFDF3] min-h-screen mx-auto gap-11">

            {/* Header */}
            <div>
                <Header />
            </div>

            {/* bg atas */}
            <section className="flex justify-center items-center bg-[#fffdf3] py-10 md:py-16 bg-cover bg-center gap-6 md:gap-[32px] bg-[url('./img/FrameH.svg')] rounded-md px-4 md:px-8 lg:px-16">
                <div className="max-w-[1200px] w-full text-center">
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">
                        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                    </h1>
                    <p className="text-sm md:text-lg text-white mb-6 md:mb-8">
                        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                    </p>
                    <a href="#" className="bg-green-500 text-white px-4 md:px-8 py-2 md:py-3 rounded-md text-sm md:text-base">
                        Temukan Video Course untuk Dipelajari!
                    </a>
                </div>
            </section>

            {/* Featured Video Section */}
            <div>
                <TabsMenu />
            </div>

            {/* Newsletter Section */}
            <section className="bg-[url('./img/bawah.svg')] py-10 md:py-16 bg-cover bg-center rounded-lg gap-6 md:gap-8 mb-12 md:mb-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto bg-opacity-70 py-6 md:py-10 text-center text-white">
                    <h2 className="text-xs md:text-sm font-semibold">NEWSLETTER</h2>
                    <h1 className="text-xl md:text-3xl font-bold mt-2">Mau Belajar Lebih Banyak?</h1>
                    <p className="mt-3 md:mt-4 text-sm md:text-lg">
                        Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id.
                    </p>
                    <div className="mt-6 md:mt-8 flex justify-center">
                        <div className="bg-white p-2 rounded-md shadow-lg flex items-center max-w-sm md:max-w-md w-full">
                            <input
                                type="email"
                                placeholder="Masukkan Emailmu"
                                className="flex-grow px-3 md:px-4 py-2 md:py-3 text-black rounded-l-lg focus:outline-none"
                            />
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-3 md:px-4 py-2 md:py-3 rounded-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default HomePage
