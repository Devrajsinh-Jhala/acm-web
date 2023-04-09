"use client";
import Image from "next/image";
import React, { ReactEventHandler, useRef } from "react";
import team from "../../assets/undraw_team_collaboration_re_ow29.svg";
import ProfileComponent from "@/components/ProfileComponent";
import { motion, useMotionValue } from "framer-motion";
import dummyImage from "../../assets/pc_guy.png";
import Link from "next/link";
import ShaktiMamImage from "../../assets/faculties/Shakti Mam.jpeg";
import DebabrataSirImage from "../../assets/faculties/Debabrata Sir.jpeg";

// Lead Members
import UtsavImage from "../../assets/leads/Utsav.jpeg";
import HardeepImage from "../../assets/leads/Hardeep.png";
import AyushImage from "../../assets/leads/Ayush.jpeg";
import DevanshuImage from "../../assets/leads/Devanshu.png";
import KevinImage from "../../assets/leads/Kevin.png";
import MonarchImage from "../../assets/leads/Monarch.png";
import VivekImage from "../../assets/leads/Vivek.png";
import RohitImage from "../../assets/leads/Rohit.png";
import ChaitanyaImage from "../../assets/leads/Chaitanya.png";
import PriyanshuImage from "../../assets/leads/Priyanshu.png";
import ManavImage from "../../assets/leads/Manav.png";
import YashImage from "../../assets/leads/Yash.png";
import VaishviImage from "../../assets/leads/Vaishvi.png";
import NehImage from "../../assets/leads/Neh.png";
import KahaanImage from "../../assets/leads/Kahaan.png";
import AhmedImage from "../../assets/leads/Ahmed.png";

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
    if (event.pageX >= 300) {
      x.set(event.pageX / 2);
    }
    if (event.pageX >= 600) {
      x.set(event.pageX / 3);
    }
    if (event.pageX >= 900) {
      x.set(event.pageX / 5.5);
    } else {
      x.set(event.pageX);
    }

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
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className="text-[28px] font-bold"
      >
        {name}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className="text-base mt-1"
      >
        {designation}
      </motion.p>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        style={{ x: x, y: y }}
        ref={imageRef}
        src={img}
        alt={name}
        width={144}
        height={144}
        className="w-[200px] h-[200px]  hidden absolute  rounded-full"
      />
    </Link>
  );
};

