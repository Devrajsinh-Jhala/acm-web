import Image from "next/image";
import React from "react";
import image from "../assets/computer_illustration_1.png";
import Button from "./Button";

type Props = {
  image: any;
  speaker: string;
  date: string;
  description: string;
  registrationLink?: string;
};

const EventsComponent = ({
  image,
  speaker,
  date,
  description,
  registrationLink,
}: Props) => {
  return (
    <section className="md:w-[400px] w-full h-fit p-3 rounded-2xl border-4 hover:scale-90 transition-all duration-300 border-dark dark:border-light">
      <img src={image} alt="Event" className="w-auto h-fit object-cover" />
      <div className="mt-4 mb-2">
        <div className="flex text-secondary items-center justify-between">
          <p className="font-semibold">{speaker}</p>
          <p>{date}</p>
        </div>
        <p className="text-sm my-2">{description}</p>
        {registrationLink ? <Button buttonText="Register Now" /> : <div></div>}
      </div>
    </section>
  );
};

export default EventsComponent;
