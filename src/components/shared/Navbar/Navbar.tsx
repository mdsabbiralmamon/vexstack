import Button from "@/components/UI/Button/Button";
import Image from "next/image";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

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
    <nav className="flex items-center justify-between">
      <div>
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
              <li>{link.title}</li>
            </a>
          ))}
        </ul>
      </div>
      <div>
        <Button
          title="Contact Us"
          icon={<FaPaperPlane />}
          bgColor="bg-purple-500"
          textColor="text-white"
          containerClass={{
            padding: "10px 30px",
            borderRadius: "999px",
            cursor: "pointer",
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
