"use client";

import React, { useRef } from "react";
import { motion, useInView, easeInOut, Easing } from "framer-motion";

interface SectionData {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

const customEase: Easing = [0.25, 0.25, 0.25, 0.75];

const VisionMissionComponent: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sections: SectionData[] = [
    {
      id: "mission",
      title: "Our Mission",
      content:
        "To become Nigeria’s largest commercial and residential real estate sales organization focusing on domestic and foreign property transactions.",
      icon: (
        <svg className="w-6 h-6 text-[#B57F50]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.09-.87 2.02-1.99 2.5-3.5.3-.94.5-1.94.5-3 0-5.52-4.48-10-10-10z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      id: "vision",
      title: "Our Vision",
      content:
        "Expanding our reach and becoming a global leader in housing development.",
      icon: (
        <svg className="w-6 h-6 text-[#B57F50]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    // {
    //   id: "core-values",
    //   title: "Core Values",
    //   content: "Authenticity • Stewardship • Opportunity",
    //   icon: (
    //     <svg className="w-6 h-6 text-[#B57F50]" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    //     </svg>
    //   ),
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <div className="bg-[#7C9343] py-20 px-4 md:px-6">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-14" variants={headerVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            whileHover={{ scale: 1.04 }}
          >
            Vision & Mission
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-100 mb-3 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Empowering families and building thriving communities through innovation, trust, and excellence.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-white to-[#B57F50] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 4, z: 50 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative bg-[#ffffff] rounded-3xl p-6 md:p-8 shadow-2xl border overflow-hidden"
                whileHover={{ boxShadow: "0 20px 40px rgba(180, 130, 100, 0.2)" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#fef0e3]/60 to-transparent rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-[#fef3e7]/40 rounded-full blur-xl"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-16 h-16 bg-[#fcd9c2]/30 rounded-full blur-lg"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: `${index * 0.5 + 0.2}s` }}
                />

                <div className="relative z-10 text-center">
                  <div className="flex justify-start mb-6">
                    <motion.div
                      className="p-2.5 bg-[#fcd9c2]/40 rounded-xl"
                      whileHover={{
                        scale: 1.15,
                        rotate: 10,
                        backgroundColor: "#fcd9c2",
                      }}
                    >
                      <span className="flex items-center justify-center">
                        {section.icon}
                      </span>
                    </motion.div>
                  </div>

                  <motion.h3
                    className="text-2xl font-semibold text-[#1A1D20] text-start mb-4"
                    whileHover={{ scale: 1.05, color: "#B57F50" }}
                  >
                    {section.title}
                  </motion.h3>

                  <motion.p
                    className="text-[13px] text-[#1A1D20] text-start leading-relaxed"
                    whileHover={{ color: "#5A5244" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  >
                    {section.content}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default VisionMissionComponent;
