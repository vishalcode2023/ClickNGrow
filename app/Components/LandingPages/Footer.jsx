import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-20 border-t shadow-sm">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/Logo/Logo.png" alt="ClickNGro Logo" className="w-24 h-24" />
            <h1 className="font-bold text-blue-600 text-lg">CLICKNGRO</h1>
          </div>
          <p className="text-sm mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="text-sm">@Company.com</p>
        </div>

        {/* About Section */}
        <div className="flex-1">
          <h3 className="font-semibold mb-3">About us</h3>
          <ul className="text-sm space-y-2">
            <li>Capability</li>
            <li>Insights</li>
            <li>News</li>
            <li>Why Us</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex-1">
          <h3 className="font-semibold mb-3">Contact us</h3>
          <p className="text-sm mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="text-sm mb-4">+9000 0000 000</p>
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
        Copyright © 2025 Company All rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
