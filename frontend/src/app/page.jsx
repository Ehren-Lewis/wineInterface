import Image from "next/image";

import Navbar from "@/components/navbar";

import WinesSplasher from "@/components/winesSplasher";

// import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <WinesSplasher />
      </div>

      {/* <Footer /> */}
    </>

  );
}
