import DepartmentCards from "@/components/DepartmentCards";
import React from "react";
import react from "../assets/departments/react-svgrepo-com.svg";
import android from "../assets/departments/android-color-svgrepo-com.svg";
import security from "../assets/departments/worldwide-security-svgrepo-com.svg";
import cp from "../assets/departments/python-127-svgrepo-com.svg";
import ai from "../assets/departments/robots-svgrepo-com.svg";
import documentation from "../assets/departments/color-blocks-documentation-svgrepo-com.svg";

type Props = {};

const DepartmentContainers = (props: Props) => {
  return (
    <div className="my-20 px-10 flex flex-col items-center justify-center">
      <h1 className="text-center text-[40px] font-bold my-5">
        Our <span className="text-secondary">Technical</span> departments
      </h1>
      <section className=" grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="col-span-1">
          <DepartmentCards
            title="Web Development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam veritatis enim nemo, soluta eius deleniti molestiae sed fugiat laudantium."
            image={react}
          />
        </div>
        <div className="col-span-1">
          <DepartmentCards
            title="App Development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam veritatis enim nemo, soluta eius deleniti molestiae sed fugiat laudantium."
            image={android}
          />
        </div>
        <div className="col-span-1">
          <DepartmentCards
            title="Cyber Security"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam veritatis enim nemo, soluta eius deleniti molestiae sed fugiat laudantium."
            image={security}
          />
        </div>
        <div className="col-span-1">
          <DepartmentCards
            title="Competitive Programming"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam veritatis enim nemo, soluta eius deleniti molestiae sed fugiat laudantium."
            image={cp}
          />
        </div>
        <div className="col-span-1">
          <DepartmentCards
            title="AI and ML"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam veritatis enim nemo, soluta eius deleniti molestiae sed fugiat laudantium."
            image={ai}
          />
        </div>
        <div className="col-span-1">
          <DepartmentCards
            title="Documentation"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam veritatis enim nemo, soluta eius deleniti molestiae sed fugiat laudantium."
            image={documentation}
          />
        </div>
      </section>
    </div>
  );
};

export default DepartmentContainers;
