import Footer from "@/components/footer";
import AllPropertiesPage from "@/components/pageSections/allProperties";

export const metadata = {
  title: "Properties - Prosperealty",
  description: "Browse verified lands and select properties for sale. Find your ideal investment with Prosperealty.",
  alternates: {
    canonical: "https://www.prosperealty.com/properties",
  },
  openGraph: {
    title: "Properties - Prosperealty",
    description: "Browse verified lands and select properties for sale. Find your ideal investment with Prosperealty.",
    url: "https://www.prosperealty.com/properties",
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
    title: "Properties - Prosperealty",
    description: "Browse verified lands and select properties for sale.",
    images: ["/prosperealtylogo.png"],
  },
};
export default function PropertiesPage() {
  return (
    <div className="bg-white min-h-screen">
      <AllPropertiesPage />
      <Footer />
    </div>
  );
}
