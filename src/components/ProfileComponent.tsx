import Image from "next/image";
import React from "react";
import { BsLinkedin } from "react-icons/bs";

type Props = {
  image: any;
  name: string;
  designation: string;
  linkedInUrl: string;
};

const ProfileComponent = ({ image, name, designation, linkedInUrl }: Props) => {
  return (
    <section className="flex flex-col items-center">
      <Image
        src={image?.src}
        alt={name}
        className="rounded-full object-contain hover:scale-90 transition-all duration-300 h-48 w-48 bg-red-300"
        width={500}
        height={500}
      />
      <p className="mt-4 font-bold text-xl">{name}</p>
      <p className="mt-1 text-sm">{designation}</p>
      <div className="mt-4 text-lg cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </section>
  );
};

export default ProfileComponent;
