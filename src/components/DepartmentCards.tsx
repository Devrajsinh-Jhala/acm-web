"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  image: any;
};

const DepartmentCards = ({ title, description, image }: Props) => {
  return (
    <section className="flex max-w-[450px] w-full hover:scale-90 gap-10 transition-all duration-300 rounded-xl items-center justify-between px-5 py-3 text-light bg-yellow-700">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        className=""
      >
        <p className="sm:text-xl text-lg mb-3 font-bold">{title}</p>
        <p className="sm:text-sm text-xs">{description}</p>
      </motion.div>
      <motion.div
        initial={{ rotate: 0 }}
        whileInView={{
          rotate: 360,
          transition: { duration: 1 },
        }}
      >
        <Image
          src={image}
          alt="Web Development"
          className=" object-contain"
          width={350}
          height={350}
          priority
        />
      </motion.div>
    </section>
  );
};

export default DepartmentCards;
