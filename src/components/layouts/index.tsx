import { Footer } from "../fragments/Footer";
import { Navbar } from "../fragments/Navbar";

export const Layouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="bg-secondary-950">
        {children}
      </main>

    </>
  );
};
