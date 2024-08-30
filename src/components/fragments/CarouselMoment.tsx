import { galeriTest1, galeriTest2, galeriTest3 } from "@/image"
import { Carousel } from "flowbite-react"

export const CarouselMoment = () => {
  return (
    <>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
                <Carousel>
                    <div className="grid grid-cols-3 gap-4 pr-4 rounded-xl">
                        <img src={galeriTest1.src} alt="galeri-img" className="object-cover w-full h-full rounded-xl"/>
                        <img src={galeriTest2.src} alt="galeri-img" className="object-cover w-full h-full rounded-xl"/>
                        <img src={galeriTest3.src} alt="galeri-img" className="object-cover w-full h-full rounded-xl"/>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pr-4">
                        <img src={galeriTest1.src} alt="galeri-img" className="object-cover w-full h-full rounded-xl"/>
                        <img src={galeriTest2.src} alt="galeri-img" className="object-cover w-full h-full rounded-xl"/>
                        <img src={galeriTest3.src} alt="galeri-img" className="object-cover w-full h-full rounded-xl"/>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pr-4 ">
                        <img src={galeriTest1.src} alt="galeri-img" className="object-cover w-full h-full rounded-xl"/>
                        <img src={galeriTest2.src} alt="galeri-img" className="object-cover w-full h-full rounded-xl"/>
                        <img src={galeriTest3.src} alt="galeri-img" className="object-cover w-full h-full rounded-xl"/>
                    </div>
                </Carousel>
            </div>
    </>
  )
}
