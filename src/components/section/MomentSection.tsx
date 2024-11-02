"use client"

import { CarouselMoment } from "../fragments/CarouselMoment"
import { useEffect, useState } from "react"
import { UploadImage } from "../fragments/UploadImage"

export const MomentSection = () => {

    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('api/images');
                const data = await response.json();
                const imageUrls = data.map((img: any) => img.url);
                setImages(imageUrls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <>
            <section className="rounded-t-[4rem] border-t-8 border-secondary-950 bg-white pb-2 relative -mt-4 z-10">
                <div className="text-center py-14">
                    <h2 className="font-semibold text-4xl font-poppins">Euro Kontrakan momen</h2>
                </div>
                <div className="">
                    <CarouselMoment images={images} />
                </div>
                <div className="flex flex-row justify-center gap-4 my-8">
                    <UploadImage />
                </div>
            </section>
        </>
    )
}
