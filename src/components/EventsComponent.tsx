import Image from "next/image";
import React from "react";
import image from "../assets/computer_illustration_1.png";

type Props = {};

const EventsComponent = (props: Props) => {
  return (
    <section className="w-[400px] h-fit p-2 bg-red-300">
      <Image src={image} alt="Event" className="w-auto h-auto object-contain" />
      <div>
        <div className="flex items-center justify-between">
          <p>Dr. Utsav Mehta</p>
          <p>2023-11-12</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae
          aliquid earum numquam iure debitis nesciunt quia ratione inventore
          nisi molestiae magnam ipsam, corporis magni in velit impedit officia
          eius?
        </p>
      </div>
    </section>
  );
};

export default EventsComponent;
