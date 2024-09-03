import { euroLogo } from "@/image"
import { BsGeoAltFill} from "react-icons/bs";
import { FormInputFooter } from "./FormInputFooter";

export const Footer = () => {
    return (
        <>
            <footer className="bg-secondary-950 py-12 border-t border-primary-300">
                <div className="container mx-auto text-white">
                    <div className="grid gap-14 row-gap-4 lg:grid-cols-6">
                        <div className="md:max-w-sm lg:col-span-2">
                            <div className="flex items-center gap-1">
                                <img src={euroLogo.src} alt="logo" className="w-10 h-10" />
                                <h2 className="font-semibold text-2xl font-poppins">Euro kontrakan</h2>
                            </div>
                            <div className="flex items-center gap-4 mt-5">
                                <BsGeoAltFill className="w-6 h-6" />
                                <a
                                    href="https://maps.app.goo.gl/NnP28c6M4MaTVugX8"
                                    className="text-[12px] font-[300] duration-200 transition-all ease-in-out hover:text-primary-500"
                                >
                                    Graha Kamal, Bindung, Kec. Kamal, Kabupaten Bangkalan, Jawa Timur 69162
                                </a>
                            </div>
                        </div>
                        <div className="grid row-gap-8 grid-cols-2 gap-5 md:grid-cols-3 lg:col-span-4">
                            <div className="">
                                <h2 className="font-semibold text-lg">Didukung oleh</h2>
                                <div className="flex flex-col mt-4">
                                    <a href="#" className="mb-2 text-[12px] duration-200 transition-all ease-in-out hover:text-primary-500">
                                        Pak Tua
                                    </a>
                                    <a href="#" className="mb-2 text-[12px] duration-200 transition-all ease-in-out hover:text-primary-500">
                                        Mawar
                                    </a>
                                    <a href="#" className="mb-2 text-[12px] duration-200 transition-all ease-in-out hover:text-primary-500">
                                        Ayam Bakar Kamal
                                    </a>
                                    <a href="#" className="mb-2 text-[12px] duration-200 transition-all ease-in-out hover:text-primary-500">
                                        Bu Muhyi
                                    </a>
                                    <a href="#" className="mb-2 text-[12px] duration-200 transition-all ease-in-out hover:text-primary-500">
                                        Tahu tek indomaret
                                    </a>
                                </div>
                            </div>
                            <div className="">
                                <h2 className="font-semibold text-lg">Partner Kami</h2>
                                <div className="flex flex-col mt-4">
                                    <a href="#" className="mb-2 text-[12px] duration-200 transition-all ease-in-out hover:text-primary-500">
                                        Kos HC
                                    </a>
                                    <a href="#" className="mb-2 text-[12px] duration-200 transition-all ease-in-out hover:text-primary-500">
                                        Gang Texas
                                    </a>
                                    <a href="#" className="mb-2 text-[12px] duration-200 transition-all ease-in-out hover:text-primary-500">
                                        Telor Gulung Ebu
                                    </a>
                                </div>
                            </div>

                            <div className="">
                                <h2 className="font-semibold text-lg">Kritik dan Saran</h2>
                                <p className="text-[12px] mt-3">
                                    Menerima segala kritik, saran, dan bacod-an anda!
                                </p>

                                <div className="">
                                    <FormInputFooter/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}
