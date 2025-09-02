import Footer from "@/components/footer";
import Houses from "@/components/houses";
import HouseSection from "@/components/pageSections/HouseSection";

export const metadata = {
    title: "Houses Properties - Prosperealty",
    description: "Browse finished and semi-finished houses, apartments, and duplexes.",
    alternates: { canonical: "https://www.prosperealty.com/properties/building" },
    openGraph: {
        title: "Building Properties - Prosperealty",
        description: "Browse finished and semi-finished houses, apartments, and duplexes.",
        url: "https://www.prosperealty.com/properties/building",
        images: [{ url: "/prosperealtylogo.png", width: 800, height: 600, alt: "Prosperealty Logo" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Building Properties - Prosperealty",
        description: "Browse finished and semi-finished houses, apartments, and duplexes.",
        images: ["/prosperealtylogo.png"],
    },
};


export default function HousePage() {
    return (
        <div className="bg-white min-h-screen">
            <HouseSection/>
            <Houses/>
            <Footer />
        </div>
    );
}
