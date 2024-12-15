import { EuroTeam } from "@/constants/euroTeam"
import Marquee from "react-fast-marquee"
import { CardEuroTeam } from "../fragments/CardEuroTeam"

export const OurMemberSection = () => {
    return (
        <>
            <section className="py-10">
                <div className="text-center">
                    <h2 className="font-semibold text-3xl lg:text-4xl font-poppins text-white mb-6">Manusia Euro Kontrakan</h2>
                </div>

                <Marquee autoFill pauseOnClick>
                    {EuroTeam?.slice(0, 4).map((item, index) => (
                        <div className="flex space-x-5 mr-6" key={index}>
                            <CardEuroTeam avatar={item.avatar} namaLengkap={item.namaLengkap} namaSamaran={item.namaSamaran} asal={item.asal} />
                        </div>
                    ))}
                </Marquee>

                <Marquee autoFill pauseOnClick direction="right">
                    {EuroTeam?.slice(5, 8).map((item, index) => (
                        <div className="flex space-x-5 mr-6 my-8" key={index}>
                            <CardEuroTeam avatar={item.avatar} namaLengkap={item.namaLengkap} namaSamaran={item.namaSamaran} asal={item.asal} />
                        </div>
                    ))}
                </Marquee>

                <Marquee autoFill pauseOnClick>
                    {EuroTeam?.slice(9, 11).map((item, index) => (
                        <div className="flex space-x-5 mr-6" key={index}>
                            <CardEuroTeam avatar={item.avatar} namaLengkap={item.namaLengkap} namaSamaran={item.namaSamaran} asal={item.asal} />
                        </div>
                    ))}
                </Marquee>

            </section>
        </>
    )
}
