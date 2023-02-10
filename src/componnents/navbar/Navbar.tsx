import { useState, useEffect } from 'react';
import Link from 'next/link';
import SecondaryBtn from '../button/SecondaryBtn';
import Cart from '../store/Cart';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  });

  return (
    <div className={scroll ? 'header scrolled' : 'header'}>
      <div className="header-container">
        <div className="flex justify-between items-center py-6">
          <div className="brand">
            <h1 className="text-4xl font-bold">
              <a href="/" className="logo hover:text-primary">
                Personal
              </a>
            </h1>
          </div>
          <div className={menu ? 'md:block showMenu' : 'md:hidden'}>
            <ul className="flex gap-6 items-center md:block transition-all duration-300">
              <li className="md:mb-2 md:text-2xl md:font-medium">
                <Link href="#about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li className="md:mb-2 md:text-2xl md:font-medium">
                <Link href="#experence" className="hover:text-primary">
                  Experence
                </Link>
              </li>
              <li className="md:mb-2 md:text-2xl md:font-medium">
                <Link href="#works" className="hover:text-primary">
                  Works
                </Link>
              </li>
              <li className="md:mb-2 md:text-2xl md:font-medium">
                <Link href="#contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li className="secondary-btn ml-3 md:ml-0 md:mt-5">
                <SecondaryBtn value="Resume" link="#" />
              </li>
              <li className="md:mb-2 md:text-2xl md:font-medium relative">
                <Cart />
              </li>
            </ul>
          </div>
          <div className={menu ? 'humburger hidden md:block relative w-7 h-7 open' : 'humburger hidden md:block relative w-7 h-7'}>
            <button onClick={() => setMenu(!menu)} type="button">
              <span className="w-6 h-1 bg-primary absolute block opacity-1 transition-all duration-300 mt-1 top-0"></span>
              <span className="w-6 h-1 bg-primary absolute block opacity-1 transition-all duration-300 mt-1 top-2"></span>
              <span className="w-6 h-1 bg-primary absolute block opacity-1 transition-all duration-300 mt-1 top-2"></span>
              <span className="w-6 h-1 bg-primary absolute block opacity-1 transition-all duration-300 mt-1 top-4"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
