"use client"

import { BsSendFill } from "react-icons/bs"
import { Buttons } from "../elements/button/Buttons"

export const FormInputFooter = () => {
    return (
        <>
            <form action="" className="flex items-center mt-5">
                <input
                    type="text"
                    name="bacodan"
                    id="bacodan"
                    placeholder="masukan bacod-an anda"
                    className="w-full bg-white text-secondary-950 rounded-full border border-solid border-black text-[9px] py-2 px-4 mr-2"
                />
                <Buttons size="xs" className="bg-primary-500 p-1 rounded-full flex items-center justify-center text-white duration-200 transition-all ease-in-out hover:bg-primary-600" label={<BsSendFill className="h-4 w-4" />} />
            </form>
        </>
    )
}
