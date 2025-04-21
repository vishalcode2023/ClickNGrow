import React from "react";

export default function AboutSection() {
  return (
    <div className="w-full bg-white">
      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        {/* Video/Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="31440c9030d1ab15a1151ff98c323e2a.png" // Replace with your image
            alt="About Us Video"
            className="rounded-lg w-full h-auto object-cover shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-blue-500 rounded-full p-4 shadow-lg hover:scale-110 transition">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* About Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            At Clickngro, we are a dynamic and forward-thinking technology
            company committed to transforming the digital landscape. Though we
            are a new force in the IT industry, our capabilities are vast and
            our vision is clear: to revolutionize businesses through innovative
            and future-proof software solutions.
            <br />
            <br />
            We specialize in solving complex challenges with cutting-edge
            technology, driven by a passionate team of experts dedicated to
            delivering results that exceed expectations.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition">
            Read More
          </button>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white py-16 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-40 h-40 bg-blue-400 opacity-20 rounded-full top-10 left-5 animate-pulse"></div>
          <div className="absolute w-52 h-52 bg-purple-500 opacity-10 rounded-full bottom-10 right-10 animate-ping"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-extrabold leading-snug tracking-wide">
            🚀 Ready to Skyrocket Your{" "}
            <span className="text-yellow-300">Business Growth?</span>
          </h3>
          <p className="text-white/90 max-w-xl text-sm md:text-base">
            Let’s collaborate and bring your vision to life with modern
            solutions tailored to your success. We’re here to support your
            digital journey every step of the way.
          </p>
          <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
