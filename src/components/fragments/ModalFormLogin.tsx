"use client"

import { euroLogo } from '@/image';
import { modalFormLoginProps } from '@/types';
import { Button, Label, Modal, TextInput, Toast } from 'flowbite-react'
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { object, string, TypeOf } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config';
import { HiCheck, HiExclamation } from 'react-icons/hi';


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

    const [loginWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)

    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

    useEffect(() => {
        if (error) {
            setToast({ type: "error", message: "Login gagal, email dan password yang anda masukan salah" });
        }
    }, [error]) 
    return (
        <>
            <Formik<LoginFormInputs>
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={async (values, { resetForm }) => {
                    const res = await loginWithEmailAndPassword(values.email, values.password);
                    if (res?.user) {
                        setToast({ type: "success", message: "Login berhasil" });
                        resetForm()
                        onClose()
                    }

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
                            <Modal show={open} size="md" onClose={handleCloseModal} className='z-[9999]' popup>
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
                                                    placeholder="example@gmail.com"
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
                                            {error && (
                                                <div className="mt-2 text-sm text-red-500">
                                                    <p>Maaf email dan password salah</p>
                                                </div>
                                            )}
                                            <div>
                                                <Button
                                                    color={"success"}
                                                    type='submit'
                                                    className='flex justify-center w-full'
                                                    disabled={!isValid || loading}
                                                >
                                                    {loading ? "loading..." : "Login"}
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
            {toast && (
                <div className="fixed bottom-4 right-4 z-[999]">
                    <Toast>
                        <div
                            className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${toast.type === "success"
                                ? "bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200"
                                : "bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200"
                                }`}
                        >
                            {toast.type === "success" ? (
                                <HiCheck className="h-5 w-5" />
                            ) : (
                                <HiExclamation className="h-5 w-5" />
                            )}

                        </div>
                        <div className="ml-3 text-sm font-normal">{toast.message}</div>
                        <Toast.Toggle onClick={() => setToast(null)} />
                    </Toast>
                </div>
            )}
        </>
    )
}
