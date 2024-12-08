"use client"

import { euroLogo } from '@/image';
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import React, { useState } from 'react'

interface modalFormLoginProps {
    open: boolean;
    onClose: () => void;
}

export const ModalFormLogin = ({ open, onClose }: modalFormLoginProps) => {

    const [email, setEmail] = useState('');

    return (
        <>
            <Modal show={open} size="md" onClose={onClose} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <img src={euroLogo.src} alt="logo" className="w-12 h-12 mr-6" />
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Log in di platfom euro kontrakan</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="password" />
                            </div>
                            <TextInput id="password" type="password" required />
                        </div>
                        <div>
                            <Button color={"success"} className='flex justify-center w-full'>Log in</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
