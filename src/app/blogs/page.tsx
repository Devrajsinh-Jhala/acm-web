import React from "react";
import blogImage from "../../assets/blog-svgrepo-com.svg";
import Image from "next/image";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <section>
      <div className="flex items-center my-8 justify-between gap-20">
        <div>
          <h1 className="text-[48px] mb-6 font-bold">Checkout our blogs</h1>
          <p className="max-w-[600px]">
            Blogs serve as a platform for sharing knowledge and expertise, and
            keeping up-to-date with the latest trends and developments. They
            provide a space for thought leadership, building personal brand, and
            fostering community engagement.
          </p>
          <p className="max-w-[600px]">
            We pubish blogs on many topics ranging from DSA to Development, You
            can filter your choice below and read as you please.
          </p>
        </div>
        <div>
          <Image
            src={blogImage}
            width={500}
            height={500}
            className="object-contain"
            alt="Hero Blog"
          />
        </div>
      </div>
    </section>
  );
};

export default Blogs;