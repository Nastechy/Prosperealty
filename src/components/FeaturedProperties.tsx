"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Star, MapPin, Square, X, Mail, Phone } from "lucide-react";
import { Property, properties } from "@/lib/data";
import PropertyGallery from "./propertyGallery";
import Image from "next/image";

export default function FeaturedPropertiesSection() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [sliceCount, setSliceCount] = useState(4); // default to 4
  const router = useRouter();
  const closeModal = () => setSelectedProperty(null);

  useEffect(() => {
    // Helper to detect small screen
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSliceCount(2);
      } else {
        setSliceCount(4);
      }
    };
    handleResize(); // on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white py-10 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore our Prime Properties
          </h2>
          <p className="text-[14px] md:text-[16px] text-gray-600 mb-2 max-w-2xl mx-auto">
            Discover carefully selected properties listings ideal for your next investment or dream development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1A1D20] to-[#7C9343] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.slice(0, sliceCount).map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  width={400}
                  height={192}
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[16px] font-bold text-gray-900 mb-2 line-clamp-1">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">{property.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({property.reviews} Reviews)</span>
                </div>
                <div className="flex items-end justify-end">
                  <button
                    onClick={() => setSelectedProperty(property)}
                    className="bg-[#7C9343] text-white cursor-pointer px-4 py-2 rounded-[3px] text-[10px] font-bold hover:bg-[#1A1D20] transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-16">
          <button
            className="bg-[#7C9343] text-[13px] cursor-pointer text-white px-8 py-3 rounded-[5px] font-bold hover:bg-[#1A1D20] transition-colors duration-200"
            onClick={() => router.push("/properties")}
          >
            View All Properties
          </button>
        </div>
      </div>

      {selectedProperty && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backdropFilter: "blur(6px)", backgroundColor: "rgba(13, 15, 30, 0.88)" }}
        >
          <div className="relative bg-white max-w-2xl w-full rounded-2xl shadow-2xl p-0 md:p-8 flex flex-col max-h-[90vh] overflow-y-auto transition-all">
            <button
              className="absolute top-5 cursor-pointer right-5 z-20 text-gray-400 hover:text-red-700 bg-white rounded-full shadow p-1"
              onClick={closeModal}
            >
              <X size={20} />
            </button>
            <div className="md:flex gap-8">
              <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                <PropertyGallery images={selectedProperty.images} />
              </div>
              <div className="flex-1 flex flex-col px-6 pb-6 pt-2 md:p-0">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-gray-500 text-xs">{selectedProperty.location}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{selectedProperty.title}</h3>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-lg font-medium text-gray-900">{selectedProperty.rating}</span>
                  <span className="text-sm text-gray-500 ml-2">({selectedProperty.reviews} Reviews)</span>
                </div>
                <div className="text-gray-700 mb-4 text-[15px] leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                  {selectedProperty.description || "No extra description available for this property."}
                </div>
                <div className="flex flex-wrap gap-4 mb-4 text-gray-600 text-sm">
                  <div className="flex items-center">
                    <Square className="w-5 h-5 mr-1" />
                    <span>{selectedProperty.area}</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mt-auto">
                  <div className="font-semibold mb-2">Contact Agent</div>
                  <div className="flex items-center mb-1">
                    <Mail className="w-4 h-4 mr-2 text-[#7C9343]" />
                    <span className="text-gray-800 text-sm">prosperealtycompany@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-[#7C9343]" />
                    <span className="text-gray-800 text-sm">+234 813 524 6089</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
