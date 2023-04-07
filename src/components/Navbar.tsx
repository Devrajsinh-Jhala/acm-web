"use client";
// ** DONE: Create an array to map through the list
// TODO: Replace the svgs with good ones
// TODO: Improve the Navbar
import React from "react";
import Image from "next/image";
import ACM from "../assets/ACM.png";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { BsFillSunFill } from "react-icons/bs";
import ToggleMode from "./ToggleMode";

type Props = {
  href: string;
  title: string;
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

const Navbar = () => {
  const Links = [
    { name: "Home", link: "" },
    { name: "Team", link: "team" },
    { name: "Events", link: "events" },
    { name: "Blogs", link: "blogs" },
    { name: "Contact Us", link: "contact" },
  ];
  return (
    <nav className="flex items-center justify-between  py-3">
      <div className="flex items-center gap-6">
        <Link href={"/"} className="cursor-pointer">
          <Image
            src={ACM.src}
            alt="ACM Logo"
            className="h-20 w-20 object-contain"
            width={40}
            height={40}
          />
        </Link>
        <ul className="flex items-center gap-10">
          {Links.map((link, index) => (
            <CustomLink key={index} href={`/${link.link}`} title={link.name} />
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-6">
        {/* <Image
          src={user}
          alt="User Profile"
          width={25}
          height={25}
          className="object-contain"
        /> */}
        <CgProfile className="object-contain h-8 w-8 cursor-pointer" />
        {/* <Image
          src={sun}
          alt="Dark Mode Theme"
          width={25}
          height={25}
          className="object-contain"
        /> */}
        <ToggleMode />
      </div>
    </nav>
  );
};

export default Navbar;
