import React from "react";
import WhatIs from "./what_is";
import Image from "next/image";
import { ImageTextLeft, ImageTextRight } from "./imageText";

const AFK = () => {
    return (
        <div className="" id="afk">
            <ImageTextLeft imagesrc="/images/afk24-crowd.jpg" imagealt="AFK presentation" imageheight={1063} imagewidth={1600} title="What can you expect as a company attending AFK?" text="As a company you can expect to chat and connect with students from all over the country who study information technology at either Åbo Akademi University or Turku University."/>
            <ImageTextRight imagesrc="/images/afk24-presentation.jpg" imagealt="AFK presentation" imageheight={1063} imagewidth={1600} title="What can you expect as a student attending AFK?" text="As a student you can expect to chat and connect with companies from all over the country who are looking for new employees. You can also attend presentations and workshops held by the companies."/>
        </div>
    );
}

export default AFK;