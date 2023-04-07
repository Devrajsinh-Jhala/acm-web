import Image from "next/image";
import React from "react";
import eventsHeroImage from "../../assets/undraw_events_re_98ue.svg";
import EventsComponent from "@/components/EventsComponent";

type Props = {};

const Events = (props: Props) => {
  return (
    <>
      <section>
        <div className="flex items-center my-14 justify-between gap-10">
          <div>
            <h1 className="text-[48px] leading-tight mb-6 font-bold">
              We conduct <span className="text-secondary">Events</span>{" "}
              periodically
            </h1>
            <p className="max-w-[450px]">
              Tech events are crucial for building a community of like-minded
              individuals, fostering learning and professional development, and
              promoting the exchange of ideas.
            </p>
          </div>
          <div>
            <Image
              src={eventsHeroImage}
              width={600}
              height={600}
              className="object-contain"
              alt="Events"
            />
          </div>
        </div>
      </section>
      <section className="my-20 flex flex-col gap-20">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-[40px] mb-5 font-semibold leading-tight text-center">
            Our Upcoming Events
          </h1>

          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1">
              <EventsComponent />
            </div>
            <div className="col-span-1">
              <EventsComponent />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-[40px] mb-5 font-semibold leading-tight text-center">
            Our Past Events
          </h1>

          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1">
              <EventsComponent />
            </div>
            <div className="col-span-1">
              <EventsComponent />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Events;
