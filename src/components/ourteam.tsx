"use client";

import React from "react";
import { motion, easeOut, Variants } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Prosper C Obi",
    position: "MANAGING DIRECTOR",
    image: "/GMProspe.jpeg",
    phone: "+234 803 761 6518",
    email: "Md@prosperealty.com",
  },
  {
    id: 2,
    name: "Bon Collins Udeh",
    position: "GENERAL MANAGER",
    image: "/Collins.jpeg",
    phone: "+234 803 410 9687",
    email: "Gm@prosperealty.com",
  },
  {
    id: 3,
    name: "CHIBUKE .E",
    position: "HR/ADMIN MANAGER",
    image: "/HRProspe.jpeg",
    phone: "+234 803 410 9687",
    email: "Admin@prosperealty.com",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const OurTeamSection = () => (
  <div className="bg-white py-16 px-2 md:px-4">
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Our Team
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-2 max-w-2xl mx-auto">
          Our team is dedicated to delivering excellence in every aspect of our
          work.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1A1D20] to-[#7C9343] mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            variants={cardVariants}
            whileHover={{
              y: -6,
              scale: 1.025,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative flex justify-center mt-4 mb-4">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#7C9343]/30 blur-2xl z-0" />

              <motion.div
                className="w-36 h-36 rounded-full border-4 border-white shadow-xl bg-gray-100 overflow-hidden z-10 relative flex items-center justify-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 32px 0 rgba(152,19,20,0.16)",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Image
                  height={200}
                  width={200}
                  src={member.image}
                  alt={member.name}
                  priority
                  className="w-full h-full object-contain transition-all duration-300"
                  style={{ aspectRatio: "1 / 1" }}
                  draggable={false}
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="text-center mb-4">
                <h3 className="text-[16px] font-bold text-gray-900 mb-1 tracking-wide">
                  {member.name.toUpperCase()}
                </h3>
                <p className="text-[#7C9343] font-semibold text-sm">
                  {member.position}
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-1 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-[#7C9343]" />
                  <a
                    href={`tel:${member.phone}`}
                    className="text-gray-700 hover:text-[#7C9343] text-sm"
                  >
                    {member.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-[#7C9343]" />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-700 hover:text-[#7C9343] text-sm truncate"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-5">
          Ready to Work With Our Team?
        </h3>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <button className="bg-[#1A1D20] text-[13px] cursor-pointer text-white px-8 py-3 rounded-lg font-bold hover:bg-[#7C9343] transition-colors duration-300 shadow-lg">
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default OurTeamSection;
