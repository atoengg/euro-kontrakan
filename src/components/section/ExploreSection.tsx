"use client"

import { useEffect } from "react";
import { Buttons } from "../elements/button/Buttons"
import AOS from 'aos'


export const ExploreSection = () => {

    useEffect(() => {
        AOS.init({
            once: true,
        });
    })

    return (
        <>
            <section className="bg-secondary-950 text-center py-28">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="2200"
                        className="font-bold text-white text-[22px] lg:text-[26px] font-poppins">Omong-omong soal korek,<br />Iki Euro kontrakan rek!</h2>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1800"
                        data-aos-delay="2800"
                        className="">
                        <Buttons color={"success"} className="font-poppins" label={"Jelajahi"} />
                    </div>
                </div>
            </section>
        </>
    )
}
