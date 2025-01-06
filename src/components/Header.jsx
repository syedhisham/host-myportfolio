import React, { useState, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { gsap } from "gsap";
import HorizontalLine from "./HorizontalLine";

const Header = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEnvelop, setShowEnvelop] = useState(false);
  const [showHeading, setShowHeading] = useState(true);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const toggleEnvelop = () => {
    setShowEnvelop((prev) => !prev);
    setShowHeading((prev) => !prev);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:syedhishamshah49@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "https://wa.me/923038144158";
  };

  const toggleWhatsapp = () => {
    setShowPhone((prev) => {
      const newState = !prev;
      if (newState) {
        gsap.to(emailRef.current, { x: -115, duration: 0.4 });
      } else {
        gsap.to(emailRef.current, { x: 0, duration: 0.4 });
      }
      return newState;
    });
  };

  return (
    <header className={`relative  text-white`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <div className="h-8">
          <div className={`${showHeading ? "block" : "hidden"} w-full`}>
            <h1 className="text-lg md:text-2xl font-bold">Syed Hisham Shah</h1>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center space-x-4">
          <div
            className="flex items-center relative"
            ref={emailRef}
            onClick={handleEmailClick}
          >
            <FaEnvelope className={`text-white`} />
            <span className={`ml-2 text-white cursor-pointer`}>
              syedhishamshah49@gmail.com
            </span>
          </div>

          <div className={`flex items-center relative`} ref={phoneRef}>
            <FaWhatsapp className={`text-white`} />
            <span
              className={`ml-2 text-white cursor-pointer`}
              onClick={handlePhoneClick}
            >
              +923038144158
            </span>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden absolute right-0 flex items-center space-x-3 p-5">
          <div
            className="relative flex justify-center items-center"
            ref={emailRef}
          >
            <FaEnvelope
              className={`text-white cursor-pointer`}
              onClick={toggleEnvelop}
            />
            {showEnvelop && (
              <div
                className={`absolute left-0 transition-all duration-700 ease-in-out transform -translate-x-full p-2 cursor-pointer`}
                onClick={handleEmailClick}
              >
                syedhishamshah27@gmail.com
              </div>
            )}
          </div>

          <div
            className="relative flex justify-center items-center"
            ref={phoneRef}
          >
            <FaWhatsapp
              className={`text-white cursor-pointer`}
              onClick={toggleWhatsapp} 
            />
            {showPhone && (
              <div
                className="absolute left-0 transition-all duration-700 ease-in-out transform -translate-x-full p-2 cursor-pointer"
                onClick={handlePhoneClick}
              >
                +923038144158
              </div>
            )}
          </div>
        </div>
      </div>
      <HorizontalLine />
    </header>
  );
};

export default Header;
