import React, { useEffect, useState } from 'react'

export const AnimatedQuestions = ({ isHidden }: { isHidden: boolean }) => {
    const questions = ['siapa shodiqin?', 'siapa wong gede?', 'siapa katol?', 'siapa ubek?', 'siapa bgst?', 'siapa cipung?', 'siapa mbah daus?', 'siapa goss?', 'siapa mbah agung?', 'siapa kareem?', 'siapa ucup?']
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (isHidden) return
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % questions.length)
        }, 3000) // Animasi berganti setiap 3 detik
        return () => clearInterval(interval)
    }, [isHidden, questions.length])


    return (
        <>
            <div className={`absolute inset-0 flex flex-col items-start rounded-full overflow-hidden h-full transition-opacity duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'}`}>
                {questions.map((question, index) => (
                    <p
                        key={index}
                        className={`absolute left-2 sm:left-12 text-gray-400 text-sm sm:text-base font-normal text-neutral-500 w-full transition-transform duration-700 ${index === activeIndex ? 'translate-y-3 opacity-100' : '-translate-y-full opacity-0'
                            }`}>
                        {question}
                    </p>
                ))}
            </div>
        </>
    )
}
