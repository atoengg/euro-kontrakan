"use client"

import { modalTermOfServiceProps } from '@/types'
import { Button, List, Modal } from 'flowbite-react'
import React from 'react'

export const ModalTermOfService = ({ open, onClose }: modalTermOfServiceProps) => {
    return (
        <>
            <Modal dismissible show={open} onClose={onClose} className="z-[999]">
                <div className="p-5 border-b-secondary-950 border-b bg-secondary-900">
                    <h1 className="text-white font-bold text-xl border-b-secondary-950">Aturan Upload Gambar</h1>
                </div>
                <Modal.Body className="bg-secondary-900">
                    <div className="space-y-6">
                        <List className='text-gray-400'>
                            <List.Item>Sebelum Upload Gambar, silahkan login terlebih dahulu menggunakan akun yang valid</List.Item>
                            <List.Item>Batas ukuran upload gambar maks 4 mb</List.Item>
                            <List.Item>Batas upload 20 gambar/hari</List.Item>
                            <List.Item>Upload gambar wajib menggunakan format .jpg atau .jpeg</List.Item>
                            <List.Item>Pastikan ketika upload gambar menggunakan kualitas HD</List.Item>
                            <List.Item>Dilarang keras upload gambar yang mengandung unsur pornografi dan SARA.</List.Item>
                        </List>

                    </div>
                </Modal.Body>
                <Modal.Footer className="bg-secondary-900 border-t-secondary-950">
                    <Button onClick={onClose} color={"success"}>Saya setuju</Button>
                    <Button color="failure" onClick={onClose}>
                        Menolak
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
