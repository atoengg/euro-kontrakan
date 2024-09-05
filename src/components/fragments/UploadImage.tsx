import { BsPlusLg } from "react-icons/bs"
import { Buttons } from "../elements/button/Buttons"
import { useState } from "react"

export const UploadImage = () => {
    const [imageUpload, setImageUpload] = useState(null)


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

                <Buttons className="font-semibold w-full bg-primary-500 duration-200 transition-all ease-in-out hover:bg-primary-600 " type="button" color="success" size="lg" label="Upload" />
            </div>
        </>
    )
}
