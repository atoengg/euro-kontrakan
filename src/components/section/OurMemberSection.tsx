"use client"

import { EuroTeam } from "@/constants/euroTeam"
import Marquee from "react-fast-marquee"
import { CardEuroTeam } from "../fragments/card/CardEuroTeam"
import AOS from 'aos'
import { useEffect } from "react"


export const OurMemberSection = () => {

    useEffect(() => {
        AOS.init({
            once: true,
        });
    })

    return (
        <>
            <section className="py-10">
                <div className="text-center">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="2200"
                        className="font-semibold text-[26px] lg:text-4xl font-poppins text-white mb-6">Manusia Euro Kontrakan</h2>
                </div>

                <Marquee autoFill pauseOnClick>
                    {EuroTeam?.slice(0, 4).map((item, index) => (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1800"
                            data-aos-delay="2800"
                            className="flex space-x-5 mr-6" key={index}>
                            <CardEuroTeam avatar={item.avatar} namaLengkap={item.namaLengkap} namaSamaran={item.namaSamaran} asal={item.asal} />
                        </div>
                    ))}
                </Marquee>

                <Marquee autoFill pauseOnClick direction="right">
                    {EuroTeam?.slice(4, 8).map((item, index) => (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="2800"
                            className="flex space-x-5 mr-6 my-8" key={index}>
                            <CardEuroTeam avatar={item.avatar} namaLengkap={item.namaLengkap} namaSamaran={item.namaSamaran} asal={item.asal} />
                        </div>
                    ))}
                </Marquee>

                <Marquee autoFill pauseOnClick>
                    {EuroTeam?.slice(8, 11).map((item, index) => (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="2500"
                            data-aos-delay="2800"
                            className="flex space-x-5 mr-6" key={index}>
                            <CardEuroTeam avatar={item.avatar} namaLengkap={item.namaLengkap} namaSamaran={item.namaSamaran} asal={item.asal} />
                        </div>
                    ))}
                </Marquee>

            </section>
        </>
    )
}
