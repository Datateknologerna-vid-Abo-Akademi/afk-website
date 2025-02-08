import React from "react";
import Image from "next/image";
import Welcome from "./welcome";
import Success from "./success";
import AFK from "./afk";

const Content = () => {
    return (
      <div className="bg-primary text-secondary" id="content">
        <Welcome />
        <AFK />
        <Success />
      </div>
    );
}

export default Content;