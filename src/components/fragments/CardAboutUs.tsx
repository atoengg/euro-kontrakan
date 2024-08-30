import { Card } from "flowbite-react"
import { Buttons } from "../elements/Buttons"
import { CardAboutUsProps } from "@/types"

export const CardAboutUs = ({background, icon, title, description} : CardAboutUsProps) => {
    return (
        <>
            <Card className="w-[80vw] md:w-[20vw] rounded-2xl relative bg-secondary-900 border-none" horizontal>
                <div className="absolute top-0 -translate-y-1/2 ">
                    <div className="rounded-2xl flex items-center justify-center p-2" style={{ background }}>
                        <img src={icon} alt="icon-about" className='w-10 h-w-10' />
                    </div>
                </div>
                <h5 className="text-xl font-bold tracking-tight text-white mt-2">
                    {title}
                </h5>
                <p className="font-normal text-sm text-white">
                    {description}
                </p>

                <Buttons color='success' size='xs' className='font-poppins' label='Selengkapnya' />
            </Card>
        </>
    )
}
