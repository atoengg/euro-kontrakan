"use client"

import { CarouselMoment } from "../fragments/CarouselMoment"
import { useEffect, useState } from "react"
import { UploadImage } from "../fragments/UploadImage"

export const MomentSection = () => {

    const [images, setImages] = useState<string[]>([])

    const onUploadComplete = (uploadedImageUrl: string) => {
        // You can update the state here based on the uploaded image URL
        console.log('Uploaded image URL:', uploadedImageUrl);
        setImages((prevImages) => [...prevImages, uploadedImageUrl]);
    };

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
            <section className="rounded-t-[4rem] border-t-8 border-secondary-950 bg-white pb-2 relative -mt-4 z-[4]" id="galeri">
                <div className="text-center py-14">
                    <h2
                        className="font-semibold text-[26px] lg:text-4xl font-poppins">Euro Kontrakan Momen</h2>
                </div>
                <CarouselMoment images={images} />
                <div
                    className="flex flex-row justify-center gap-4 my-8">
                    <UploadImage onUploadComplete={onUploadComplete}/>
                </div>
            </section>
        </>
    )
}
