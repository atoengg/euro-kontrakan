

export const HeroSection = () => {
    return (
        <>
            <section className="bg-center bg-cover" id="home" style={{backgroundImage: "url('/banner-hero.jpg')"}}>
                <div className="h-screen bg-gradient-to-b from-transparent to-secondary-950 ">
                    <div className="flex flex-col justify-center items-center pt-52">
                        <p className="text-white font-semibold font-poppins text-xl">Hi, Bolo-Bolo🙌</p>
                        <h1 className="uppercase text-8xl font-bold font-poppins bg-gradient-to-r  from-green-500 to-[#AFE46C] text-transparent bg-clip-text">Welcome</h1>
                        <p className="text-white font-semibold font-poppins text-sm tracking-[0.5rem]">TO EURO KONTRAKAN</p>
                    </div>
                </div>
            </section>
        </>
    )
}
