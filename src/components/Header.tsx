"use client";
import React from "react";
import Button from "./Button";
import illustration from "../assets/computer_illustration_1.png";
import Image from "next/image";

import Typewriter from "typewriter-effect";
type Props = {};

const Header = (props: Props) => {
  return (
    <section className="flex items-center my-16 gap-20 justify-between">
      <div className="flex flex-col">
        <div className="text-[78px] text-secondary leading-[1] font-bold">
          <Typewriter
            options={{
              strings: ["Build", "Learn", "Innovate"],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />

          <p className="text-white">with us.</p>
        </div>
        <p className="mt-2 text-lg max-w-[600px]">
          Access top tech insights and knowledge through PDEU ACM&apos;s
          community-powered ecosystem.
        </p>
        <div className="mt-5">
          <Button buttonText="Checkout our Team" />
        </div>
      </div>
      <div>
        <Image
          src={illustration}
          className="object-contain"
          width={900}
          height={900}
          priority
          alt="Hero illustration"
        />
      </div>
    </section>
  );
};

export default Header;
