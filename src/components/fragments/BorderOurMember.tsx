import { BorderProps } from "@/types"

export const BorderOurMember = ({ width, nama }: BorderProps) => {
    return (
        <>
            <div className="mt-10 md:mt-8">
                <div className="flex flex-col justify-center items-center">
                    <div className={`bg-white text-secondary-950 rounded-3xl text-[0.8rem] px-2 py-[0.30rem] text-center font-semibold`} style={{width: width}}>
                        {nama}
                    </div>
                </div>
            </div>
        </>
    )
}
