"use client"

import { ButtonProps } from "@/types"
import { Button } from "flowbite-react"

export const Buttons = ({className, type, color, size, label, onClick}: ButtonProps) => {
    return (
        <>
            <Button color={color} onClick={onClick} type={type} size={size} pill className={className}>
                {label}
            </Button>
        </>
    )
}
