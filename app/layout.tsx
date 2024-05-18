"use client";

import { useState, useEffect, useRef, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.png';
import LOGO2 from '../public/logo-2.png';
import HAMBURGER from '../public/hamburger.png';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <header className="w-full h-21 bg-[#08272c] items-center justify-between fixed hidden lg:flex px-[5%] py-[1%] font-didact uppercase">
          <Image src={Logo} alt="Logo" width={100} height={100} />
          <ul className="flex gap-4 relative">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="text-white uppercase flex items-center gap-1">
                Services <span>▼</span>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full w-[27rem] bg-[#e2e4e4] shadow-lg mt-6 z-10 rounded-md justify-evenly">
                  <li className="px-4 py-2 hover:bg-[#065060] text-black text-center hover:text-white"><Link href="/services/service1">Walls & Borders</Link></li>
                  <li className="px-4 py-2 hover:bg-[#065060] text-black text-center hover:text-white"><Link href="/services/service2">Pavers</Link></li>
                  <li className="px-4 py-2 hover:bg-[#065060] text-black text-center hover:text-white"><Link href="/services/service3">Steps & Treads</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className="btn font-didact text-white">(508) 527-8391</div>
        </header>

        <header className="w-full h-20 flex bg-white justify-between items-center fixed lg:hidden px-4">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <Image src={HAMBURGER} alt="Menu" width={50} height={50} />
          </button>
          {menuOpen && (
            <ul className="absolute top-full left-0 w-full bg-black text-white shadow-lg flex flex-col items-center">
              <li className="w-full text-center py-2 border-b hover:bg-[#08272c]"><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li className="w-full text-center py-2 border-b hover:bg-[#08272c]"><Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
              <li className="w-full text-center py-2 border-b hover:bg-[#08272c]">
                <button onClick={toggleDropdown} className="w-full flex items-center justify-center gap-1 hover:bg-[#08272c]">
                  Services <span>▼</span>
                </button>
                {dropdownOpen && (
                  <ul className="w-full bg-[#08272c] text-white shadow-lg mt-2">
                    <li className="px-4 py-2 border-b hover:bg-[#065060]"><Link href="/services/service1" onClick={() => setMenuOpen(false)}>Service 1</Link></li>
                    <li className="px-4 py-2 border-b hover:bg-[#065060]"><Link href="/services/service2" onClick={() => setMenuOpen(false)}>Service 2</Link></li>
                    <li className="px-4 py-2 border-b hover:bg-[#065060]"><Link href="/services/service3" onClick={() => setMenuOpen(false)}>Service 3</Link></li>
                  </ul>
                )}
              </li>
              <li className="w-full text-center py-2 border-b hover:bg-[#08272c]"><Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
              <li className="w-full text-center py-2 border-b hover:bg-[#08272c]"><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          )}
        </header>

        <main>
          {children}
        </main>

        <footer className="flex w-full lg:h-[13rem] bg-[#08272c] text-white px-[5%] font-didact uppercase justify-center items-start py-[3rem] flex-wrap lg:flex-col gap-5">
          <div className="flex lg:flex-1 flex-col justify-center items-center">
            <Image src={LOGO2} alt="Logo" width={180} height={150} />
          </div>
          <div className="flex lg:flex-1 flex-col text-center justify-center self-center">
            <ul>
              <li>How to DIY</li>
              <li>Careers - We&apos;re Hiring</li>
              <li>We respect your privacy. Read our Privacy Policy</li>
            </ul>
          </div>
          <div className="flex lg:flex-1 flex-col justify-start self-end">
            <h5 className="text-xl -mb-[.1rem]">Sign Up for Savings</h5>
            <input type="text" placeholder="Email Address" className="px-[.8rem] py-[.2rem] text-black" />
            <button className="border border-[#ccc] mt-2 px-[1rem] py-[.2rem]">Sign Up</button>
          </div>
        </footer>
      </body>
    </html>
  );
}
