"use client"
import React, { useEffect } from 'react';
import Companies from './companies';

const Success = () => {
    return (
        <div className="px-10 pb-10" id="success">
            <div className="p-4" id="what-is">
                <h1 className="text-3xl mb-2">Previous AFK Success stories</h1>
                <h2 className="text-xl mb-2">AFK 2024</h2>
                <p className="text-md mb-2">AFK 2024 was a great success with 12 companies from across the country and over 200 attending students over the day, examples on companies include zoobers and scoobers from planet zoink, woopiers glass development from planet wooker and gibblygobbly engineering from planet wooomper scoomper</p>
            </div>
            <Companies />
        </div>
    )
}

export default Success;