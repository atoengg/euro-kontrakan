"use client"

import { ButtonIconRightProps } from "@/types"
import { Button } from "flowbite-react"

export const ButtonIconRight = ({label, icon, onClick, color} : ButtonIconRightProps) => {
    return (
        <>
            <div className="">
                <Button className="flex items-center font-semibold" color={color} onClick={onClick}>
                    {label}
                    {icon}
                </Button>                
            </div>
        </>
    )
}
