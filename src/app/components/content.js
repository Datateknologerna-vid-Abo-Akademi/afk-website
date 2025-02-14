import React from "react";
import Image from "next/image";
import Welcome from "./welcome";
import WelcomeMobile from "./welcomeMobile";
import Success from "./success";
import About from "./about";
import Organizers from "./organizers";
import Form from "./form";

const Content = () => {
    return (
      <div className="bg-primary text-black" id="content">
        <div className="sm:mb-10 sm:flex hidden">
          <Welcome />
        </div>
        <div className="sm:hidden flex">
          <WelcomeMobile />
        </div>
        <div className="max-w-5xl mb-10 sm:px-14 px-8 bg-white rounded-md mx-4">
          <div className="pt-10">
            <About />
          </div>
          <div className="pt-10">
            <Organizers />
          </div>
          <div className="pt-10 pb-10">
            <Success />
          </div>
          <div className="pb-10">
            <Form />
          </div>
        </div>
      </div>
    );
}

export default Content;