"use client"

import { UploadButton } from "@/utils/uploadthing"

export const UploadImage = () => {

    const handleUploadComplete = async (url: string) => {
        try {
            const response = await fetch('/api/upload-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: url, // URL gambar dari UploadThing
                    uploadedBy: "userId" // Ganti dengan ID user sesungguhnya
                }),
            });

            if (response.ok) {
                console.log('Image saved to database');
            } else {
                console.error('Failed to save image');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center">
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
                        alert("Upload Completed");
                    }}
                    onUploadError={(error) => {
                        alert(`ERROR! ${error.message}`);
                    }}
                />
            </div>
        </>
    )
}
