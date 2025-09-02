"use client"

import Footer from "@/components/footer";
import { properties, Property } from "@/lib/data";
import Image from "next/image";
import { MapPin, Square, Star, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropertyGallery from "@/components/propertyGallery";



const gridVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };

export default function Land() {
    const [selected, setSelected] = useState<Property | null>(null);
    const [visibleCount, setVisibleCount] = useState(4);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const h = () => setIsMobile(window.innerWidth < 640);
        h();
        window.addEventListener("resize", h);
        return () => window.removeEventListener("resize", h);
    }, []);

    const land = properties.filter((p) => p.category === "land");
    const list = isMobile ? land.slice(0, visibleCount) : land;

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 my-10 md:py-16">
                {land.length === 0 ? (
                    <div className="text-center text-gray-600">No land listings yet. Check back soon.</div>
                ) : (
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" variants={gridVariants} initial="hidden" animate="visible">
                        {list.map((p) => (
                            <motion.div key={p.id} whileHover={{ y: -5, scale: 1.025, boxShadow: "0 8px 32px 0 rgba(15,23,42,0.09)" }} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl">
                                <div className="relative">
                                    <Image src={p.images[0]} alt={p.title} width={700} height={400} className="w-full h-48 object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-[16px] font-bold text-gray-900 mb-2 line-clamp-1">{p.title}</h3>
                                    <div className="flex items-center text-gray-600 mb-3">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span className="text-sm">{p.location}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                        <div className="flex items-center">
                                            <Square className="w-4 h-4 mr-1" />
                                            <span>{p.area}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-3">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="ml-1 text-sm font-medium text-gray-900">{p.rating}</span>
                                        <span className="text-sm text-gray-500 ml-2">({p.reviews} Reviews)</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button onClick={() => setSelected(p)} className="bg-[#7C9343] text-white cursor-pointer px-4 py-2 rounded-[3px] text-[10px] font-bold hover:bg-[#1A1D20]">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {isMobile && land.length > visibleCount && (
                    <div className="flex justify-center mt-8">
                        <button className="bg-[#7C9343] text-white px-6 py-2 rounded-[3px] font-bold text-[11px] hover:bg-[#1A1D20]" onClick={() => setVisibleCount((v) => v + 4)}>
                            See More
                        </button>
                    </div>
                )}
            </div>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backdropFilter: "blur(6px)", backgroundColor: "rgba(13, 15, 30, 0.88)" }}>
                    <div className="relative bg-white max-w-2xl w-full rounded-2xl shadow-2xl p-0 md:p-8 flex flex-col max-h-[90vh] overflow-y-auto">
                        <button className="absolute top-5 right-5 cursor-pointer z-20 text-gray-400 hover:text-red-700 bg-white rounded-full shadow p-1" onClick={() => setSelected(null)}>
                            <X size={20} />
                        </button>
                        <div className="md:flex gap-8">
                            <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                                <PropertyGallery images={selected.images} />
                            </div>
                            <div className="flex-1 flex flex-col px-6 pb-6 pt-2 md:p-0">
                                <div className="flex items-center space-x-3 mb-2">
                                    <span className="text-gray-500 text-xs">{selected.location}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
                                <div className="flex items-center mb-4">
                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    <span className="ml-1 text-lg font-medium text-gray-900">{selected.rating}</span>
                                    <span className="text-sm text-gray-500 ml-2">({selected.reviews} Reviews)</span>
                                </div>
                                <div className="text-gray-700 mb-4 text-[15px] leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                                    {selected.description || "No extra description available for this listing."}
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <Square className="w-5 h-5 mr-1" />
                                    <span>{selected.area}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* <Footer /> */}
        </div>
    );
}
