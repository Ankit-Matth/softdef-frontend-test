import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="flex flex-row gap-x-3">
      <Sidebar />
      <MainContent />
    </div>
    <Footer />
    </>
  );
}
