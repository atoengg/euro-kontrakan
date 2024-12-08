"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { noDataImg } from "@/image";
import { CarouselMomentProps } from "@/types";
import { useState } from "react";
import { BsX } from "react-icons/bs";

export const CarouselMoment = ({ images }: CarouselMomentProps) => {

    const [selectedImg, setSelectedImg] = useState(null)
    const [openImg, setOpenImg] = useState(false)

    const handleImgClick = (imgUrl) => {
        setSelectedImg(imgUrl)
        setOpenImg(true)
    }

    const handleCloseImg = () => {
        setOpenImg(false)
        setSelectedImg(null)
    }

    const settings = {
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "50px",
                    slidesToShow: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "70px",
                    slidesToShow: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <>
            <div className="">
                {images.length > 0 ? (
                    <Slider {...settings}>
                        {images.map((imageUrl, index) => (
                            <div key={index} className="pr-4 rounded-xl">
                                <Image
                                    src={imageUrl}
                                    alt={`image-${index}`}
                                    width={500}
                                    height={450}
                                    onClick={() => handleImgClick(imageUrl)}
                                    className="h-[300px] object-cover w-full rounded-xl cursor-pointer"
                                />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <img src={noDataImg.src} alt="no-data" className="w-52 h-52" />
                        <p className="font-semibold text-lg">Belum ada foto yang di upload</p>
                    </div>
                )}

            </div>


            {selectedImg && (
                <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-black bg-opacity-50 flex items-center justify-center">
                    <img
                        src={selectedImg}
                        alt="euro-moment"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block lg:max-w-3xl lg:max-h-[95%] object-contain rounded-md" />

                    <button className="absolute top-2 right-2 text-white active:text-[#030712] hover:bg-[#9ca3af] rounded-md" onClick={() => handleCloseImg()}>
                        <BsX size={40} />
                    </button>
                </div>
            )}
        </>

    );
};
