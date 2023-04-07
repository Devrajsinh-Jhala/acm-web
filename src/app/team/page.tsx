"use client";
import Image from "next/image";
import React, { ReactEventHandler, useRef } from "react";
import team from "../../assets/undraw_team_collaboration_re_ow29.svg";
import ProfileComponent from "@/components/ProfileComponent";
import { motion, useMotionValue } from "framer-motion";
import dummyImage from "../../assets/pc_guy.png";
import Link from "next/link";

type Props = {};
type LeadMemberProps = {
  name: string;
  designation: string;
  img: any;
  link: any;
};
type MovingImageProps = {
  name: string;
  img: any;
  link: any;
  designation: string;
};

const FramerImage = motion(Image);

// ** Making the image move with pointer while on the lead section ** //
const MovingImage = ({ name, img, link, designation }: MovingImageProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const imageRef = useRef<any>(null);

  function handleMouseMove(event: any) {
    imageRef.current.style.display = "inline";
    x.set(event.pageX);
    y.set(-50);
  }
  function handleMouseLeave(event: any) {
    imageRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      href={link}
    >
      <p className="text-[28px] font-bold">{name}</p>
      <p className="text-base mt-1">{designation}</p>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        style={{ x: x, y: y }}
        ref={imageRef}
        src={img}
        alt={name}
        width={144}
        height={144}
        className="w-36 h-36 border-4 border-dark dark:border-light p-3 hidden absolute object-contain rounded-full"
      />
    </Link>
  );
};

const LeadMember = ({ name, designation, img, link }: LeadMemberProps) => {
  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImage
        name={name}
        img={img}
        link={link}
        designation={designation}
      />
    </motion.div>
  );
};

const Team = (props: Props) => {
  return (
    <>
      <section className="my-14">
        <section className="flex items-center justify-between gap-10">
          <div>
            <p className="text-[40px] leading-tight max-w-[450px] font-bold">
              Bringing technological awareness and empowering university geeks.
            </p>
            <p className="my-3 max-w-[450px]">
              Concentrating the ACM&apos;s motivation to build an ecosystem for
              the future of tech. With this mission, we are conducting seminars,
              building systems and bridging the gap between academia and
              industry.
            </p>
          </div>
          <div>
            <Image
              src={team}
              className=""
              alt="Team"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* Meet the minds that make it happen */}
        <section className=" my-28 flex flex-col items-center font-bold">
          <h1 className="max-w-[500px] text-[40px] leading-tight text-center">
            Meet the minds that make it happen
          </h1>
          <div className="flex items-center gap-10 justify-center my-10">
            <ProfileComponent
              image=""
              name="Dr. Shakti Mishra"
              designation="H.O.D - Department of CSE"
            />
            <ProfileComponent
              image=""
              name="Dr. Debabrata Swain"
              designation="Faculty Sponsor"
            />
          </div>
        </section>

        {/* Meet the leads that make it happen */}
        <section className="-mt-5 flex flex-col items-center font-bold">
          <h1 className="max-w-[450px] text-[40px] mb-10 leading-tight text-center">
            Meet the leads that make it happen
          </h1>
        </section>
        <div className="my-5 gap-5 flex items-center">
          <div className="bg-secondary h-[2px] w-[3%] text-secondary" />
          <h1 className=" max-w-[150px] text-xl -mr-10 w-full font-semibold">
            The Leads
          </h1>

          <div className="bg-secondary h-[2px] w-full text-secondary" />
        </div>

        <section className="flex gap-20">
          <section className="flex items-start my-5 gap-10">
            {/* First Column */}
            <div className="flex flex-col gap-10 ">
              <LeadMember
                img={dummyImage}
                name="Utsav Mehta"
                designation="Chairperson"
                link={"/"}
              />
              <LeadMember
                img={dummyImage}
                name="Devanshu Mehta"
                link={"/"}
                designation="Treasurer"
              />
              <div>
                <p className="text-[28px] font-bold">Vivek Sakariya</p>
                <p className="text-base mt-1">Mobile Application</p>
              </div>
              <div>
                <p className="text-[28px] font-bold">Priyanshu Malaviya</p>
                <p className="text-base mt-1">AI & ML</p>
              </div>
              <div>
                <p className="text-[28px] font-bold">Neh Patel</p>
                <p className="text-base mt-1">Cyber Security</p>
              </div>
            </div>
            {/* First Line */}
            <div className="bg-secondary text-secondary h-[500px] w-[2px] " />
          </section>

          <section className="flex items-start my-5 gap-16">
            {/* First Column */}
            <div className="flex flex-col gap-10 ">
              <div>
                <p className="text-[28px] font-bold">Hardeep Patel</p>
                <p className="text-base mt-1">Vice Chairperson</p>
              </div>
              <div>
                <p className="text-[28px] font-bold">Kevin Patel</p>
                <p className="text-base mt-1">Membership Chair</p>
              </div>
              <div>
                <p className="text-[28px] font-bold">Rohit Agarwal</p>
                <p className="text-base mt-1">Competitive Programming</p>
              </div>
              <div>
                <p className="text-[28px] font-bold">Manav Ukani</p>
                <p className="text-base mt-1">Publicity Head</p>
              </div>
              <div>
                <p className="text-[28px] font-bold">Vaishvi Shah</p>
                <p className="text-base mt-1">Documentation Head</p>
              </div>
            </div>
            {/* First Line */}
            <div className="bg-secondary text-secondary h-[500px] w-[2px] " />
          </section>
          <section className="flex items-start my-5 gap-5">
            {/* First Column */}
            <div className="flex flex-col gap-10 ">
              <div>
                <p className="text-[28px] font-bold">Ayush Bhatt</p>
                <p className="text-base mt-1">Secretary</p>
              </div>
              <div>
                <p className="text-[28px] font-bold">Monarch Mistry</p>
                <p className="text-base mt-1">Logistics Head</p>
              </div>
              <div>
                <p className="text-[28px] font-bold">Chaintanya Sheth</p>
                <p className="text-base mt-1">Event Management</p>
              </div>
              <div>
                <p className="text-[28px] font-bold">Yash Jobanputra</p>
                <p className="text-base mt-1">Public Relations</p>
              </div>
              <div>
                <p className="text-[28px] font-bold">Kahaan Patel</p>
                <p className="text-base mt-1">Graphics and Designing</p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Team;
