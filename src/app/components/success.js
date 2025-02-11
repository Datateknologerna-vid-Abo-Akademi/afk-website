"use client"
import React, { useEffect } from 'react';
import Company from './company';
import companies from '../json/companies.json';

const Success = () => {
    const successCompanies = companies.success
    return (
        <div className="px-10 pb-10" id="success">
            <div className="text-justify p-4" id="what-is">
                <h1 className="text-3xl mb-2">Previous AFK Success stories</h1>
                <h2 className="text-xl mb-2">AFK 2024</h2>
                <p className="text-md mb-2">AFK 2024 was a great success with 12 companies from across the country and over 200 attending students over the day, examples on companies include zoobers and scoobers from planet zoink, woopiers glass development from planet wooker and gibblygobbly engineering from planet wooomper scoomper</p>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                {successCompanies.map((company) => <Company company={company} key={company.id}/>)}
            </div>
        </div>
    )
}

export default Success;