import FeaturedPropertiesSection from "@/components/FeaturedProperties";
import About from "@/components/aboutContent";
import ContactSection from "@/components/contactus";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import StatsComponent from "@/components/stat";
import VisionMissionComponent from "@/components/visionandmission";


export const metadata = {
  title: "Prosperealty - Verified Lands & Properties",
  description: "Buy verified lands and select properties with ease and confidence.",
  alternates: {
    canonical: "https://www.prosperealty.com/",
  },
  openGraph: {
    title: "Prosperealty - Verified Lands & Properties",
    description: "Buy verified lands and select properties with ease and confidence.",
    url: "https://www.prosperealty.com/",
    images: [
      {
        url: "/prosperealtylogo.png",
        width: 800,
        height: 600,
        alt: "Prosperealty Logo",
      },
    ],
    siteName: "Prosperealty",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosperealty - Verified Lands & Properties",
    description: "Buy verified lands and select properties with ease and confidence.",
    images: ["/prosperealtylogo.png"],
  },
};



export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="">
        <Hero />
        <About />
        <VisionMissionComponent />      
        <FeaturedPropertiesSection />
        {/* <StatsComponent />       */}
          <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

