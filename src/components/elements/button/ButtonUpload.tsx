"use client"

import { UploadImage } from "@/components/fragments/UploadImage"
import { ButtonIconProps } from "@/types"
import { Button, Modal } from "flowbite-react"
import { useState } from "react"

export const ButtonUpload = ({ icon, label }: ButtonIconProps) => {
    const [openModal, setOpenModal] = useState(true)
    
    return (
        <>
            <div className="flex flex-wrap gap-2">
                <Button onClick={() => setOpenModal(true)} className="font-semibold bg-primary-500 duration-200 transition-all ease-in-out hover:bg-primary-600" color={"success"}>
                    {icon}
                    {label}
                </Button>

                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="border-none"></Modal.Header>
                    <Modal.Body>
                        <UploadImage/>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
