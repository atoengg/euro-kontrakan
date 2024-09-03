"use client"
// import React from 'react'

import { Button } from "flowbite-react"
import { BsSendFill } from "react-icons/bs"

const ButtonWithIcon = () => {
    return (
        <div className="">
            <Button>
                <BsSendFill className="h-6 w-6" />
            </Button>
        </div>

    )
}

export default ButtonWithIcon;
