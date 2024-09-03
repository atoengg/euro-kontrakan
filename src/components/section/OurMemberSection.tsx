import { iconCircle, lineHorizontal, lineHorizontalPendek, lineKananKiri, lineVertikal, lineVertikal2, lineVertikal3 } from "@/image"
import { BorderOurMember } from "../fragments/BorderOurMember"

export const OurMemberSection = () => {
    return (
        <>
            <section className="py-10">
                <div className="text-center">
                    <h2 className="font-semibold text-4xl font-poppins text-white">Manusia Euro Kontrakan</h2>
                </div>
                <div className="mt-6 z-1 relative h-auto lg:overflow-hidden">
                    <BorderOurMember nama="Dimas Bagus A. A." width="150px" />
                    <div className="flex flex-col justify-center items-center">
                        <img src={lineVertikal.src} alt="" />

                        <div className="lg:flex">
                            <img src={lineHorizontal.src} alt="" className="relative top-[-1rem]" />
                            <img src={lineHorizontal.src} alt="" className="relative top-[-1rem]" />
                            <img src={lineHorizontal.src} alt="" className="relative top-[-1rem]" />
                        </div>

                        <div
                            className="flex gap-[10.6rem] lg:gap-[35.6rem] relative top-[-1.93rem]"
                        >
                            <img src={lineKananKiri.src} alt="" />
                            <img src={lineKananKiri.src} alt="" />
                        </div>

                        <div
                            className="flex gap-[10.6rem] lg:gap-[35.6rem] relative top-[-3rem]"
                        >
                            <img src={iconCircle.src} alt="" />
                            <img src={iconCircle.src} alt="" />
                        </div>

                        <div className="flex relative top-[-5.5rem]">
                            <div className="relative left-[0.1rem]">
                                <BorderOurMember nama="Ahmad Dhiki A." width="150px" />
                            </div>
                            <img src={lineHorizontalPendek.src} className="relative top-3" />
                            <img src={lineHorizontalPendek.src} className="relative top-3 hidden lg:flex" />
                            <img src={lineHorizontalPendek.src} className="relative top-3 hidden lg:flex" />
                            <img src={lineHorizontalPendek.src} className="relative top-3 hidden lg:flex" />
                            <img src={lineHorizontalPendek.src} className="relative top-3 hidden lg:flex" />
                            <div className="relative right-[0.1rem]">
                                <BorderOurMember nama="Reza Arimatul A." width="150px" />
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="120" className="">
                            <img src={lineVertikal2.src} alt="" className="relative top-[-6.7rem]" />
                        </div>

                        <div className="lg:flex">
                            <img src={lineHorizontal.src} alt="" className="relative top-[-7.6rem] " />
                            <img src={lineHorizontal.src} alt="" className="relative top-[-7.6rem] hidden lg:flex" />
                            <img src={lineHorizontal.src} alt="" className="relative top-[-7.6rem] hidden lg:flex" />
                        </div>

                        <div
                            className="flex gap-[10.6rem] relative top-[-8.5rem] lg:gap-[35.6rem]"
                        >
                            <img src={lineKananKiri.src} alt="" />
                            <img src={lineKananKiri.src} alt="" />
                        </div>

                        <div
                            className="flex gap-[10.6rem] lg:gap-[35.6rem] relative top-[-9.5rem]"
                        >
                            <img src={iconCircle.src} alt="" />
                            <img src={iconCircle.src} alt="" />
                        </div>

                        <div
                            className="flex gap-[5rem] relative top-[-12rem] lg:gap-[30rem]"
                        >
                            <div className="flex-col">
                                <BorderOurMember nama="M. Riyo Ubaidillah" width="150px" />
                            </div>

                            <div className="flex-col">
                                <BorderOurMember nama="Bagas Rama S." width="120px" />
                            </div>
                        </div>

                        <div className="relative top-[-16rem]">
                            <img src={lineVertikal3.src} alt="" />
                        </div>

                        <div className="lg:flex">
                            <img src={lineHorizontal.src} alt="" className="relative top-[-16.9rem] " />
                            <img src={lineHorizontal.src} alt="" className="relative top-[-16.9rem] hidden lg:flex" />
                            <img src={lineHorizontal.src} alt="" className="relative top-[-16.9rem] hidden lg:flex" />
                            <img src={lineHorizontal.src} alt="" className="relative top-[-16.9rem] hidden lg:flex" />
                        </div>

                        <div
                            className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-17.8rem]">
                            <img src={lineKananKiri.src} alt="" />
                            <img src={lineKananKiri.src} alt="" />
                            <img src={lineKananKiri.src} alt="" className="hidden lg:flex" />
                        </div>

                        <div
                            className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-18.8rem]"
                        >
                            <img src={iconCircle.src} alt="" />
                            <img src={iconCircle.src} alt="" />
                            <img src={iconCircle.src} alt="" />
                        </div>

                        <div
                            className=" flex gap-[5rem] relative top-[-21.2rem] lg:gap-[17.5rem]"
                        >
                            <div className="flex-col">
                                <BorderOurMember nama="Azis Al Rozak" width="120px" />

                            </div>

                            <div className="flex-col">
                                <BorderOurMember nama="Muhammad Firdaus" width="150px" />

                            </div>

                            <div className="flex-col hidden lg:flex">
                                <BorderOurMember nama="Urukhul Nadlif Z." width="125px" />
                            </div>
                        </div>

                        <div className="lg:flex">
                            <img
                                src={lineHorizontal.src}
                                alt=""
                                className="relative top-[-16.9rem] "
                                data-aos="fade-up"
                                data-aos-duration="600"
                            />
                            <img
                                src={lineHorizontal.src}
                                alt=""
                                className="relative top-[-16.9rem] hidden lg:flex"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            />

                            <img
                                src={lineHorizontal.src}
                                alt=""
                                className="relative top-[-16.9rem] hidden lg:flex "
                                data-aos="fade-up"
                                data-aos-duration="600"
                            />
                        </div>
                        <div
                            className="flex gap-[10.6rem] lg:gap-[35.6rem] relative top-[-17.85rem]"
                            data-aos="fade-up"
                            data-aos-duration="800">
                            <img src={lineKananKiri.src} alt="" />
                            <img src={lineKananKiri.src} alt="" />
                        </div>
                        <div
                            className="flex gap-[10.6rem] relative top-[-18.6rem] lg:gap-[35.6rem]"
                            data-aos="fade-up"
                            data-aos-duration="1000">
                            <img src={iconCircle.src} alt="" />
                            <img src={iconCircle.src} alt="" />
                        </div>
                        <div
                            className=" flex gap-[5rem] relative top-[-21rem] lg:gap-[29.7rem]"
                            data-aos="fade-up"
                            data-aos-duration="1100">
                            <div className="flex-col">
                                <BorderOurMember nama="Agung Jefrianto" width="150px" />
                            </div>

                            <div className="flex-col">
                                <BorderOurMember nama="Rivki Maulana Y." width="150px" />
                            </div>
                        </div>
                        <div className=" absolute bottom-[15%] lg:bottom-[20%] " data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex justify-center items-center flex-col">
                                <img src={lineVertikal3.src} alt="" className="" />
                                <img src={lineVertikal.src} alt="" className="" />
                                <img src={iconCircle.src} alt="" className="relative top-[-0.7rem]" />
                                <div className="relative bottom-12">
                                    <BorderOurMember nama="M. Irham Al K." width="120px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
