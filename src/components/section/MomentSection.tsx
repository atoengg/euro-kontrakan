import { BsArrowBarUp, BsArrowRight } from "react-icons/bs"
import { ButtonIconRight } from "../elements/button/ButtonIconRight"
import { ButtonUpload } from "../elements/button/ButtonUpload"
import { CarouselMoment } from "../fragments/CarouselMoment"

export const MomentSection = () => {
    return (
        <>
            <section className="rounded-t-[4rem] border-t-8 border-secondary-950 bg-white pb-2 relative -mt-4 z-10">
                <div className="text-center py-14">
                    <h2 className="font-semibold text-4xl font-poppins">Euro Kontrakan momen</h2>
                </div>
                <div className="">
                    <CarouselMoment />
                </div>
                <div className="flex flex-row justify-center gap-4 my-8">
                    <ButtonUpload label="Upload" icon={<BsArrowBarUp className="mr-2 w-5 h-5"/>}/>
                    <ButtonIconRight label="Lihat semua" icon={<BsArrowRight className="ml-2 w-5 h-5"/>}/>
                </div>
            </section>
        </>
    )
}
