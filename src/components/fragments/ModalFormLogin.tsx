"use client"

import { euroLogo } from '@/image';
import { modalFormLoginProps } from '@/types';
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { Formik } from 'formik';
import React, { useState } from 'react'
import { object, string, TypeOf } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';


type LoginFormInputs = TypeOf<typeof loginFormSchema>

const loginFormSchema = object({
    email: string({
        required_error: "Email tidak boleh kosong",
    }).email("Masukan email yang valid"),
    password: string({
        required_error: "Password tidak boleh kosong",
    }),
});

export const ModalFormLogin = ({ open, onClose }: modalFormLoginProps) => {

    const [email, setEmail] = useState('');

    return (
        <>
            <Formik<LoginFormInputs>
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values) => {
                    alert("Form is submitted")
                    console.log("Form is submitted", values);
                }}
                validationSchema={toFormikValidationSchema(loginFormSchema)}
            >{
                    (formik) => {
                        const { errors, touched, isValid, resetForm } = formik;

                        const handleCloseModal = () => {
                            resetForm()
                            onClose()
                        }

                        return (
                            <Modal show={open} size="md" onClose={handleCloseModal} popup>
                                <Modal.Header />
                                <Modal.Body>
                                    <form action="" onSubmit={formik.handleSubmit}>
                                        <div className="space-y-6">
                                            <img src={euroLogo.src} alt="logo" className="w-12 h-12 mr-6" />
                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Log in di platfom euro kontrakan</h3>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="email" value="Email" />
                                                </div>
                                                <TextInput
                                                    id="email"
                                                    placeholder="name@company.com"
                                                    {...formik.getFieldProps("email")}
                                                    required
                                                    className={`rounded-lg ${errors.email ? "border border-red-500" : "border border-primary-500"}`}
                                                />
                                                {touched.email && errors.email && (
                                                    <div className="mt-2 text-sm text-red-500">{errors.email}</div>
                                                )}
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="password" value="Password" />
                                                </div>
                                                <TextInput
                                                    id="password"
                                                    type="password"
                                                    {...formik.getFieldProps("password")}
                                                    className={`rounded-lg ${errors.password ? "border border-red-500" : "border border-primary-500"}`}
                                                    required
                                                />
                                                {touched.password && errors.password && (
                                                    <div className="mt-2 text-sm text-red-500">{errors.password}</div>
                                                )}
                                            </div>
                                            <div>
                                                <Button
                                                    color={"success"}
                                                    type='submit'
                                                    className='flex justify-center w-full'
                                                    disabled={!isValid}
                                                >
                                                    Log in
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>
                        )
                    }
                }
            </Formik>
        </>
    )
}
