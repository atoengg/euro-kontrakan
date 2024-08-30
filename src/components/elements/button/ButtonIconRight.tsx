"use client"

import { ButtonIconProps } from "@/types"
import { Button } from "flowbite-react"

export const ButtonIconRight = ({label, icon} : ButtonIconProps) => {
    return (
        <>
            <div className="flex flex-wrap gap-2">
                <Button className="font-semibold bg-primary-500 duration-200 transition-all ease-in-out hover:bg-primary-600" color={"success"}>
                    {label}
                    {icon}
                </Button>                
            </div>
        </>
    )
}
