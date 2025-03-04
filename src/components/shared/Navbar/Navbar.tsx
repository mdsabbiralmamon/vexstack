import Button from "@/components/UI/Button/Button";
import Image from "next/image";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import styles from "./navbar.module.css";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Us",
      url: "/about",
    },
    {
      title: "Our Services",
      url: "/services",
    },
    {
      title: "How We Work",
      url: "/how-we-work",
    },
  ];

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
          <ul className="flex items-center gap-7">
            {navLinks.map((link, index) => (
              <a href={`${link.url}`} key={index}>
                <li
                  className={`${styles.navlinks} font-semibold text-white hover:font-bold`}
                >
                  {link.title}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div>
          <Button
            title="Contact Us"
            iconLeft={<FaPaperPlane />}
            containerClass="!py-2 !px-5 rounded-full font-semibold bg-purple-500 text-white btn border-none shadow-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
