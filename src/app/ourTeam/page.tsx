import React from "react";
import Footer from "@/components/footer";
import OurTeamSection from "@/components/ourteam";
import TestimonialSection from "@/components/testimonial";
import TeamHeroSection from "@/components/pageSections/TeamHeroSection";


export const metadata = {
  title: "Our Team - Prosperealty",
  description: "Meet the dedicated professionals behind Prosperealty, committed to helping you secure the best lands and properties.",
  alternates: {
    canonical: "https://www.prosperealty.com/ourTeam",
  },
  openGraph: {
    title: "Our Team - Prosperealty",
    description: "Meet the dedicated professionals behind Prosperealty, committed to helping you secure the best lands and properties.",
    url: "https://www.prosperealty.com/ourTeam",
    images: [
      {
        url: "/prosperealtylogo.png",
        width: 800,
        height: 600,
        alt: "Prosperealty Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - Prosperealty",
    description: "Meet the dedicated professionals behind Prosperealty, committed to helping you secure the best lands and properties.",
    images: ["/prosperealtylogo.png"],
  },
};

export default function OurTeamPage() {
  return (
    <>

      <div className="min-h-screen bg-white">
        <TeamHeroSection />
        <div className="mx-2 my-5 md:m-10">
          <OurTeamSection />
          <TestimonialSection />
        </div>
        <Footer />
      </div>
    </>

  );
}
