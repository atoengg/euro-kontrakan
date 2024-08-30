import { cardDataAboutUs } from "@/constants/cardAboutUs"
import { aboutUsImg } from "@/image"
import { CardAboutUs } from "../fragments/CardAboutUs"

export const AboutUsSection = () => {
    return (
        <>
            <section className="relative bg-secondary-950 h-[120vh]">
                <div className="relative w-full h-64 md:h-[450px]">
                    <img
                        src={aboutUsImg.src}
                        alt="Img-aboutUs"
                        className="w-full h-full object-cover rounded-b-[4rem]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-secondary-950 rounded-b-[4rem]">
                        <p className="text-center mt-40 text-white font-semibold font-poppins leading-[3rem] text-5xl ">Bertumbuh Bersama <br /> Euro Kontrakan</p>
                    </div>
                </div>
                <div className="absolute top-[24rem] left-44">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                        {cardDataAboutUs.map((card) => (
                            <CardAboutUs key={card.id} background={card.background} icon={card.icon.src} title={card.title} description={card.description} />
                        ))}
                    </div>
                </div>
                <div className="pb-32"></div>
            </section>
        </>
    )
}
