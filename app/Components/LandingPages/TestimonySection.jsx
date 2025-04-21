import React from "react";
import { motion } from "framer-motion";

const testimonies = [
  {
    name: "Lorem Ipsum",
    role: "Founder, ClickNgrow",
    text: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lorem Ipsum",
    role: "Founder, ClickNgrow",
    text: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Lorem Ipsum",
    role: "Founder, ClickNgrow",
    text: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const TestimonySection = () => {
  return (
    <div className="w-full bg-white">
      {/* Top CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-800 via-blue-700 to-indigo-900 text-white py-24 px-6 text-center">
        {/* Decorative Glowing Elements */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
            Want to see more about Us?
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-blue-100 mb-8"
        >
          Discover how we're transforming ideas into powerful solutions.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
        >
          Get Started
        </motion.a>
      </div>

      {/* Testimonials Section */}
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Testimonies
          </span>
        </motion.h3>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonies.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dots or indicators */}
        <div className="mt-12 flex justify-center gap-2">
          <span className="w-3 h-1 bg-blue-500 rounded-full"></span>
          <span className="w-3 h-1 bg-purple-300 rounded-full"></span>
          <span className="w-3 h-1 bg-purple-300 rounded-full"></span>
        </div>
      </section>
    </div>
  );
};

export default TestimonySection;
