"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import Image from "next/image";

function getCardsPerView() {
  if (typeof window === "undefined") return 1;
  return window.innerWidth < 768 ? 1 : 4;
}

export default function TestimonialSection() {
  const [startIdx, setStartIdx] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const num = testimonials.length;

  useEffect(() => {
    const update = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % num);
    }, 5500);
    return () => clearInterval(interval);
  }, [num]);

  const getVisible = () =>
    Array.from({ length: cardsPerView }, (_, i) => testimonials[(startIdx + i) % num]);

  const totalPages = num;

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24 px-2 md:px-0">
      <div className="max-w-6xl mx-auto rounded-2xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-3 max-w-2xl mx-auto">
            Real experiences, honest feedback, and the stories that make us proud to serve you every day.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-[#7C9343] mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="flex gap-6 w-full md:gap-8 overflow-hidden">
          {getVisible().map((t, idx) => (
            <motion.div
              key={t.id}
              className={`flex-1 min-w-0`}
              style={{
                width:
                  cardsPerView > 1
                    ? `calc((100% - ${(cardsPerView - 1) * 2}rem)/${cardsPerView})`
                    : "100%",
                maxWidth: cardsPerView > 1 ? "none" : "100%",
              }}
              animate={{
                y: cardsPerView === 1 ? 0 : idx === 1 ? -8 : 0,
                opacity: cardsPerView === 1 ? 1 : idx === 1 ? 1 : 0.92,
              }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              {/* Gradient ring wrapper */}
              <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#7C9343] via-[#9fb56a] to-transparent">
                <TestimonialCard testimonial={t} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIdx(idx)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                startIdx === idx ? "bg-[#1A1D20] scale-125" : "bg-[#1A1D20]/20"
              }`}
              aria-label={`Go to testimonials starting at ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <motion.article
      whileHover={{ y: -4, rotateX: 0.5, rotateY: -0.5 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-5 py-6 md:px-6 md:py-7"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-12 h-12 shrink-0">
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7C9343] to-black opacity-10" />
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white">
            <Image
              width={48}
              height={48}
              src={testimonial.photo}
              alt={testimonial.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="min-w-0">
          <div className="font-extrabold text-[#1A1D20] text-sm md:text-base truncate">
            {testimonial.name}
          </div>
          <div className="text-[11px] md:text-xs font-semibold text-[#7C9343] tracking-wider truncate">
            {testimonial.role}
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-800 text-[14px] md:text-[15px] leading-relaxed mb-4">
        “{testimonial.text}”
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex">
          {Array.from({ length: testimonial.rating }).map((_, j) => (
            <Star
              key={j}
              className="w-4 h-4 text-yellow-400 fill-current drop-shadow-sm"
            />
          ))}
        </div>
        <span className="text-[11px] px-2 py-1 rounded-full bg-[#7C9343]/10 text-[#1A1D20] font-semibold">
          Verified
        </span>
      </div>
    </motion.article>
  );
}
