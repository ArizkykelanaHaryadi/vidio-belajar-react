import React from 'react';
import ReactDOM from 'react-dom';

const LandingPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-4xl mx-auto p-4">
                <Content />
            </div>
        </div>
    );
};

const Content = () => {
    return (
        <div className="flex flex-col md:flex-row items-center">
            <TextSection />
            <ImageSection />
        </div>
    );
};

const TextSection = () => {
    return (
        <div className="md:w-1/2 p-4">
            <h2 className="text-sm font-semibold text-gray-500">VIDEO LEARNING PLATFORM</h2>
            <h1 className="text-4xl font-bold text-gray-900 mt-2">VideoBelajar</h1>
            <p className="text-gray-700 mt-4">
                VideoBelajar adalah platform pembelajaran video berbasis web yang memberi pengguna akses ke beragam kursus dan tutorial berbasis video.
                Dengan VideoBelajar, pengguna dapat belajar dengan kecepatan dan jadwal mereka sendiri.
                VideoBelajar menawarkan cara yang fleksibel dan nyaman untuk memperoleh keterampilan dan pengetahuan baru,
                sehingga memudahkan pengguna menyesuaikan pembelajaran ke dalam kehidupan mereka yang sibuk.
                VideoBelajar menawarkan berbagai kursus dan tutorial, mencakup topik seperti bisnis, teknologi, kesehatan dan kesejahteraan , pembelajaran bahasa, dan banyak lagi.
            </p>
            <div className="flex justify-center mt-4">
                <div className="relative">
                    <a href="/login">
                        <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Klik Disini !
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

const ImageSection = () => {
    return (
        <div className="md:w-1/2 p-4 flex justify-center drop-shadow-xl">
            <img
                src="./img/iphone.png"
                alt="Smartphone displaying VideoBelajar platform"
            />
        </div>
    );
};

export default LandingPage