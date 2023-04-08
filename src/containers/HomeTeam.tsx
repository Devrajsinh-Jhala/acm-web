"use client";
import ProfileComponent from "@/components/ProfileComponent";
import React from "react";
import dummyImage from "../assets/pc_guy.png";
import { motion } from "framer-motion";

type Props = {};

const HomeTeam = (props: Props) => {
  return (
    <section className="my-14 flex flex-col items-center justify-center">
      <motion.p
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="md:text-[48px] text-4xl font-bold mt-5 mb-10"
      >
        Our Driving Minds
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center gap-10"
      >
        <ProfileComponent
          image={dummyImage}
          name="Utsav Mehta"
          designation="Chairperson"
        />
        <ProfileComponent
          image={dummyImage}
          name="Hardeep Patel"
          designation="Vice-Chairperson"
        />
        <ProfileComponent
          image={dummyImage}
          name="Ayush Bhatt"
          designation="Secretary"
        />
      </motion.div>
    </section>
  );
};

export default HomeTeam;
