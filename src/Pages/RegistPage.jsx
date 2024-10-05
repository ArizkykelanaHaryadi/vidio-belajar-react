import KodeNegara from "@/Components/Elements/KodeNegara"
import { Link } from "react-router-dom";


const RegistPage = () => {
    return (
        <>
            <div className="bg-white px-[120px] py-[12px]">
                <img src="./img/loginn.svg" alt="" />
            </div>

            <div className="flex justify-center py-[64px] bg-[#FFFDF3] ">
                <div
                    className="border-2 border-[#F1F1F1]  p-[40px] grid gap-[36px] text-black bg-[#ffffff] bg-opacity-80 w-[530px] origin-center rounded-xl">
                    <div className="">
                        <h2 className="text-center font-semibold text-[32px]">Pendaftaran Akun </h2>
                        <p className="text-center text-[16px]">Yuk, Daftarkan Akunmu Sekarang Juga!.</p>
                    </div>

                    <div className="grid">
                        <label for="text-[16]">Nama <span className="text-red-500">*</span></label>
                        <div
                            className="py-[14px] px-[20px] rounded-full bg-transparent flex justify-between border-white border-[1px] border-opacity-25 outline-none focus-within:border-opacity-60">
                            <div className="flex">
                                <input className="bg-transparent outline-none" type="text" placeholder="Masukan E-mail" />
                            </div>
                        </div>
                    </div>

                    <div className="grid">
                        <label for="text-[16]">E-mail <span className="text-red-500">*</span></label>
                        <div
                            className="py-[14px] px-[20px] rounded-full bg-transparent flex justify-between border-white border-[1px] border-opacity-25 outline-none focus-within:border-opacity-60">
                            <div className="flex">
                                <input className="bg-transparent outline-none" type="text" placeholder="Masukan E-mail" />
                            </div>
                        </div>
                    </div>

                    <div >
                        <KodeNegara />
                    </div>

                    <div className="grid">
                        <label for="">Password</label>
                        <div
                            className="py-[14px] px-[20px] rounded-full bg-transparent flex justify-between border-white border-[1px] border-opacity-25 outline-none focus-within:border-opacity-60">
                            <div className="flex">
                                <input className="bg-transparent outline-none" type="password" placeholder="Masukan Password" />
                            </div>
                            <img src="./img/eye-off.svg" alt="" />
                        </div>

                        <div className="grid">
                            <label for="">Confirmasi Password</label>
                            <div
                                className="py-[14px] px-[20px] rounded-full bg-transparent flex justify-between border-white border-[1px] border-opacity-25 outline-none focus-within:border-opacity-60">
                                <div className="flex">
                                    <input className="bg-transparent outline-none" type="password" placeholder="Masukan Password" />
                                </div>
                                <img src="./img/eye-off.svg" alt="" />
                            </div>

                            <div className="text-right">
                                <a href="">Lupa Kata sandi</a>
                            </div>
                        </div>

                        <div className="">
                            <div className="mb-4 py-[14px] font-bold text-white px-[20px] text-center rounded-lg bg-[#3ECF4C] border-[#3ECF4C] border-[1px] border-opacity-25 outline-none focus:border-opacity-60">
                                <Link to="/login" className="text-white">
                                    Daftar
                                </Link>
                            </div>
                            <div className="mb-4 py-[14px] px-[20px] font-bold text-[#3ECF4C] text-center rounded-lg bg-[#E2FCD9] border-[#E2FCD9] border-[1px] border-opacity-25 outline-none focus:border-opacity-60">
                                <Link to="/home" className="text-[#3ECF4C]">
                                    Masuk
                                </Link>
                            </div>


                            <p className="text-center">atau</p>
                            <div
                                className="py-[14px] px-[20px] font-bold text-[#4A505C]  rounded-full bg-transparent flex justify-center gap-4 border-white border-[1px] border-opacity-25 outline-none focus:border-opacity-60">
                                <img src="./img/gmail.svg" alt="" />
                                <a href="">Masuk dengan google</a>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default RegistPage;