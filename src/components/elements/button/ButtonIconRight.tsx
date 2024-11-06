"use client"

import { ButtonIconRightProps } from "@/types"
import { Button } from "flowbite-react"

export const ButtonIconRight = ({label, icon} : ButtonIconRightProps) => {
    return (
        <>
            <div className="">
                <Button className="font-semibold" color={'success'}>
                    {label}
                    {icon}
                </Button>                
            </div>
        </>
    )
}
