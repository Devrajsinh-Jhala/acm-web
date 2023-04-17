import DepartmentCards from "@/components/DepartmentCards";
import React from "react";
import react from "../assets/departments/react-svgrepo-com.svg";
import android from "../assets/App.png";
import security from "../assets/Cyber.png";
import cp from "../assets/CP.png";
import ai from "../assets/AI.png";
import documentation from "../assets/Documentation.png";

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
            description="Starting from the G(old) PHP to mordern MERN all under one roof."
            image={react}
          />
        </div>
        <div className="col-span-1">
          <DepartmentCards
            title="App Development"
            description="The department behind the campus-wide famous 'Connect application' (The local LinkedIn)."
            image={android}
          />
        </div>
        <div className="col-span-1">
          <DepartmentCards
            title="Cyber Security"
            description="The department protecting all over other departments (but virtually)."
            image={security}
          />
        </div>
        <div className="col-span-1">
          <DepartmentCards
            title="Competitive Programming"
            description="Bringing the skill to edge without which you cannot be MAANG engineer."
            image={cp}
          />
        </div>
        <div className="col-span-1">
          <DepartmentCards
            title="AI and ML"
            description="The department trying to achieve the ChatGPT software of its own."
            image={ai}
          />
        </div>
        <div className="col-span-1">
          <DepartmentCards
            title="Documentation"
            description="The department framing the local constitution of the student chapter."
            image={documentation}
          />
        </div>
      </section>
    </div>
  );
};

export default DepartmentContainers;
