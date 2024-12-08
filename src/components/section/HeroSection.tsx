"use client"

import { handShake, heroImg } from "@/image"
import { ButtonOutline } from "../elements/button/ButtonOutline"
import { Buttons } from "../elements/button/Buttons"
import { useState } from "react";
import { ModalTermOfService } from "../fragments/ModalTermOfService";


export const HeroSection = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <section id="home" className="min-h-screen bg-gradient-to-b from-primary-200 via-primary-300 to-secondary-950">
                <div className="container mx-auto">
                    <div className="w-full flex flex-row items-center justify-between pt-28">
                        <div className="w-8/12 flex flex-col">
                            <p className="text-secondary-950 font-bold text-5xl flex items-center">Welcome to
                                <span>
                                    <img src={handShake.src} alt="" className="w-12 h-12" />
                                </span>,
                            </p>
                            <h1 className="text-6xl font-bold text-secondary-950">Euro Kontrakan.</h1>
                            <p className="text-sm text-[#1d3e5d] my-4 leading-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa magnam ipsam voluptatum. Dignissimos ea magnam reprehenderit inventore, repellendus fugiat doloribus quasi porro eaque similique numquam? Vel fuga nam voluptatum ratione!</p>

                            <div className="flex flex-row gap-4">
                                <Buttons label="Terms of Service" type="button" color="success" onClick={() => setOpenModal(true)} />
                                <ButtonOutline label="Jelajahi" className="bg-transparent border border-solid rounded-full px-4 py-2 text-white border-green-700 transition-all duration-200 ease-in-out hover:bg-green-800" />
                            </div>
                        </div>
                        <div className="w-5/12 flex justify-center">
                            <img src={heroImg.src} alt="hero-img" className="w-8/12 h-1/2 skew-y-3 drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <ModalTermOfService open={openModal} onClose={() => setOpenModal(false)}/>
        </>
    )
}
