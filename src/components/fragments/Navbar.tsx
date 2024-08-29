import { Navbar_item } from "@/constants/navbar"
import { euroLogo } from "@/image"

export const Navbar = () => {
  return (
    <>
        <header className="bg-transparent top-0 left-0 w-full z-[999] absolute">
                <nav className="container mx-auto py-4 flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <img src={euroLogo.src} alt="logo" className="w-8 h-8"/>
                        <h2 className="font-[900] font-patrickHand text-xl text-white">Euro Kontrakan</h2>
                    </div>
                    <div>
                        <ul className="flex items-center gap-6">
                            {
                                Navbar_item?.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} className="font-semibold text-[15px] font-poppins text-white transition-all duration-200 ease-in-out hover:text-primary-500 hover:underline">{item.label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
            </header>
    </>
  )
}
