import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import ACM from "../assets/ACM.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex lg:flex-row flex-col relative px-10 lg:px-0 items-center space-y-5 justify-between my-10">
      <div>
        <p className=" capitalize font-bold">EMAIL</p>
        <a className="text-lg font-bold" href="mailto:acm.for.pdeu@gmail.com">
          acm.for.pdeu@gmail.com
        </a>
      </div>
      <div className="flex flex-col lg:absolute mt-0 lg:left-[40%] items-center">
        <Link href={"/"}>
          <Image
            src={ACM.src}
            alt="ACM Logo"
            className="w-28 h-28 object-contain"
            width={112}
            height={112}
          />
        </Link>
        <p className="text-center">Made with ❤ by ACM Web Team</p>
        <p className="text-center">© Copyright 2023 ACM PDEU</p>
      </div>
      <div className="">
        <p className="text-base">Follow us on:</p>
        <div className="mt-2 flex items-center justify-center lg:justify-end gap-5">
          <a
            href="https://instagram.com/acm_pdeu?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="text-2xl hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/company/acm-pdeu-student-chapter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="text-2xl hover:scale-110 transition-all duration-300 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
