"use client"

import { noDataImg } from "@/image"
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage"
import { Carousel } from "flowbite-react"
import { useEffect, useState } from "react"

export const CarouselMoment = ({ image }: { image: string[] }) => {
    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        fetchImages()
    }, [])

    // fungsi untuk mengambil gambar dari firebase
    const fetchImages = async () => {
        try {
            const storage = getStorage() // Mendapatkan referensi Firebase Storage
            const storageRef = ref(storage, "images/") // Menggunakan ref dengan storage

            const imagesList = await listAll(storageRef) // Menggunakan listAll untuk mendapatkan daftar gambar

            const imageURLs = await Promise.all(
                imagesList.items.map(async (item) => {
                    const url = await getDownloadURL(item) // Menggunakan getDownloadURL untuk mendapatkan URL gambar
                    return url
                }),
            )

            setImages(imageURLs)

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
                <Carousel>

                    {images.length > 0 ? (
                        <div className="grid grid-cols-3 gap-4 pr-4 rounded-xl">
                            {images.map((imageUrl, index) => (
                                <img src={imageUrl} key={index} alt="galeri-img" className="object-cover w-full h-full rounded-xl" />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <img src={noDataImg.src} alt="" className="w-52 h-52" />
                            <p className="font-semibold text-lg">Belum ada foto yang di upload</p>
                        </div>
                    )}
                </Carousel>
            </div>
        </>
    )
}
