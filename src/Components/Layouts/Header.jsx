import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="bg-white shadow-md relative">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <a href="/" className="flex items-center">
                        <img src="./img/loginn.svg" alt="videobelajar" className="h-8 w-auto" />
                    </a>

                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex items-center space-x-6">
                            <div className="relative inline-block text-left">
                                <div>
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
                                    >
                                        <span>Kategori</span>
                                        <svg
                                            className="-mr-1 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 010-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {isDropdownOpen && (
                                    <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Profil Saya</a>
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Kelas Saya</a>
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Pesanan Saya</a>
                                            <Link to="/Login" className="flex items-center px-4 py-2 text-red-500 hover:bg-red-100 hover:text-red-700">
                                                Keluar
                                                <span className="ml-2">
                                                    <img src="./img/Keluar.svg" alt="Keluar" className="h-5 w-5" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <img src="./img/Avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
                        </div>
                    </div>

                    <div className="flex items-center md:hidden">
                        <img src="./img/Avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full mr-4" />
                        <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-20">
                    <nav className="px-2 pt-2 pb-4 space-y-1">
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Kategori</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Profil Saya</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Kelas Saya</a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Pesanan Saya</a>
                        <Link to="/login" className="block px-3 py-2 text-red-500 hover:bg-red-100 rounded">Keluar</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
