import React from 'react'
import { cardEuroTeamProps } from '@/types'
import { BsGeoAltFill } from 'react-icons/bs'
import Image from 'next/image'

export const CardEuroTeam = ({ avatar, namaLengkap, namaSamaran, asal }: cardEuroTeamProps) => {
    return (
        <>
            <div className="w-[325px] bg-secondary-700 space-x-5 rounded-xl p-4 shadow-shadowCard hover:border-solid hover:border-primary-600 hover:border">
                <div className="flex items-center gap-4">
                    {avatar && (
                        <Image
                            src={avatar}
                            alt={namaLengkap || "Avatar"}
                            width={56}
                            height={56}
                            className="w-14 h-14 rounded-full object-cover grayscale"
                        />
                    )}
                    <div className="flex justify-between flex-col gap-3">
                        <div className="flex flex-col">
                            <h4 className="font-bold text-white">{namaLengkap}</h4>
                            <p className="font-normal text-sm text-white">{namaSamaran}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsGeoAltFill className="text-gray-400 w-3 h-3" />
                            <p className="text-sm text-gray-400">{asal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
