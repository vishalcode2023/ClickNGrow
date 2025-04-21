'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = ['Home', 'Capabilities', 'News', 'Insights', 'Why Us']

  return (
    <nav className="bg-white shadow-md fixed top-0 py-2 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 mt-3">
          <Image src="/Logo/Logo.png" alt="ClickNGro" width={35} height={35} className='w-28 h-28 object-center' />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((link, i) => (
            <Link
              key={i}
              href="#"
              className="text-blue-700 font-medium hover:text-blue-500 transition"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          {links.map((link, i) => (
            <Link
              key={i}
              href="#"
              className="block py-2 text-blue-700 font-medium border-b border-gray-100"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
