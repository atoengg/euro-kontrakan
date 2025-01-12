"use client"

import { euroLogo, iconGoogle } from '@/image';
import { modalProps } from '@/types';
import { Button, Label, Modal, TextInput, Toast } from 'flowbite-react'
import { Formik } from 'formik';
import React, { useState } from 'react'
import { object, string, TypeOf } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useAuth } from '@/context/AuthContext';
import { HiCheck, HiExclamation } from 'react-icons/hi';
import ClipLoader from "react-spinners/ClipLoader";
import Image from 'next/image';

type LoginFormInputs = TypeOf<typeof loginFormSchema>

const loginFormSchema = object({
    email: string({
        required_error: "Email tidak boleh kosong",
    }).email("Masukan email yang valid"),
    password: string({
        required_error: "Password tidak boleh kosong",
    }),
});

export const ModalFormLogin = ({ open, onClose }: modalProps) => {
    const { login, loginWithGoogle } = useAuth()
    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingWithGoogle, setIsLoadingWithGoogle] = useState(false)

    const handleLogin = async (values: LoginFormInputs, resetForm: () => void) => {
        setIsLoading(true)
        try {
            await login(values.email, values.password)
            setToast({ type: "success", message: "Login berhasil" })
            resetForm()
            onClose()
        } catch (error) {
            setToast({ type: "error", message: "Login gagal, email dan password yang anda masukan salah" })
        } finally {
            setIsLoading(false)
        }
    }

    // Handle login with google
    const handleGoogleLogin = async () => {
        setIsLoadingWithGoogle(true);
        try {
            await loginWithGoogle();
            setToast({ type: "success", message: "Login dengan Google berhasil" });
            onClose();
        } catch (error) {
            setToast({ type: "error", message: "Login dengan Google gagal" });
        } finally {
            setIsLoadingWithGoogle(false);
        }
    };

    return (
        <>
            <Formik<LoginFormInputs>
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { resetForm }) => handleLogin(values, resetForm)}
                validationSchema={toFormikValidationSchema(loginFormSchema)}
            >
                {(formik) => {
                    const { errors, touched, isValid, resetForm } = formik

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
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Log in di platform euro kontrakan</h3>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="email" value="Email" />
                                            </div>
                                            <TextInput
                                                id="email"
                                                placeholder="example@gmail.com"
                                                {...formik.getFieldProps("email")}
                                                required
                                                className={`rounded-lg focus:outline-none ${errors.email ? "border border-red-500" : "border border-primary-500"}`}
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
                                                className={`rounded-lg focus:outline-none ${errors.password ? "border border-red-500" : "border border-primary-500"}`}
                                                required
                                            />
                                            {touched.password && errors.password && (
                                                <div className="mt-2 text-sm text-red-500">{errors.password}</div>
                                            )}
                                        </div>
                                        <div>
                                            <Button
                                                color={"success"}
                                                type="submit"
                                                className="flex justify-center w-full"
                                                disabled={isLoading || !isValid}
                                            >
                                                {isLoading ?
                                                    <ClipLoader
                                                        color="#fffbfb"
                                                        size={25}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                    /> :
                                                    "Login"
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </form>

                                <p className='text-center text-sm text-gray-600 my-4'>atau</p>

                                <button type='submit' className="bg-transparent w-full flex justify-center items-center gap-1 px-4 py-2 rounded-lg border border-primary-500" onClick={handleGoogleLogin}>
                                    {
                                        isLoadingWithGoogle ? (
                                            <ClipLoader
                                                color="#000"
                                                size={25}
                                                aria-label="Loading Spinner"
                                                data-testid="loader"
                                            />
                                        ) : (
                                            <>
                                                <Image src={iconGoogle} alt='icon-google' />
                                                <p className='text-sm font-semibold text-secondary-950'>Google</p>
                                            </>
                                        )
                                    }
                                </button>
                            </Modal.Body>
                        </Modal>
                    )
                }}
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
