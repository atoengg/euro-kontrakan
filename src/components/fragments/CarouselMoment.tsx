"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { noDataImg } from "@/image";
import { CarouselMomentProps } from "@/types";

export const CarouselMoment = ({ images }: CarouselMomentProps) => {
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
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
            {images.length > 0 ? (
                <Slider {...settings}>
                    {images.map((imageUrl, index) => (
                        <div key={index} className="pr-4 rounded-xl">
                            <Image
                                src={imageUrl}
                                alt={`image-${index}`}
                                width={500}
                                height={450}
                                className="object-cover w-full h-full rounded-xl"
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
    );
};
