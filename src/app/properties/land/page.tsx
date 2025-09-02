import Footer from "@/components/footer";
import Land from "@/components/land";
import LandSection from "@/components/pageSections/LandSection";

export const metadata = {
    title: "Land Properties - Prosperealty",
    description: "Explore verified plots and estate lands across prime locations.",
    alternates: { canonical: "https://www.prosperealty.com/properties/land" },
    openGraph: {
        title: "Land Properties - Prosperealty",
        description: "Explore verified plots and estate lands across prime locations.",
        url: "https://www.prosperealty.com/properties/land",
        images: [{ url: "/prosperealtylogo.png", width: 800, height: 600, alt: "Prosperealty Logo" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Land Properties - Prosperealty",
        description: "Explore verified plots and estate lands across prime locations.",
        images: ["/prosperealtylogo.png"],
    },
};


export default function LandPage() {
    return (
        <div className="bg-white min-h-screen">
            <LandSection />
            <Land/>
            <Footer />
        </div>
    );
}
