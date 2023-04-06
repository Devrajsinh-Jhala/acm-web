import Image from "next/image";
import React from "react";
import eventsHeroImage from "../../assets/undraw_events_re_98ue.svg";
import EventsComponent from "@/components/EventsComponent";

type Props = {};

/*
TODO
1. Cards on the Home page and their respective pages
2. Backend Integration with Sanity and Comments functionality
3. Event Cards and Email JS connect

*/

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
      <section className="my-20">
        <section>
          <h1 className="text-[40px] font-semibold leading-tight text-center">
            Our Upcoming Events
          </h1>
          <div>
            <EventsComponent />
          </div>
        </section>
        <h1>Past Events</h1>
      </section>
    </>
  );
};

export default Events;
