"use client"

import { Navbar_item } from "@/constants/navbar"
import { avatar, euroLogo } from "@/image"
import { ButtonIconRight } from "../elements/button/ButtonIconRight"
import { BsBoxArrowInRight, BsFilterRight, BsPersonFill, BsX } from "react-icons/bs"
import { Avatar } from "flowbite-react"
import { useState } from "react"
import { ModalFormLogin } from "./modal/ModalFormLogin"
import { useAuth } from "@/context/AuthContext"
import { ModalLogout } from "./modal/ModalLogout"
import styles from '../../styles/responsive.module.css'
import Link from "next/link"

export const Navbar = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModalLogout, setOpenModalLogout] = useState(false);
    const [openNav, setOpenNav] = useState(false)

    const { user } = useAuth()

    const handleNav = () => {
        setOpenNav(!openNav)
    }

    const handleScroll = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <>
            <header className="bg-transparent top-0 left-0 w-full z-[10] absolute">
                <nav className="container mx-auto py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={euroLogo.src} alt="logo" className="w-12 h-12 mr-6" />
                        <div className={styles.nav__item}>
                            <ul className="flex items-center gap-6">
                                {
                                    Navbar_item?.map((item, index) => (
                                        <li key={index}>
                                            <Link href={`#${item.href}`} scroll={false} onClick={() => handleScroll(item.href)}>
                                                <p className="font-light text-[16px] font-neueMontreal text-secondary-950 transition-all duration-200 ease-in-out hover:underline">{item.label}</p>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.nav__btn} flex items-center gap-4`}>
                        {user ? (
                            <>
                                <div className="flex items-center gap-2">
                                    <Avatar img={avatar.src} rounded bordered />
                                    <p className="text-secondary-950 text-[16px] font-poppins">Hello Brader</p>
                                </div>
                                <ButtonIconRight
                                    label="Logout"
                                    color="failure"
                                    icon={<BsBoxArrowInRight className="ml-2 h-5 w-5" />}
                                    onClick={() => setOpenModalLogout(true)} />
                            </>
                        ) : (

                            <ButtonIconRight
                                label="Login"
                                color="success"
                                icon={<BsPersonFill className="ml-2 h-5 w-5" />}
                                onClick={() => setOpenModal(true)} />
                        )}
                    </div>

                    <div className="sm:hidden cursor-pointer pl-24" onClick={handleNav}>
                        <BsFilterRight size={35} />
                    </div>

                    <div className={openNav ? "fixed left-0 top-0 w-[60%] sm:hidden h-screen background-modal p-8 ease-in duration-500 z-[9999]" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                        <div className="flex w-full items-center justify-end">
                            <div className="cursor-pointer" onClick={handleNav}>
                                <BsX size={35} />
                            </div>
                        </div>

                        <div className="my-4">
                            <ul className="flex flex-col gap-6">
                                {
                                    Navbar_item?.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href} className="font-normal text-[16px] font-poppins text-secondary-950 transition-all duration-200 ease-in-out hover:underline">{item.label}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {user ? (
                            <>
                                <div className={`flex flex-col gap-4`}>
                                    <div className="flex items-center gap-2">
                                        <Avatar img={avatar.src} rounded bordered />
                                        <p className="text-secondary-950 text-[16px] font-poppins">Hello Brader</p>
                                    </div>
                                    <ButtonIconRight
                                        label="Logout"
                                        color="failure"
                                        icon={<BsBoxArrowInRight className="ml-2 h-5 w-5" />}
                                        onClick={() => setOpenModalLogout(true)} />
                                </div>
                            </>
                        ) : (
                            <ButtonIconRight
                                label="Login"
                                color="success"
                                icon={<BsPersonFill className="ml-2 h-5 w-5" />}
                                onClick={() => setOpenModal(true)} />
                        )}


                    </div>
                </nav>
            </header>

            <ModalFormLogin open={openModal} onClose={() => setOpenModal(false)} />

            <ModalLogout open={openModalLogout} onClose={() => setOpenModalLogout(false)} />
        </>
    )
}
