const LoginPage = () => {
    return (
        <>
            <nav className="bg-white px-[120px] py-[12px]">
                <img src="./img/loginn.svg" alt="" />
            </nav>
            <div className="bg-[#FFFDF3] flex justify-center items-center h-screen py-[64px] px-[20px]">
                <div
                    className="border-2 border-[#F1F1F1] p-[40px] grid gap-[36px] text-black bg-[#ffffff] bg-opacity-80 w-[530px] origin-center rounded-xl">
                    <div className="">
                        <h2 className="text-center font-semibold text-[32px]">Masuk ke Akun</h2>
                        <p className="text-center text-[16px]">Yuk, Lanjutin belajarmu di vidio belajar.</p>
                    </div>

                    <div className="grid">
                        <label for="text-[16]">E-mail<span className="text-red-500"> *</span></label>
                        <div
                            className="py-[14px] px-[20px] rounded-full bg-transparent flex justify-between border-white border-[1px] border-opacity-25 outline-none focus-within:border-opacity-60">
                            <div className="flex">
                                <input className="bg-transparent outline-none" type="text" placeholder="Masukan E-mail" />
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <label for="">Password <span className="text-red-500"> *</span></label>
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
                        <div
                            className="mb-4 py-[14px] px-[20px] text-center rounded-lg bg-[#3ECF4C] text-white font-bold  border-[#3ECF4C] border-[1px] border-opacity-25 outline-none focus:border-opacity-60">
                            <Link href="/home">Masuk</Link>
                        </div>
                        <div
                            className="mb-4 py-[14px] px-[20px] text-center rounded-lg bg-[#E2FCD9] font-bold text-[#3ECF4C]  border-[#E2FCD9] border-[1px] border-opacity-25 outline-none focus:border-opacity-60">
                            <Link href="/regist">Daftar</Link>
                        </div>

                        <p className="text-center">atau</p>
                        <div
                            className="py-[14px] font-bold text-[#4A505C] px-[20px]  rounded-full bg-transparent flex justify-center gap-4 border-[#F1F1F1] border-[2px] border-opacity-25 outline-none focus:border-opacity-60">
                            <img src="./img/gmail.svg" alt="" />
                            <a href="">Masuk dengan google</a>
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default LoginPage;