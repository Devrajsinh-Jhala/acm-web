import Image from "next/image";
import React from "react";
import image from "../assets/computer_illustration_1.png";
import Button from "./Button";

type Props = {};

const EventsComponent = (props: Props) => {
  return (
    <section className="w-[400px] h-fit p-3 rounded-2xl border-4 border-white">
      <Image src={image} alt="Event" className="w-auto h-auto object-contain" />
      <div className="mt-4 mb-2">
        <div className="flex text-secondary items-center justify-between">
          <p className="font-semibold">Dr. Utsav Mehta</p>
          <p>2023-11-12</p>
        </div>
        <p className="text-sm my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae
          aliquid earum numquam iure debitis nesciunt quia ratione inventore
          nisi molestiae magnam ipsam, corporis magni in velit impedit officia
          eius?
        </p>
        <Button buttonText="Register Now" />
      </div>
    </section>
  );
};

export default EventsComponent;
