"use client"

import { AuthProvider } from "@/context/AuthContext";
import { Navbar } from "../fragments/Navbar";
import { ButtonPlayMusic } from "../elements/button/ButtonPlayMusic";

export const Layouts = ({ children }: { children: React.ReactNode }) => {

  
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="bg-secondary-950">
          {children}
        </main>
        
        <ButtonPlayMusic/>

      </AuthProvider>
    </>
  );
};
