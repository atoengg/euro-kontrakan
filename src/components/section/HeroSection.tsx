"use client"

import { handShake, imgHero1, imgHero2, imgHero3 } from "@/image"
import { useEffect, useState } from "react";
import { ModalTermOfService } from "../fragments/modal/ModalTermOfService";
import styles from '../../styles/responsive.module.css'
import AOS from 'aos'
import { Buttons } from "../elements/button/Buttons";
import ShuffleText from "../elements/shuffleText/ShuffleText";
import { ButtonStart } from "../elements/button/ButtonStart";

export const HeroSection = () => {

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        AOS.init({
            once: true,
        });
    })

    return (
        <>
            <section id="home" className="min-h-screen bg-gradient-to-b from-primary-200 via-primary-300 to-secondary-950">
                <div className="container mx-auto">
                    <div className={`${styles.wrapper__hero} w-full flex justify-between pt-24 lg:pt-32 flex-row items-center`}>
                        <div className={` ${styles.hero} w-5/12 flex flex-col`}>
                            <h1 className="text-secondary-950 font-foundersGrotesk -mb-4 tracking-tight font-bold text-3xl lg:text-4xl flex items-center">Welcome to
                                <span>
                                    <img src={handShake.src} alt="" className="w-8 h-8" />
                                </span>,
                            </h1>
                            <h1 className="text-5xl font-foundersGrotesk leading-none tracking-tight lg:text-7xl font-bold text-secondary-950">
                                <ShuffleText />
                            </h1>
                            <p
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="2200"
                                className="text-[12px] lg:text-sm text-[#1d3e5d] font-poppins font-semibold my-3">
                                Cari momen kenanganmu bersama Euro kontrakan
                            </p>
                        </div>
                        <div
                            className={`${styles.hero__img} grid grid-cols-1 lg:grid-cols-3 gap-3 w-6/12`}>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1800"
                                data-aos-delay="2800"
                                className={`${styles.wrapper__img} lg:relative`}>
                                <img
                                    src={imgHero1.src}
                                    alt=""
                                    className="h-[350px] object-cover w-full rounded-3xl lg:absolute lg:top-8"
                                />
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                data-aos-delay="2800"
                                className={`${styles.wrapper__img} lg:relative`}>
                                <img
                                    src={imgHero2.src}
                                    alt=""
                                    className="h-[350px] object-cover w-full rounded-3xl"
                                />
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                data-aos-delay="2800"
                                className={`${styles.wrapper__img} lg:relative`}>
                                <img
                                    src={imgHero3.src}
                                    alt=""
                                    className="h-[350px] object-cover w-full rounded-3xl lg:absolute lg:top-8"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.start} mt-16 flex justify-between items-center py-4 font-neuemontreal text-white`}>
                        <p className="text-sm lg:text-md font-light tracking-tight leading-none">Ini semua tentang kami</p>
                        <Buttons label="Terms of Service" className="font-neueMontreal uppercase text-[11px] lg:text-sm" type="button" color="success" onClick={() => setOpenModal(true)} />
                        <ButtonStart/>
                    </div>
                </div>
            </section>

            <ModalTermOfService open={openModal} onClose={() => setOpenModal(false)} />
        </>
    )
}
