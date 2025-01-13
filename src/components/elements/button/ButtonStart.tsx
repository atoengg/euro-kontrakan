"use client"

import { BsArrowRight } from "react-icons/bs"

export const ButtonStart = () => {
    return (
        <>
            <div className="group flex items-center gap-2 cursor-pointer">
                <div className="w-full px-5 py-2 text-center border rounded-full text-[12px] lg:text-sm uppercase group-hover:bg-secondary-950 group-hover:border-secondary-950 group-hover:text-white transition-all duration-200 ease-in-out">
                    mulai jelajahi
                </div>
                <div className="p-2 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-secondary-950 group-hover:border-secondary-950 group-hover:text-white transition-all duration-200 ease-in-out">
                    <span className="rotate-90">
                        <BsArrowRight size={18} />
                    </span>
                </div>
            </div>
        </>
    )
}
