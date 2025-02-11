import React from "react";
import Image from "next/image";
import Welcome from "./welcome";
import Success from "./success";
import AFK from "./afk";

const Content = () => {
    return (
      <div className="bg-primary text-black" id="content">
        <Welcome />
        <div className="mx-20 my-10 bg-white rounded-md">
          <AFK />
          <Success />
        </div>
      </div>
    );
}

export default Content;