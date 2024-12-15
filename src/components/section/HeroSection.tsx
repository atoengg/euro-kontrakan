"use client"

import { galeriTest1, galeriTest2, galeriTest3, handShake } from "@/image"
import { ButtonOutline } from "../elements/button/ButtonOutline"
import { Buttons } from "../elements/button/Buttons"
import { useEffect, useState } from "react";
import { ModalTermOfService } from "../fragments/ModalTermOfService";
import styles from '../../styles/responsive.module.css'
import AOS from 'aos'

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
                            <p className="text-secondary-950 font-bold text-xl lg:text-[22.652px] flex items-center">Welcome to
                                <span>
                                    <img src={handShake.src} alt="" className="w-8 h-8" />
                                </span>,
                            </p>
                            <h1 className="text-2xl lg:text-[36.4px] font-bold text-secondary-950">Euro Kontrakan.</h1>
                            <p
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="2200"
                                className="text-[12px] lg:text-sm text-[#1d3e5d] font-semibold my-3">
                                Cari momen kenanganmu bersama Euro kontrakan
                            </p>

                            <div
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="2200"
                                className="flex flex-row gap-4 mt-2">
                                <Buttons label="Terms of Service" type="button" color="success" onClick={() => setOpenModal(true)} />
                                <ButtonOutline label="Jelajahi" className="bg-transparent border border-solid rounded-full px-4 py-2 text-white border-green-700 transition-all duration-200 ease-in-out hover:bg-green-800" />
                            </div>
                        </div>
                        <div
                            className={`${styles.hero__img} grid grid-cols-1 lg:grid-cols-3 gap-3 w-6/12`}>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1800"
                                data-aos-delay="2800"
                                className={`${styles.wrapper__img} lg:relative`}>
                                <img
                                    src={galeriTest1.src}
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
                                    src={galeriTest2.src}
                                    alt=""
                                    className="h-[350px] object-cover w-full rounded-3xl"
                                />
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-duration="2500"
                                data-aos-delay="2800"
                                className={`${styles.wrapper__img} lg:relative`}>
                                <img
                                    src={galeriTest3.src}
                                    alt=""
                                    className="h-[350px] object-cover w-full rounded-3xl lg:absolute lg:top-8"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <ModalTermOfService open={openModal} onClose={() => setOpenModal(false)} />
        </>
    )
}
