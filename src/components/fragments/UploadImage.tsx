import { BsPlusLg } from "react-icons/bs"
import { Buttons } from "../elements/button/Buttons"
import { useEffect, useState } from "react"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "@/app/firebase";

export const UploadImage = ({ onUpload }: { onUpload: (url: string) => void }) => {
    const [imageUpload, setImageUpload] = useState<File | null>(null)
    const [imageList, setImageList] = useState<string[]>([])
    const maxUploadSizeInBytes = 10 * 1024 * 1024; // 10MB
    const maxUploadsPerDay = 20;

    useEffect(() => {
        listImages()
    }, [])

    const listImages = () => {
        const imageListRef = ref(storage, "images/")
        listAll(imageListRef)
            .then((response) => {
                const imgPromise = response.items.map((item) => getDownloadURL(item))
                Promise.all(imgPromise)
                    .then((urls) => {
                        setImageList(urls);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch((err) => {
                console.log(err);

            })
    }

    const uploadImage = () => {
        if (imageUpload == null) return;

        const uploadedImagesCount = parseInt(localStorage.getItem("uploadedImagesCount") || "0");
        const lastUploadDate = localStorage.getItem("lastUploadDate");

        if (lastUploadDate) {

            const lastUpload = new Date(lastUploadDate);
            const currentDate = new Date();

            if (lastUpload.toDateString() === currentDate.toDateString()) {
                if (uploadedImagesCount >= maxUploadsPerDay) {
                    alert("Anda telah mencapai batas unggahan maksimum untuk hari ini.");
                    return;
                }
            } else {
                localStorage.setItem("uploadedImagesCount", "0");
                localStorage.setItem("lastUploadDate", currentDate.toISOString());
            }
        } else {
            localStorage.setItem("lastUploadDate", new Date().toISOString());
        }


        if (imageUpload.size > maxUploadSizeInBytes) {
            alert("ukuran gambar max 10MB")
            return;
        }

        const imageRef = ref(storage, `images/${imageUpload.name}-${uuidv4()}`)
        uploadBytes(imageRef, imageUpload)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                        // setImageList((prev) => [...prev, url]);
                        // localStorage.setItem("uploadedImagesCount", uploadedImagesCount + "1");
                        // localStorage.setItem("lastUploadDate", new Date().toISOString());
                        onUpload(url)

                        alert("gambar anda berhasil di upload");

                    })
                    .catch((error) => {
                        console.log(error);
                    });
                setImageUpload(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const handleImgChange = (event: any) => {
        setImageUpload(event.target.files[0])
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="text-center mb-4">
                    <h1 className="text-xl md:text-2xl md:px-10 font-bold mb-4 w-full text-secondary-950">Unggah Kenangan Bersama Euro Kontrakan</h1>
                </div>

                <div className="mx-auto p-4">
                    <form action="">
                        <div className="mb-4">
                            <input type="file" id="imageUpload" className="hidden" onChange={handleImgChange} />
                            <label htmlFor="imageUpload" className="cursor-pointer border-dashed border-2 border-gray-400 rounded-lg p-4 w-72 h-auto flex items-center justify-center">
                                {imageUpload ?
                                    (<div className="w-full h-full overflow-hidden">
                                        <img src={URL.createObjectURL(imageUpload)} alt="previe-gambar" className="w-full h-full object-cover" />
                                    </div>) :
                                    (<div className="flex flex-col justify-center items-center text-center px-5 py-8">
                                        <BsPlusLg className="w-8 h-8" />
                                        <p>klik untuk memilih gambar</p>
                                    </div>)
                                }
                            </label>
                        </div>
                    </form>
                </div>

                <Buttons onClick={uploadImage} className="font-semibold w-full bg-primary-500 duration-200 transition-all ease-in-out hover:bg-primary-600 " type="button" color="success" size="lg" label="Upload" />
            </div>
        </>
    )
}
