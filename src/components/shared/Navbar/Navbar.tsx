"use client";
import Button from "@/components/UI/Button/Button";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import styles from "./navbar.module.css";
import { PiCirclesThreeBold } from "react-icons/pi";
import { GiThreePointedShuriken } from "react-icons/gi";
import gsap from "gsap";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference for GSAP animation

  const navLinks = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Our Services", url: "/services" },
    { title: "How We Work", url: "/how-we-work" },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Use GSAP for animations
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: -1000,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <nav className={`${styles.navbar} fixed top-0 left-0 right-0 z-50`}>
      <div className="flex items-center justify-between !py-5 !px-10 shadow-lg">
        <div className="cursor-pointer">
          <Image
            src="/images/logo/vex-stack.png"
            alt="VexStack Digital"
            width={100}
            height={100}
          />
        </div>
        <div className="flex items-center justify-end">
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link, index) => (
              <Link href={link.url} key={index}>
                <li
                  className={`${styles.navlinks} font-semibold text-white hover:font-bold`}
                >
                  {link.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <Button
            title="Contact Us"
            iconLeft={<FaPaperPlane />}
            containerClass="!py-2 !px-5 rounded-full font-semibold bg-purple-500 text-white btn border-none shadow-none hidden md:flex text-nowrap"
          />
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden text-purple-500 font-bold text-2xl ${
              isOpen
                ? styles.rotate + " " + styles.rotateOpen
                : styles.rotate + " " + styles.rotateClose
            }`}
          >
            {isOpen ? <PiCirclesThreeBold /> : <GiThreePointedShuriken />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef}
        className="absolute top-5 left-0 right-30 z-50 bg-white bg-opacity-80 text-purple-500 !px-5 !py-10 flex flex-col gap-7 opacity-0 translate-y-[-20px] rounded-br-2xl"
      >
        <div className="cursor-pointer">
          <Image
            src="/images/logo/vex-stack.png"
            alt="VexStack Digital"
            width={100}
            height={100}
          />
        </div>
        {navLinks.map((link, index) => (
          <Link href={link.url} key={index}>
            <li className={`font-semibold !text-purple-500 list-none`}>
              {link.title}
            </li>
          </Link>
        ))}
        <div>
          <Button
            title="Contact Us"
            iconLeft={<FaPaperPlane />}
            containerClass="!py-2 !px-5 rounded-full font-semibold bg-purple-500 text-white btn border-none shadow-none text-nowrap"
          />
        </div>
        <div>© 2021 VexStack Digital. All Rights Reserved.</div>
      </div>
    </nav>
  );
};

export default Navbar;