const LeadMember = ({ name, designation, img, link }: LeadMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
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
      <section className="my-14 overflow-x-hidden">
        <section className="flex lg:flex-row flex-col lg:items-center items-start px-10 lg:px-0 justify-between gap-10">
          <motion.div
            initial={{ x: -700 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <p className="text-[40px] leading-tight w-full lg:max-w-[450px] font-bold">
              Bringing technological awareness and empowering university geeks.
            </p>
            <p className="my-3 w-full lg:max-w-[450px]">
              Concentrating the ACM&apos;s motivation to build an ecosystem for
              the future of tech. With this mission, we are conducting seminars,
              building systems and bridging the gap between academia and
              industry.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="flex items-center justify-center align-middle text-center"
          >
            <Image
              src={team}
              className=""
              alt="Team"
              width={500}
              height={500}
            />
          </motion.div>
        </section>

        {/* Meet the minds that make it happen */}
        <section className=" my-28 px-10 lg:px-0 flex flex-col items-center font-bold">
          <h1 className="max-w-[500px] text-3xl md:text-[40px] leading-tight text-center">
            Meet the minds that make it happen
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              animation: "ease-in-out",
              transition: { duration: 1 },
            }}
            className="flex md:flex-row flex-col items-center gap-10 justify-center my-10"
          >
            <ProfileComponent
              image={ShaktiMamImage}
              name="Dr. Shakti Mishra"
              designation="H.O.D - Department of CSE"
              linkedInUrl="https://www.linkedin.com/in/shakti-mishra-20b64947/"
            />
            <ProfileComponent
              image={DebabrataSirImage}
              name="Dr. Debabrata Swain"
              designation="Faculty Sponsor"
              linkedInUrl="https://www.linkedin.com/in/dr-debabrata-swain-44980636/"
            />
          </motion.div>
        </section>

        {/* Meet the leads that make it happen */}
        <section className="-mt-5 flex px-10 lg:px-0 overflow-x-hidden flex-col items-center font-bold">
          <h1 className="max-w-[450px] text-3xl md:text-[40px] mb-10 leading-tight text-center">
            Meet the leads that make it happen
          </h1>
        </section>
        <div className="my-5 gap-5 px-10 lg:px-0 flex items-center">
          <div className="bg-secondary h-[2px] w-[3%] text-secondary" />
          <h1 className=" max-w-[150px] text-xl -mr-10 w-full font-semibold">
            The Leads
          </h1>

          <div className="bg-secondary h-[2px] w-full text-secondary" />
        </div>

        <section className="flex lg:flex-row flex-col px-10 lg:px-0 lg:gap-20">
          <section className="flex lg:flex-row flex-col items-start my-5 gap-10">
            {/* First Column */}
            <div className="flex flex-col gap-10 ">
              <LeadMember
                img={UtsavImage}
                name="Utsav Mehta"
                designation="Chairperson"
                link={"/"}
              />
              <LeadMember
                img={DevanshuImage}
                name="Devanshu Mehta"
                link={"/"}
                designation="Treasurer"
              />
              <LeadMember
                img={VivekImage}
                name="Vivek Sakariya"
                link={"/"}
                designation="Mobile Application"
              />
              <LeadMember
                img={PriyanshuImage}
                name="Priyanshu Malaviya"
                link={"/"}
                designation="AI and ML"
              />
              <LeadMember
                img={VaishviImage}
                name="Vaishvi Shah"
                link={"/"}
                designation="Documentation Head"
              />
            </div>
            {/* First Line */}
            <div className="bg-secondary text-secondary lg:h-[610px] h-[2px] lg:w-[2px] w-full " />
          </section>

          <section className="flex lg:flex-row flex-col items-start my-5 gap-16">
            {/* First Column */}
            <div className="flex flex-col gap-10 ">
              <LeadMember
                img={HardeepImage}
                name="Hardeep Patel"
                link={"/"}
                designation="Vice - Chairperson"
              />
              <LeadMember
                img={KevinImage}
                name="Kevin Patel"
                link={"/"}
                designation="Membership Chair"
              />
              <LeadMember
                img={RohitImage}
                name="Rohit Agarwal"
                link={"/"}
                designation="Competitive Programming"
              />
              <LeadMember
                img={ManavImage}
                name="Manav Ukani"
                link={"/"}
                designation="Publicity Head"
              />
              <LeadMember
                img={NehImage}
                name="Neh Patel"
                link={"/"}
                designation="Cyber Security"
              />
              <LeadMember
                img={AhmedImage}
                name="Ahmed Mulla"
                link={"/"}
                designation="Techinical Lead"
              />
            </div>
            {/* First Line */}
            <div className="bg-secondary text-secondary lg:h-[610px] h-[2px] lg:w-[2px] w-full " />
          </section>
          <section className="flex items-start my-5 gap-5">
            {/* First Column */}
            <div className="flex flex-col gap-10 ">
              <LeadMember
                img={AyushImage}
                name="Ayush Bhatt"
                link={"/"}
                designation="Secretary"
              />
              <LeadMember
                img={MonarchImage}
                name="Monarch Mistry"
                link={"/"}
                designation="Logistics Head"
              />
              <LeadMember
                img={ChaitanyaImage}
                name="Chaitanya Sheth"
                link={"/"}
                designation="Event Management"
              />
              <LeadMember
                img={YashImage}
                name="Yash Jobanputra"
                link={"/"}
                designation="Public Relations"
              />
              <LeadMember
                img={KahaanImage}
                name="Kahaan Patel"
                link={"/"}
                designation="Graphics and Designing"
              />
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Team;
