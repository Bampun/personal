import React from 'react';
import SecondaryBtn from '../componnents/button/SecondaryBtn';

export default function contact() {
  return (
    <>
      <section className="contact-wrapper py-20 bg-background">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="max-w-md">
              <h4 className="text-primary text-lg mb-3 text-center">What next?</h4>
              <h2 className="text-4xl font-medium mb-4 text-center">Get In Touch</h2>
              <div className="">
                <p className="text-center font-normal text-black md:text-xl">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
              </div>
              <div className="flex justify-center mt-5">
                <SecondaryBtn value="Say hello" link="mailto:exmple@gmail.com" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
