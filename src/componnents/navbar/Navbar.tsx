import { useState } from 'react';
import Link from 'next/link';
import SecondaryBtn from '../button/SecondaryBtn';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
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
            <ul className="flex gap-6 items-center">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experence" className="hover:text-primary">
                  Experence
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-primary">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li className="secondary-btn ml-3">
                <SecondaryBtn value="Resume" link="/resume" />
              </li>
            </ul>
          </div>
          <div className="humburger hidden md:block relative w-7 h-7">
            <Link href="#" onClick={() => setMenu(!menu)}>
              <span className="w-6 h-1 bg-primary absolute block opacity-1 translate-x-1 mt-1 top-0"></span>
              <span className="w-6 h-1 bg-primary absolute block opacity-1 translate-x-1 mt-1 top-2"></span>
              <span className="w-6 h-1 bg-primary absolute block opacity-1 translate-x-1 mt-1 top-4"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
