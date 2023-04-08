"use client";
import React from "react";
import server from "../assets/free-svg-illustration-hosting.svg";
import rocket from "../assets/free-svg-illustration-rocket.svg";
import Image from "next/image";
import Button from "@/components/Button";
import { motion } from "framer-motion";

type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <section className="my-28 flex flex-col items-center justify-center gap-y-24">
      <section className="flex flex-col px-10 lg:px-0 md:flex-row gap-10 items-center justify-between">
        <motion.div
          initial={{ x: -700 }}
          animate={{ x: 0 }}
          whileInView={{ animation: "ease-in-out" }}
          className="flex flex-col gap-y-5"
        >
          <p className="md:text-[26px] text-xl">
            Computing is not about{" "}
            <span className="text-secondary">computers</span>; it is about
            living and using computer science to tackle societal challenges.
          </p>
          <Button buttonText="Learn more about ACM" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        >
          <Image
            src={server}
            alt="Hosting"
            width={1700}
            height={1700}
            className="object-contain"
          />
        </motion.div>
      </section>
      <section className="flex flex-col px-10 lg:px-0 md:flex-row gap-10 items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ animation: "ease-in-out" }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <Image
            src={rocket}
            alt="Rocket Illustration"
            width={1300}
            height={900}
            className="object-contain "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="flex flex-col gap-y-5"
        >
          <p className="md:text-[26px] text-xl">
            Participating in events is a great way to expand your network, learn
            new skills, and gain valuable experience. Don&apos;t miss out on the
            opportunity to connect with like-minded individuals and enhance your
            personal and professional growth.
          </p>
          <Button buttonText="Learn more about ACM Events" />
        </motion.div>
      </section>
    </section>
  );
};

export default HomeContainer;
