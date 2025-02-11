import React from "react";
import Image from "next/image";
import Welcome from "./welcome";
import Success from "./success";
import AFK from "./afk";

const Content = () => {
    return (
      <div className="bg-primary text-secondary" id="content">
        <Welcome />
        <div className="mx-28">
          <AFK />
          <Success />
        </div>
      </div>
    );
}

export default Content;