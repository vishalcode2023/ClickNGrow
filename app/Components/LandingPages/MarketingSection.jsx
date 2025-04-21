import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DigitalMarketingLayout() {
  const logos = [
    { src: "/Logo/Logo.png", alt: "Groupe Lauzon" },
    { src: "/Images/onyx_logo_-1.png", alt: "Arbour Volkswagen" },
    { src: "/Images/onyx_logo2 (1).png", alt: "Mercedes-Benz" },
    { src: "/Images/onyx_logo3 (1).png", alt: "Mazda" },
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* Partners Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full py-5 px-4 md:px-5 text-black"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 w-[90%] m-auto px-4 md:px-20">
          {/* Static Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Our Partners
            </h3>
          </motion.div>

          {/* Scrolling Logos */}
          <div className="w-full md:w-2/3 overflow-hidden relative flex justify-center items-center">
            <div className="flex animate-scroll-x whitespace-nowrap">
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={80}
                  className="w-[100px] sm:w-[120px] h-[80px] mx-3 sm:mx-6 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Service 1 */}
          <div className=" bg-white p-6 md:p-8 rounded-lg transform transition-transform hover:scale-105 h-80 flex flex-col justify-between">
            <div className="mb-4 md:mb-6">
              <div className="flex items-center justify-center">
                <img
                  src="/photo-1674027001834-719c347d1eca.avif"
                  alt="SEO Icon"
                  className="object-cover rounded-2xl w-full h-40"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold">
              Search <br />
              Engine Optimization
            </h3>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 md:p-8 rounded-lg transform transition-transform hover:scale-105 h-80 flex flex-col justify-between">
            <div className="mb-4 md:mb-6">
              <div className="flex items-center justify-center">
                <img
                  src="/photo-1611162617213-7d7a39e9b1d7.avif"
                  alt="SEO Icon"
                  className="object-cover rounded-2xl w-full h-40"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold">
              Social Media <br />
              Marketing
            </h3>
          </div>

          {/* Heading */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-center p-4 md:p-6 h-80">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-4 md:mb-6">
              Our Digital Marketing{" "}
              <span className="text-blue-400">Expertise</span>
            </h2>
            <p className="text-xs sm:text-lg md:text-xl text-gray-500 mb-4 md:mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor Lorem ipsum dolor sit
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm transform transition-transform hover:scale-105 h-80 flex flex-col justify-between">
            <div className="mb-4 md:mb-6">
            <div className="flex items-center justify-center">
                <img
                  src="/photo-1596725858508-70543890c732.avif"
                  alt="SEO Icon"
                  className="object-cover rounded-2xl w-full h-40"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold">
              Video Editing & <br />
              Production
            </h3>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm transform transition-transform hover:scale-105 h-80 flex flex-col justify-between">
            <div className="mb-4 md:mb-6">
            <div className="flex items-center justify-center">
                <img
                  src="/photo-1519337265831-281ec6cc8514.avif"
                  alt="SEO Icon"
                  className="object-cover rounded-2xl w-full h-40"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold">
              Content <br />
              Writing
            </h3>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm transform transition-transform hover:scale-105 h-80 flex flex-col justify-between">
            <div className="mb-4 md:mb-6">
            <div className="flex items-center justify-center">
                <img
                  src="/photo-1457305237443-44c3d5a30b89.avif"
                  alt="SEO Icon"
                  className="object-cover rounded-2xl w-full h-40"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold">
              Web <br />
              Development
            </h3>
          </div>
        </div>
      </div>

      {/* Optional: Add tailwind animation for scroll */}
      <style jsx>{`
        .animate-scroll-x {
          animation: scroll-x 20s linear infinite;
        }

        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}