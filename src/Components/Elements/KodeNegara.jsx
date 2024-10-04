import React, { useState } from "react";

const KodeNegara = () => {
    const [selectedCountryCode, setSelectedCountryCode] = useState({
        code: "+62",
        country: "ID",
        flag: "https://flagcdn.com/w320/id.png",
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Data negara, inisial, dan bendera
    const countries = [
        { code: "+62", country: "ID", flag: "https://flagcdn.com/w320/id.png", name: "Indonesia" },
        { code: "+1", country: "US", flag: "https://flagcdn.com/w320/us.png", name: "United States" },
        { code: "+44", country: "GB", flag: "https://flagcdn.com/w320/gb.png", name: "United Kingdom" },
    ];

    const handleCountryChange = (country) => {
        setSelectedCountryCode(country);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="grid gap-2">
            <label htmlFor="phone" className="text-[16px]">
                NO. Hp <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
                {/* Bagian Kode Negara dan Dropdown */}
                <div className="relative w-28">
                    <div
                        className="flex items-center border border-slate-300 rounded-md p-1.5 bg-slate-200 cursor-pointer"
                        onClick={toggleDropdown}
                    >
                        <img
                            src={selectedCountryCode.flag}
                            alt={selectedCountryCode.country}
                            className="w-5 h-5 mr-2"
                        />
                        {/* Tampilkan inisial negara dan kode negara */}
                        <p className="mr-2">{selectedCountryCode.country}</p>
                        <p>{selectedCountryCode.code}</p>
                        <img
                            src="./img/arrowDown.svg"
                            alt="Dropdown"
                            className="ml-auto w-3 h-3"
                        />
                    </div>

                    {/* Dropdown negara */}
                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 bg-white shadow-md border rounded-md z-10 w-full mt-1">
                            {countries.map((country, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleCountryChange(country)}
                                >
                                    <img
                                        src={country.flag}
                                        alt={country.country}
                                        className="w-5 h-5 mr-2"
                                    />
                                    <p className="mr-2">{country.country}</p>
                                    <span>{country.code}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Input nomor telepon */}
                <div className="flex-1">
                    <input
                        id="phone"
                        type="tel"
                        placeholder="Masukkan nomor telepon"
                        className="w-full p-2 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default KodeNegara;
