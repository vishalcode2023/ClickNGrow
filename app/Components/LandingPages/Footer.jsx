import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-20 border-t shadow-sm">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/Logo/logo.png" alt="ClickNGro Logo" className="w-24 h-24" />
            <h1 className="font-bold text-blue-600 text-lg">CLICKNGRO</h1>
          </div>
          <p className="text-sm mb-2">
            ClickNGro is your go-to platform for streamlining product launches, simplifying customer engagement, and accelerating business growth.
          </p>
          <p className="text-sm">info@clickngro.com</p>
        </div>

        {/* About Section */}
        <div className="flex-1">
          <h3 className="font-semibold mb-3">About us</h3>
          <ul className="text-sm space-y-2">
            <li>Capability – Explore how we empower businesses with scalable tech.</li>
            <li>Insights – Learn from our research, reports, and blogs.</li>
            <li>News – Stay updated on recent developments and launches.</li>
            <li>Why Us – Discover what makes ClickNGro different and trusted.</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex-1">
          <h3 className="font-semibold mb-3">Contact us</h3>
          <p className="text-sm mb-2"><strong>Technical Head:</strong> Shailesh P</p>
          <p className="text-sm mb-2"><strong>Marketing Strategy:</strong> Premkumar – 9035477777</p>
          <p className="text-sm mb-4"><strong>Email:</strong> info@clickngro.com</p>
          <div className="flex gap-3">
            <a href="#"><FaFacebookF className="w-8 h-8 p-2 rounded-full bg-black text-white hover:bg-blue-600" /></a>
            <a href="#"><FaInstagram className="w-8 h-8 p-2 rounded-full bg-black text-white hover:bg-pink-600" /></a>
            <a href="#"><FaTwitter className="w-8 h-8 p-2 rounded-full bg-black text-white hover:bg-blue-400" /></a>
            <a href="#"><FaLinkedinIn className="w-8 h-8 p-2 rounded-full bg-black text-white hover:bg-blue-700" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t mt-10 pt-4 text-center text-sm text-gray-600">
        Copyright © 2025 ClickNGro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
