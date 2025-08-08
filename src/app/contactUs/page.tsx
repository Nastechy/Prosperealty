import React from "react";
import Footer from "@/components/footer";
import ContactSection from "@/components/contactus";
import ContactHeroSection from "@/components/pageSections/ContactHeroSection";


export const metadata = {
    title: "Contact Us - Prosperealty",
    description: "We’d love to hear from you. Get in touch today to discuss your land or property needs.",
    alternates: {
        canonical: "https://www.prosperealty.com/contactUs",
    },
    openGraph: {
        title: "Contact Us - Prosperealty",
        description: "We’d love to hear from you. Get in touch today to discuss your land or property needs.",
        url: "https://www.prosperealty.com/contactUs",
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
        title: "Contact Us - Prosperealty",
        description: "We’d love to hear from you. Get in touch today to discuss your land or property needs.",
        images: ["/prosperealtylogo.png"],
    },
};


export default function ContactPage() {
    return (
        <>
            <div className="min-h-screen bg-white">
                <ContactHeroSection />
                <ContactSection />
                <Footer />
            </div>
        </>

    );
}
