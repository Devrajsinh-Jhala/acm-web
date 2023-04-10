"use client";
// ** DONE: Create an array to map through the list
// TODO: Replace the svgs with good ones
// TODO: Improve the Navbar
import React, { useState } from "react";
import Image from "next/image";
import ACM from "../assets/ACM.png";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import ToggleMode from "./ToggleMode";
import { useRouter } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

type Props = {
  href: string;
  title: string;
  toggleButton?: any;
};
const CustomLink = ({ href, title }: Props) => {
  return (
    <Link href={href} className="relative group">
      {title}
      <span className="h-[1px] inline-block w-0 group-hover:w-full transition-[width] ease duration-300 bg-dark dark:bg-light absolute left-0 -bottom-0.5">
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, toggleButton }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
    toggleButton();
  };
  return (
    <button onClick={() => handleClick()} className="relative group">
      {title}
      <span className="h-[1px] inline-block w-0 group-hover:w-full transition-[width] ease duration-300 bg-dark dark:bg-light absolute left-0 -bottom-0.5">
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleNavbarClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const Links = [
    { name: "Home", link: "" },
    { name: "Team", link: "team" },
    { name: "Events", link: "events" },
    { name: "Blogs", link: "blogs" },
    { name: "Contact Us", link: "contact" },
  ];
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="md:flex items-center hidden justify-between px-10 lg:px-0 py-3">
        <div className="flex items-center gap-6">
          <Link href={"/"} className="cursor-pointer">
            <Image
              src={ACM.src}
              alt="ACM Logo"
              className="h-20 w-20 object-contain"
              width={40}
              height={40}
              priority
            />
          </Link>
          <ul className="flex items-center gap-10">
            {Links.map((link, index) => (
              <li key={index}>
                <CustomLink
                  key={index}
                  href={`/${link.link}`}
                  title={link.name}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {/* <CgProfile className="object-contain h-8 w-8 cursor-pointer" /> */}

          <ToggleMode />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="relative px-10 flex md:hidden justify-between items-center py-3">
        <Link href={"/"} className="cursor-pointer">
          <Image
            src={ACM.src}
            alt="ACM Logo"
            className="h-20 w-20 object-contain"
            width={40}
            height={40}
          />
        </Link>
        <div>
          <BiMenu
            onClick={() => handleNavbarClick()}
            className={`${isNavbarOpen ? "hidden" : "block"} text-2xl`}
          />
          <AiOutlineClose
            onClick={() => handleNavbarClick()}
            className={`${isNavbarOpen ? "block" : "hidden"} text-2xl`}
          />
        </div>
        {isNavbarOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-[70vw] w-full flex flex-col justify-between z-10 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 text-light dark:bg-light/90 dark:text-dark rounded-xl backdrop-blur-sm"
          >
            <nav className="md:hidden items-center flex flex-col justify-between  py-3">
              <div className="flex flex-col items-center gap-6">
                <ul className="flex flex-col items-center gap-5">
                  {Links.map((link, index) => (
                    <CustomMobileLink
                      key={index}
                      href={`/${link.link}`}
                      title={link.name}
                      toggleButton={handleNavbarClick}
                    />
                  ))}
                </ul>
              </div>
              <div className="flex items-center my-4 gap-6">
                {/* <CgProfile
                  onClick={() => {
                    setIsNavbarOpen(!isNavbarOpen);
                  }}
                  className="object-contain h-8 w-8 cursor-pointer"
                /> */}

                <ToggleMode />
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
