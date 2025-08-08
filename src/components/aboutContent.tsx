"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useAnimation,
  type Variants,
  type Easing,
} from "framer-motion";

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const easeOutCubic: Easing = [0.33, 1, 0.68, 1];

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.98, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.1, ease: easeOutCubic },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: easeOutCubic },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 35, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, delay: 0.2, ease: easeOutCubic },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 md:px-16 pb-9 md:pb-16">
      <section
        ref={ref}
        className="bg-white py-10 md:py-12 lg:py-16 rounded-[16px]"
      >
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div className="relative overflow-hidden rounded shadow cursor-pointer">
                <Image
                  src="/court1.jpg"
                  alt="Estate Picture"
                  width={570}
                  height={350}
                  className="w-full h-[350px] md:h-[450px] lg:h-[600px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Text Section */}
            <div className="flex flex-col space-y-5">
              <motion.div
                className="text-[26px] capitalize font-bold text-[#7C9343] tracking-tight ml-2"
                initial="hidden"
                animate={controls}
                variants={titleVariants}
              >
                About Prosperealty Limited
              </motion.div>

              <motion.div
                className="space-y-6 bg-white p-6 rounded-xl shadow-md"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
                  },
                }}
              >
                <motion.p className="text-gray-600 leading-relaxed" variants={textVariants}>
                  <span className="text-[14px] md:text-[16px] flex flex-col gap-4">
                    <span>
                      <span className="font-bold text-[#7C9343]">
                        Prosperealty Company Limited
                      </span>{" "}
                      (RC: 7938121) is dedicated to empowering families by
                      providing access to secure and thriving communities—where you can own
                      your dream home or build your business with confidence.
                    </span>
                    <span>
                      We value excellence, integrity, and the ability to consistently deliver
                      professional, innovative real estate solutions.
                    </span>
                    <span>
                      Your satisfaction is our top priority at every step. Our clients return—and
                      recommend us—because we support them from enquiry to ownership and beyond.
                    </span>
                  </span>
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
