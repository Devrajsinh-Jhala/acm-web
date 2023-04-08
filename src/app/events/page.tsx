"use client";
import Image from "next/image";
import React from "react";
import eventsHeroImage from "../../assets/undraw_events_re_98ue.svg";
import EventsComponent from "@/components/EventsComponent";
import { motion } from "framer-motion";

type Props = {};

const Events = (props: Props) => {
  return (
    <>
      <section>
        <div className="flex md:flex-row flex-col px-10 lg:px-0 items-center my-14 justify-between gap-10">
          <motion.div
            initial={{ x: -700 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <h1 className="text-[48px] leading-tight mb-6 font-bold">
              We conduct <span className="text-secondary">Events</span>{" "}
              periodically
            </h1>
            <p className="max-w-[450px]">
              Tech events are crucial for building a community of like-minded
              individuals, fostering learning and professional development, and
              promoting the exchange of ideas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
          >
            <Image
              src={eventsHeroImage}
              width={600}
              height={600}
              className="object-contain"
              alt="Events"
            />
          </motion.div>
        </div>
      </section>
      <section className="my-20 flex flex-col px-10 lg:px-0 gap-20">
        <section className="flex flex-col items-center justify-center">
          <h1 className="lg:text-[40px] text-3xl mb-5 font-semibold leading-tight text-center">
            Our <span className="text-secondary">Upcoming</span> Events
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className="grid md:grid-cols-2 grid-cols-1 gap-10"
          >
            <div className="col-span-1">
              <EventsComponent />
            </div>
            <div className="col-span-1">
              <EventsComponent />
            </div>
          </motion.div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <h1 className="lg:text-[40px] text-3xl mb-5 font-semibold leading-tight text-center">
            Our <span className="text-secondary">Past</span> Events
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <div className="col-span-1">
              <EventsComponent />
            </div>
            <div className="col-span-1">
              <EventsComponent />
            </div>
          </motion.div>
        </section>
      </section>
    </>
  );
};

export default Events;
