"use client"

import { useAuth } from "@/context/AuthContext";
import { UploadButton } from "@/utils/uploadthing"
import { Toast } from "flowbite-react";
import { useState } from "react";
import { HiCheck, HiExclamation } from "react-icons/hi";

export const UploadImage = () => {

    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const { user } = useAuth()


    const handleUploadComplete = async (url: string) => {

        if (!user) {
            setToast({ type: "error", message: "Harap login terlebih dahulu untuk upload gambar" })
            return
        }

        try {
            const response = await fetch('/api/upload-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: url, // URL gambar dari UploadThing
                    uploadedBy: user.uid // Ganti dengan ID user sesungguhnya
                }),
            });

            if (response.ok) {
                setToast({ type: "success", message: "Foto berhasil disimpan silahkan reload halaman website." });
            } else {
                setToast({ type: "error", message: "Gagal menyimpan foto" });
            }
        } catch (error) {
            setToast({ type: "error", message: "Terjadi kesalahan saat menyimpan foto." });
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {user ? (
                    <UploadButton
                        endpoint={'imageUploader'}
                        appearance={{
                            button: {
                                background: '#4dab5b',
                                borderRadius: '18px',
                                fontSize: '14px',
                                fontWeight: '600'
                            }
                        }}
                        onClientUploadComplete={(res) => {
                            if (res && res.length > 0) {
                                const uploadedUrl = res[0].url;
                                handleUploadComplete(uploadedUrl); // Simpan URL ke database
                            }
                            setToast({ type: "success", message: "Foto berhasil diupload" });
                        }}
                        onUploadError={(error) => {
                            setToast({ type: "error", message: "Foto gagal diupload." });
                        }}
                    />
                ) : (
                    <p className="text-red-500 text-sm">Login terlebih dahulu untuk upload gambar</p>
                )}

            </div>

            {toast && (
                <div className="fixed bottom-4 right-4">
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
