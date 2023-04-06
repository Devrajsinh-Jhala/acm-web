import Image from "next/image";
import React from "react";
import contact from "../../assets/undraw_contact_us_re_4qqt.svg";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="my-10">
      <section className="flex items-center justify-between gap-16">
        <form className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-1 items-start justify-start">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="px-4 py-2 w-full placeholder:text-gray-400 rounded-lg text-sm text-gray-800 focus:outline-none "
              placeholder="Please enter your Name..."
            />
          </div>
          <div className="flex flex-col gap-1 items-start justify-start">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              className="px-4 py-2 placeholder:text-gray-400 w-full rounded-lg text-sm text-gray-800 focus:outline-none "
              placeholder="Please enter your Email..."
            />
          </div>
          <div className="flex flex-col gap-1 items-start justify-start">
            <label htmlFor="name">Messages</label>
            <textarea
              rows={6}
              cols={30}
              className="px-4 py-2 resize-none placeholder:text-gray-400 rounded-lg text-sm text-gray-800 focus:outline-none "
              placeholder="Please enter your Name..."
            />
          </div>

          <input
            type="submit"
            value="Submit Message"
            className="bg-secondary cursor-pointer text-sm font-bold py-2 px-6 rounded-lg"
          />
        </form>
        <div>
          <Image
            src={contact}
            alt="Contact"
            className="object-contain"
            width={800}
            height={800}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
