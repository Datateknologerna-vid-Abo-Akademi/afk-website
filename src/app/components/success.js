"use client"
import React, { useEffect } from "react";
import Companies from "./companies";

const Success = () => {
    return (
        <div id="success">
            <div id="what-is">
                <h1 className="text-3xl mb-2">AFK in the past</h1>
                <h2 className="text-xl mb-2">AFK 2024</h2>
                <p className="text-md mb-2">AFK 2024 was a great success with 12 companies from across the country and over 200 attending students over the day, examples on companies include zoobers and scoobers from planet zoink, woopiers glass development from planet wooker and gibblygobbly engineering from planet wooomper scoomper</p>
            </div>
            <div className="mt-7">
                <h1 className="text-xl mb-2">List of attending companies:</h1>
                <Companies />
            </div>
        </div>
    )
}

export default Success;