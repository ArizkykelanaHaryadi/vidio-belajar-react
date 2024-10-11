import React from 'react';

const HeroSection = (props) => {
    const { img, title, text, avatar, name, job, star, nilai, harga, rating } = props;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-6 lg:p-8 md:gap-[8px] lg:gap[16px]">
            <img
                src={`./img/${img}`}
                alt={title}
                className="w-full h-48 object-cover md:h-64 lg:h-80 rounded-lg"
            />
            <div className="p-4 md:p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 md:text-xl lg:text-2xl">{title}</h3>
                <p className="text-gray-600 mb-2 md:text-lg lg:text-xl">{text}</p>
                <div className="flex items-center mb-2">
                    <img
                        src={`./img/${avatar}`}
                        alt="Avatar"
                        className="w-8 h-8 rounded-md mr-2 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    />
                    <div>
                        <p className="text-sm font-medium text-gray-700 md:text-lg lg:text-xl">{name}</p>
                        <p className="text-xs text-gray-500 md:text-sm lg:text-md">{job}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-yellow-500 mr-1">{star}</div>
                        <span className="text-gray-600 text-sm text-underline-2">{rating} ({nilai})</span>
                    </div>
                    <div className="text-green-500 font-semibold">Rp {harga}K</div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection