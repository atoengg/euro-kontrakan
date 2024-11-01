"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const CarouselMoment = () => {


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
    }

    return (
        <>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
                
            </div>
            {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
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
            </div> */}
        </>
    )
}
