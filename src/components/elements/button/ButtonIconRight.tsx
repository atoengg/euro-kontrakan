"use client"

import { ButtonIconRightProps } from "@/types"
import { Button } from "flowbite-react"

export const ButtonIconRight = ({label, icon, onClick, color, className} : ButtonIconRightProps) => {
    return (
        <>
            <div className="">
                <Button className={className} color={color} onClick={onClick}>
                    {label}
                    {icon}
                </Button>                
            </div>
        </>
    )
}
