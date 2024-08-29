import { Buttons } from "../elements/Buttons"

export const ExploreSection = () => {
    return (
        <>
            <section className="bg-secondary-950 text-center py-28">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h2 className="font-bold text-white text-[26px] font-poppins">Omong-omong soal korek,<br />Iki Euro kontrakan rek!</h2>
                    <Buttons color={"success"} className="font-poppins" label={"Jelajahi"} />
                </div>
            </section>
        </>
    )
}
