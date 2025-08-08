"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { MapPin, Wallet, Handshake } from "lucide-react";

const WhyChooseProspeRealty = () => {
  const benefits = [
    {
      id: 1,
      icon: <MapPin className="w-12 h-12 text-green-600" />,
      title: "Verified Lands",
      description:
        "We offer thoroughly vetted land listings to ensure peace of mind and transparency in every deal.",
      bg: "bg-green-100",
    },
    {
      id: 2,
      icon: <Wallet className="w-12 h-12 text-blue-600" />,
      title: "Affordable Plans",
      description:
        "Choose from flexible and budget-friendly payment options tailored to your investment goals.",
      bg: "bg-blue-100",
    },
    {
      id: 3,
      icon: <Handshake className="w-12 h-12 text-yellow-600" />,
      title: "Client-Centered Support",
      description:
        "From site inspections to documentation, we prioritize your experience every step of the way.",
      bg: "bg-yellow-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-14 md:py-20 px-2 md:px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.22,
              },
            },
          }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose ProspeRealty?
          </motion.h2>
          <motion.p
            className="text-[14px] md:text-[16px] text-gray-600 mb-2 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            With us, you get verified lands, flexible payment options, and dependable support every step of the way.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#1A1D20] to-[#7C9343] mx-auto rounded-full"
            initial={{ opacity: 0, scaleX: 0.3 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.23, 1, 0.32, 1],
            }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="relative"
            >
              <div
                className="bg-white rounded-2xl p-4 md:p-8 shadow-lg text-center relative overflow-hidden"
                style={{
                  boxShadow: "0 8px 32px 0 #00000033",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl opacity-30 transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-100 rounded-full blur-2xl opacity-50 transform -translate-x-12 translate-y-12"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 ${benefit.bg} rounded-full`}>
                      <span className="h-6 w-6 flex items-center justify-center">
                        {React.cloneElement(benefit.icon, { size: 24 })}
                      </span>
                    </div>
                  </div>

                  <motion.h3
                    className="text-[16px] md:text-[18px] font-bold text-gray-900 mb-4"
                    whileHover={{ color: "#7C9343" }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 leading-relaxed text-[12px] md:text-[14px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {benefit.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseProspeRealty;
