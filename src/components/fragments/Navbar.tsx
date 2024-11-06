import { Navbar_item } from "@/constants/navbar"
import { avatar, euroLogo } from "@/image"
import { ButtonIconRight } from "../elements/button/ButtonIconRight"
import { BsArrowRight } from "react-icons/bs"
import { Avatar } from "flowbite-react"

export const Navbar = () => {
    return (
        <>
            <header className="bg-transparent top-0 left-0 w-full z-[999] absolute">
                <nav className="container mx-auto py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={euroLogo.src} alt="logo" className="w-12 h-12 mr-6" />
                        <div className="">
                            <ul className="flex items-center gap-6">
                                {
                                    Navbar_item?.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href} className="font-normal text-[16px] font-poppins text-secondary-950 transition-all duration-200 ease-in-out hover:underline">{item.label}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Avatar img={avatar.src} rounded bordered/>
                            <p className="text-secondary-950 text-[16px] font-poppins">Hello Brader</p>
                        </div>
                        <ButtonIconRight label="Jelajahi" icon={<BsArrowRight className="ml-2 h-5 w-5"/>}/>
                    </div>
                </nav>
            </header>
        </>
    )
}
