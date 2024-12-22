"use client"

import { CarouselMoment } from "../fragments/CarouselMoment"
import { useEffect, useState } from "react"
import { UploadImage } from "../fragments/UploadImage"
import AOS from 'aos'


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

    useEffect(() => {
        AOS.init({
            once: true,
        });
    })

    return (
        <>
            <section className="rounded-t-[4rem] border-t-8 border-secondary-950 bg-white pb-2 relative -mt-4 z-[4]" id="galeri">
                <div className="text-center py-14">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="2200"
                        className="font-semibold text-[26px] lg:text-4xl font-poppins">Euro Kontrakan Momen</h2>
                </div>
                <CarouselMoment images={images} />
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="2800"
                    className="flex flex-row justify-center gap-4 my-8">
                    <UploadImage />
                </div>
            </section>
        </>
    )
}
