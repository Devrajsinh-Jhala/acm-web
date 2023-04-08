import ProfileComponent from "@/components/ProfileComponent";
import React from "react";
import dummyImage from "../assets/pc_guy.png";

type Props = {};

const HomeTeam = (props: Props) => {
  return (
    <section className="my-14 flex flex-col items-center justify-center">
      <p className="md:text-[48px] text-4xl font-bold mt-5 mb-10">
        Our Driving Minds
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
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
      </div>
    </section>
  );
};

export default HomeTeam;
