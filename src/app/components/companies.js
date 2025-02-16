import React, { use } from "react";
import {Company, SelectedCompnany} from "./company";
import companies from "../json/companies.json";
import { useState, useEffect } from "react";

const Companies = () => {
    const successCompanies = companies.success;
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedCompanyDelay, setSelectedCompanyDelay] = useState(true);
    const [selectedCompanyHidden, setSelectedCompanyHidden] = useState(true);


    useEffect(() => {
        console.log(selectedCompany);
    }, [selectedCompany]);

    const handleClick = (company) => {
        setSelectedCompany(company);
    };

    const handleBack = () => {
        setSelectedCompany(null);
    };

    useEffect(() => {
        if (selectedCompany) {
            setSelectedCompanyHidden(true);
        } else {
            setSelectedCompanyHidden(false);
        }
    }, [selectedCompany]);

    useEffect(() => {
        console.log(selectedCompanyHidden);
    }, [selectedCompanyHidden]);


    return (
        <div className="relative w-full flex flex-col">
            {/* Maintain height with a wrapping div */}
            <div className="grid grid-rows-[auto,1fr] max-h-[30rem] w-full">
                
                {/* Selected company div (Initially hidden but takes space) */}
                <div className={`absolute top-0 left-0 right-0 bottom-0 w-full transition-all overflow-auto duration-700 ease-in-out ${selectedCompanyHidden ? "scale-y-100 origin-top" : "scale-y-0 origin-top"}`}>
                    {selectedCompany && <SelectedCompnany company={selectedCompany} id={selectedCompany.id} />}
                </div>
                {/* Back Button (Only visible when a company is selected) */}
                {selectedCompany && (
                    <button onClick={handleBack} className="absolute top-2 right-2 bg-gray-800 text-white z-4 px-2 rounded-lg transition-all delay-500 hover:bg-gray-700 text-2xl">
                        x 
                    </button>
                )}

                {/* List of companies (Hides smoothly but retains space) */}
                <div className={`relative grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 overflow-y-auto overflow-x-hidden w-full transition-all duration-700 ease-in-out ${selectedCompany ? "scale-y-0 origin-bottom overflow-hidden" : "opacity-100 visible scale-100"}`}>
                    {successCompanies.map((company) => (
                        <Company company={company} key={company.id} handleClick={() => handleClick(company)} />
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Companies;