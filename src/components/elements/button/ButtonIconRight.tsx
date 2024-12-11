"use client"

import { ButtonIconRightProps } from "@/types"
import { Button } from "flowbite-react"

export const ButtonIconRight = ({label, icon, onClick} : ButtonIconRightProps) => {
    return (
        <>
            <div className="">
                <Button className="font-semibold" color={'success'} onClick={onClick}>
                    {label}
                    {icon}
                </Button>                
            </div>
        </>
    )
}
