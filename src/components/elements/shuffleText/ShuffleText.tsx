"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ShuffleText = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const originalText = "Euro Kontrakan";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    useEffect(() => {
        if (textRef.current) {
            const element = textRef.current;
            const textArray = originalText.split("");
            const totalShuffles = 20; // Total jumlah animasi acak per huruf
            let currentShuffle = 0;

            const shuffleInterval = setInterval(() => {
                const shuffledText = textArray.map((letter, idx) => {
                    // Perlihatkan huruf asli setelah shuffle selesai untuk karakter tertentu
                    if (currentShuffle / textArray.length > idx) {
                        return letter;
                    }
                    return characters.charAt(Math.floor(Math.random() * characters.length));
                });

                element.textContent = shuffledText.join("");

                // Perbarui state shuffle
                currentShuffle++;
                if (currentShuffle > totalShuffles) {
                    clearInterval(shuffleInterval);
                    element.textContent = originalText; // Pastikan teks akhir muncul
                    // Fade-in animasi untuk teks akhir
                    gsap.fromTo(element, {opacity: 1}, { opacity: 1, duration: 1 });
                }
            }, 50); // Interval penggantian huruf

            return () => clearInterval(shuffleInterval); // Hapus interval jika komponen dibongkar
        }
    }, []);

    return (
        <div className="">
            <div ref={textRef} />
        </div>
    );
};

export default ShuffleText;
