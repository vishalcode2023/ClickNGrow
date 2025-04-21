import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <div className="w-[90%] m-auto min-h-screen px-4 py-16 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">
        Our <span className="text-gray-800">Vision and Mission</span>
      </h2>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center mb-16 space-y-6 md:space-y-0 md:space-x-10"
      >
        <img
          src="/dbec8a9a159de464fcfd6a91f455f79a.jpg"
          alt="Mission"
          className="w-full md:w-1/2 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
        />
        <div className="md:w-1/2 bg-white bg-opacity-70 p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4 text-blue-600">
            <Target className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold">Our Mission</h3>
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            Our mission is to empower businesses with transformative IT solutions
            that are not only effective today but also future-ready. We focus on
            crafting scalable, secure, and intuitive software solutions that
            address our clients’ most pressing challenges. At Clickngro, we strive
            to bridge the gap between business needs and technological
            advancements, helping our partners thrive in an ever-evolving digital
            world.
          </p>
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10"
      >
        <div className="md:w-1/2 bg-white bg-opacity-70 p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4 text-blue-600">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold">Our Vision</h3>
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            Our vision is to be a global leader in IT innovation, continuously
            pushing the boundaries of what’s possible. We aim to build long-term
            relationships with our clients by providing them with powerful
            solutions that adapt to the rapidly changing technological landscape.
            By staying ahead of the curve and embracing the latest industry
            trends, we envision a future where Clickngro plays a pivotal role in
            shaping the future of business technology worldwide.
          </p>
        </div>
        <img
          src="/eb9a19de129d914d6b449fe4b98e5855.jpg"
          alt="Vision"
          className="w-full md:w-1/2 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </div>
  );
};

export default VisionMission;
