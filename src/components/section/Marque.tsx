"use client"

import { motion } from 'framer-motion'

export const Marque = () => {
    return (
        <>
            <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
                <div className="text border-t-2 border-b-2 border-zinc-300 gap-6 overflow-hidden flex whitespace-nowrap">
                    <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ ease: 'linear', repeat: Infinity, duration: 15 }} className="text-[18vw] text-white uppercase pt-10 leading-none font-founders font-semibold">we are euro kontrakan</motion.h1>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ ease: 'linear', repeat: Infinity, duration: 15 }} className="text-[18vw] text-white uppercase pt-10 leading-none font-founders font-semibold">we are euro kontrakan</motion.h1>
                </div>
            </div>
        </>
    )
}
