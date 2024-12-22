"use client"
import React, { useEffect, useRef, useState } from 'react'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'

export const ButtonPlayMusic = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)


    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                setIsPlaying(false)
            }
        }
    }, [])



    const toggleAudio = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }
    return (
        <>
            <div className="fixed top-[82%] right-6 flex items-center justify-center rounded-full p-4 bg-primary-400 cursor-pointer z-50"
                onClick={toggleAudio}>
                {isPlaying ? (
                    <BsPauseFill color="#0f1f30" size={25} />
                ) : (
                    <BsPlayFill color="#0f1f30" size={25} />
                )}
            </div>

            <audio ref={audioRef} src="nina.mp3" preload="auto" />
        </>
    )
}
