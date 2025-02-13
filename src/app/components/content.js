import React from "react";
import Image from "next/image";
import Welcome from "./welcome";
import Success from "./success";
import About from "./about";
import Organizers from "./organizers";

const Content = () => {
    return (
      <div className="bg-primary text-black" id="content">
        <Welcome />
        <div className="mx-20 my-10 px-10 bg-white rounded-md">
          <div className="pt-10">
            <About />
          </div>
          <div className="pt-10 pb-10">
            <Organizers />
          </div>
          <div className="pb-10">
            <Success />
          </div>
        </div>
      </div>
    );
}

export default Content;