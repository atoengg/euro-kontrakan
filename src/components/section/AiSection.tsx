"use client"

import React, { useState } from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { AnimatedQuestions } from '../elements/animatedQuis/AnimatedQuestions'

export const AiSection = () => {

    const [isInputFocused, setIsInputFocused] = useState(false)

    const handleFocus = () => setIsInputFocused(true)
    const handleBlur = () => setIsInputFocused(false)
    
    return (
        <>
            <div className="container mx-auto flex flex-col gap-6 py-20 min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="2200"
                        className="font-semibold text-white text-center text-[26px] lg:text-4xl font-poppins mb-4">Coba Tanya Euro AI</h2>
                    <form action="" className='w-full relative max-w-xl mx-auto bg-secondary-900 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200"'>
                        <input
                            type="text"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className='w-full relative text-sm sm:text-base z-50 border-none text-white bg-transparent h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20'
                            name=""
                            id="" />
                        <button type='submit' className='absolute right-2 top-1/2 z-50 -translate-y-1/2 rounded-full disabled:bg-gray-100 text-white transition duration-200 flex items-center justify-center'>
                            <BsArrowRightCircleFill size={25} />
                        </button>

                        <AnimatedQuestions isHidden={isInputFocused}/>
                    </form>
                </div>
            </div>
        </>
    )
}
