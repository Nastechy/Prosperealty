
import React from "react";
import About from "@/components/aboutContent";
import Footer from "@/components/footer";
import AboutHeroSection from "@/components/pageSections/AboutHeroSection";
import WhyChooseProspeRealty from "@/components/whychoose";


export const metadata = {
  title: "About Us - Prosperealty",
  description:
    "Learn more about Prosperealty — your trusted partner for verified lands and select property investments.",
  alternates: {
    canonical: "https://www.prosperealty.com/aboutUs",
  },
  openGraph: {
    title: "About Us - Prosperealty",
    description:
      "Learn more about Prosperealty — your trusted partner for verified lands and select property investments.",
    url: "https://www.prosperealty.com/aboutUs",
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
    title: "About Us - Prosperealty",
    description:
      "Learn more about Prosperealty — your trusted partner for verified lands and select property investments.",
    images: ["/prosperealtylogo.png"],
  },
};


export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <AboutHeroSection />
        <div className="mx-2 my-5 md:m-10 ">
          <About />
          <WhyChooseProspeRealty />
        </div>
        <Footer />
      </div>
    </>

  );
}
