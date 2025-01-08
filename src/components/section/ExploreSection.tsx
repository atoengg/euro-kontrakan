"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import styles from '../../styles/responsive.module.css'
import { AiSection } from "./AiSection"
import Image from "next/image"
import { imgChatbot } from "@/image"


export const ExploreSection = () => {
    const controls = useAnimation() // Control animation progress
    const sectionRef = useRef<HTMLDivElement>(null) // Ref untuk mengawasi section
    const [hasAnimated, setHasAnimated] = useState(false)

    const sentence =
        "Euro kontrakan merupakan hunian kecil kami yang nyaman dan aman selama kami menempuh pendidikan S1 di Universitas Trunojoyo Madura. Cari momen kenanganmu bersama kami!, lalu upload foto dan ceritamu disini."

    // Split sentence into words
    const words = sentence.split(" ")

    // Variants for animating individual words
    const wordAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: "easeOut",
            },
        }),
    }

    // Use Intersection Observer to trigger animations on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    controls.start("visible") // Start animation
                    setHasAnimated(true) // Prevent retriggering
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        )

        if (sectionRef.current) observer.observe(sectionRef.current)

        return () => {
            if (sectionRef.current) observer.disconnect()
        }
    }, [controls, hasAnimated])

    return (
        <section
            ref={sectionRef}
            className="bg-secondary-950 bg-[url('/Grid.jpg')] p-10 lg:p-20"
        >
            <div className="w-full h-full bg-cover bg-center bg-no-repeat">
                <motion.h1
                    initial="hidden"
                    animate={controls} // Controlled by Framer Motion
                    variants={{
                        hidden: {},
                        visible: {}, // No global animation; animations handled at word level
                    }}
                    className={`${styles.heading__text} font-neueMontreal text-white text-left text-6xl tracking-tight`}
                >
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            variants={wordAnimation}
                            custom={i}
                            className="inline-block mr-2"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>

        <div className={`w-full flex ${styles.wrapper__ai} gap-5 pt-10 mt-20 border-t border-secondary-900`}>
                <div className={`${styles.content__ai} w-1/2`}>
                    <h1 className={`${styles.heading__ai} text-5xl text-white`}>Coba tanya Euro AI:</h1>
                    <AiSection />
                </div>
                <div className={`${styles.content__ai} w-1/2 h-[70vh]`}>
                    <Image src={imgChatbot} alt="img-bot" className="rounded-3xl" />
                </div>
            </div>
        </section>
    )
}
