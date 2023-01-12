import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

export default function componentName() {
  return (
    <>
      <section className="about-wrapper py-20" id="about">
        <div className="container">
          <div>
            <h2 className="text-4xl font-medium">About Me</h2>
            <div className="flex justify-between mt-6 gap-10 md:block">
              <div>
                <p className="font-normal text-black md:text-md mb-6">
                  Hello! My name is Hello Nepal and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p className="font-normal text-black md:text-md mb-6">
                  Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of
                  clients.
                </p>
                <p className="font-normal text-black md:text-md mb-6">Here are a few technologies I’ve been working with recently:</p>
                <ul className="grid grid-cols-2 space-y-2 w-2/3 md:w-full md:mb-10">
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    HTMl/HTML5
                  </li>
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    CSS/CSS3
                  </li>
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    Javascript
                  </li>
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    Typescript
                  </li>
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    React js
                  </li>
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    Next js
                  </li>
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    SASS
                  </li>
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    Material Ui
                  </li>
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    Bootstrap
                  </li>
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    Tailwind CSS
                  </li>
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    JQuery
                  </li>
                  <li className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-primary">
                    <FaCaretRight />
                    WordPress
                  </li>
                </ul>
              </div>
              <div className="relative max-w-xs md:max-w-full rounded-xl">
                <img src="/../profile.jpg" alt="profile" className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
