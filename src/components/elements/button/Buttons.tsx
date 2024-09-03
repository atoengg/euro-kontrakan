"use client"

import { ButtonProps } from "@/types"
import { Button } from "flowbite-react"

export const Buttons = ({className, color, size, label}: ButtonProps) => {
    return (
        <>
            <Button color={color} size={size} pill className={className}>
                {label}
            </Button>
        </>
    )
}
