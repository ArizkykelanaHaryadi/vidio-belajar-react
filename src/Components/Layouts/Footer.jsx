import React, { useState } from 'react';

const Footer = () => {
    const [kategoriOpen, setKategoriOpen] = useState(false);
    const [perusahaanOpen, setPerusahaanOpen] = useState(false);
    const [komunitasOpen, setKomunitasOpen] = useState(false);

    const handleKategoriClick = () => {
        setKategoriOpen(!kategoriOpen);
    };

    const handlePerusahaanClick = () => {
        setPerusahaanOpen(!perusahaanOpen);
    };

    const handleKomunitasClick = () => {
        setKomunitasOpen(!komunitasOpen);
    };

    return (
        <footer className="bg-white py-8 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div>
                    <a href="#" className="text-2xl font-bold text-yellow-600">videobelajar</a>
                    <p className="text-gray-600 mt-4">Gali Potensi Anda Melalui Pembelajaran Video di harisok.id!</p>
                    <p className="text-gray-600">Jl. Usman Effendi No. 50 Lowokwaru, Malang<br />+62-877-7123-1234</p>
                </div>
                <div className="flex flex-wrap mt-8 md:mt-0">
                    <div className="w-full md:w-auto px-4">
                        <button className="font-semibold text-gray-700 flex justify-between" onClick={handleKategoriClick}>
                            Kategori
                            {kategoriOpen || window.innerWidth > 768 ? null : <span className="ml-2 flex justify-end">&gt;</span>}
                        </button>
                        {(kategoriOpen || window.innerWidth > 768) && (
                            <ul className="mt-2 text-gray-600">
                                <li><a href="#" className="hover:underline">Digital & Teknologi</a></li>
                                <li><a href="#" className="hover:underline">Pemasaran</a></li>
                                <li><a href="#" className="hover:underline">Manajemen Bisnis</a></li>
                                <li><a href="#" className="hover:underline">Pengembangan Diri</a></li>
                                <li><a href="#" className="hover:underline">Desain</a></li>
                            </ul>
                        )}
                    </div>
                    <div className="w-full md:w-auto px-4">
                        <button className="font-semibold text-gray-700" onClick={handlePerusahaanClick}>
                            Perusahaan
                            {perusahaanOpen || window.innerWidth > 768 ? null : <span className="ml-2">&gt;</span>}
                        </button>
                        {(perusahaanOpen || window.innerWidth > 768) && (
                            <ul className="mt-2 text-gray-600">
                                <li><a href="#" className="hover:underline">Tentang Kami</a></li>
                                <li><a href="#" className="hover:underline">FAQ</a></li>
                                <li><a href="#" className="hover:underline">Kebijakan Privasi</a></li>
                                <li><a href="#" className="hover:underline">Ketentuan Layanan</a></li>
                                <li><a href="#" className="hover:underline">Bantuan</a></li>
                            </ul>
                        )}
                    </div>
                    <div className="w-full md:w-auto px-4">
                        <button className="font-semibold text-gray-700" onClick={handleKomunitasClick}>
                            Komunitas
                            {komunitasOpen || window.innerWidth > 768 ? null : <span className="ml-2">&gt;</span>}
                        </button>
                        {(komunitasOpen || window.innerWidth > 768) && (
                            <ul className="mt-2 text-gray-600">
                                <li><a href="#" className="hover:underline">Tips Sukses</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8 flex justify-between text-gray-600">
                <a href="#" className="px-4">2024 Arizky Kelana Haryadi</a>
                <div className="flex items-center space-x-4">
                    <a href="#"><img src="./img/in.png" alt="LinkedIn" className="h-6" /></a>
                    <a href="#"><img src="./img/instagram.png" alt="Instagram" className="h-6" /></a>
                    <a href="#"><img src="./img/facebook.png" alt="Facebook" className="h-6" /></a>
                    <a href="#"><img src="./img/twitter.png" alt="Twitter" className="h-6" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;