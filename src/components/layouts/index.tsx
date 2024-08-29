import { Navbar } from "../fragments/Navbar"

export const Layouts = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <div className="">
                <Navbar />
                <main className="bg-secondary-950">
                    {children}
                </main>
            </div>
    </>
  )
}
