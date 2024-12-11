import { AuthProvider } from "@/context/AuthContext";
import { Navbar } from "../fragments/Navbar";

export const Layouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <AuthProvider>
      <Navbar />
      <main className="bg-secondary-950">
        {children}
      </main>
      </AuthProvider>
    </>
  );
};
