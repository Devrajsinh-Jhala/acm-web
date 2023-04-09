"use client";
import React from "react";
import blogImage from "../../assets/blog-svgrepo-com.svg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <section>
      <div className="flex px-10 lg:px-0 lg:flex-row flex-col items-center my-8 justify-between gap-20">
        <motion.div
          initial={{ x: -700 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[48px] mb-6 font-bold">Checkout our blogs</h1>
          <p className="max-w-[600px]">
            Blogs serve as a platform for sharing knowledge and expertise, and
            keeping up-to-date with the latest trends and developments. They
            provide a space for thought leadership, building personal brand, and
            fostering community engagement.
          </p>
          <p className="max-w-[600px]">
            We pubish blogs on many topics ranging from DSA to Development, You
            can filter your choice below and read as you please.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={blogImage}
            width={500}
            height={500}
            className="object-contain"
            alt="Hero Blog"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
