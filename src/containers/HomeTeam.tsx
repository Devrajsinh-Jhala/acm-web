"use client";
import ProfileComponent from "@/components/ProfileComponent";
import React from "react";
import dummyImage from "../assets/pc_guy.png";
import { motion } from "framer-motion";
import Hardeep from "../assets/leads/Hardeep.png";
import Utsav from "../assets/leads/Utsav.jpeg";
import Ayush from "../assets/leads/Ayush.jpeg";

type Props = {};

const HomeTeam = (props: Props) => {
  return (
    <section className="my-14 flex flex-col items-center justify-center">
      <motion.p
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="md:text-[48px] text-center text-4xl font-bold mt-5 mb-10"
      >
        Our Driving Minds
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center gap-10"
      >
        <ProfileComponent
          image={Utsav}
          name="Utsav Mehta"
          designation="Chairperson"
          linkedInUrl="https://www.linkedin.com/in/mehtautsav/"
        />
        <ProfileComponent
          image={Hardeep}
          name="Hardeep Patel"
          designation="Vice-Chairperson"
          linkedInUrl="https://www.linkedin.com/in/hardeep-patel/"
        />
        <ProfileComponent
          image={Ayush}
          name="Ayush Bhatt"
          designation="Secretary"
          linkedInUrl="https://www.linkedin.com/in/bhatt-ayush/"
        />
      </motion.div>
    </section>
  );
};

export default HomeTeam;
