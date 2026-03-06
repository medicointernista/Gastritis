import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Services from "@/components/sections/services";
import SymptomsCTA from "@/components/sections/symptoms-cta";
import Biography from "@/components/sections/biography";
import ConsultationProcess from "@/components/sections/consultation-process";
import FAQ from "@/components/sections/faq";
import AppointmentBanner from "@/components/sections/appointment-banner";
import LocationMap from "@/components/sections/location-map";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <SymptomsCTA />
        <ConsultationProcess />
        <Biography />
        <FAQ />
        <LocationMap />
        <AppointmentBanner />
      </main>
      <Footer />
    </>
  );
}
