import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import ACM from "../assets/ACM.png";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex items-center my-10 justify-between">
      <div>
        <p className=" capitalize font-bold">EMAIL</p>
        <a className="text-lg font-bold" href="mailto:acm.for.pdeu@gmail.com">
          acm.for.pdeu@gmail.com
        </a>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={ACM.src}
          alt="ACM Logo"
          className="w-28 h-28 object-contain"
          width={112}
          height={112}
        />
        <p className="text-center">Made with ❤ by ACM Web Team</p>
        <p className="text-center">© Copyright 2023 ACM PDEU</p>
      </div>
      <div className="">
        <p className="text-base">Follow us on:</p>
        <div className="mt-2 flex items-center justify-end gap-5">
          <BsInstagram className="text-2xl hover:scale-110 transition-all duration-300 cursor-pointer" />
          <BsLinkedin className="text-2xl hover:scale-110 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
