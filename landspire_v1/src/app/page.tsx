import HeroImage from "./components/Hero";
import Layanan from "./components/Layanan";

export default function Home() {
  return (
    <>
      <HeroImage />

      <h1 className="mt-[58px] text-center text-3xl font-semibold text-landspire_blue">Our Services</h1>

      <Layanan />
    </>
  );
}