import React, { use } from "react";
import {Company, SelectedCompnany} from "./company";
import companies from "../json/companies.json";
import { useState, useEffect } from "react";

const Companies = () => {
    const successCompanies = companies.success;
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedCompanyDelay, setSelectedCompanyDelay] = useState(false);

    useEffect(() => {
        console.log(selectedCompany);
    }, [selectedCompany]);

    const handleClick = (company) => {
        setSelectedCompany(company);
        setTimeout(() => {
            setSelectedCompanyDelay(true);
        }, 300); // Matches the transition duration
    };

    const handleBack = () => {
        setSelectedCompanyDelay(false);
        setTimeout(() => {
            setSelectedCompany(null);
        }, 300); // Matches the transition duration
    };

    const companyFilter = (company) => {
        if (selectedCompany) {
            const isSelected = company.id === selectedCompany.id;
            return !isSelected;
        } else{
            return true;
        }
    }
    return (
        <div className="relative w-full flex flex-col transition-all duration-300 ease-in-out">
            {/* Maintain height with a wrapping div */}
            <div className="grid grid-rows-[auto,1fr] max-h-[30rem] w-full transition-all duration-300 ease-in-out">
                
                {/* Selected company div (Initially hidden but takes space) */}
                <div className={`absolute inset-0 w-full transition-all duration-300 ease-in-out ${selectedCompany ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`}>
                    {selectedCompany && <SelectedCompnany company={selectedCompany} id={selectedCompany.id} />}
                </div>
                {/* Back Button (Only visible when a company is selected) */}
                {selectedCompany && (
                    <button onClick={handleBack} className="absolute top-2 right-2  bg-gray-800 text-white z-4 px-2 rounded-lg transition-all duration-300 hover:bg-gray-700 text-2xl">
                        x 
                    </button>
                )}

                {/* List of companies (Hides smoothly but retains space) */}
                <div className={`relative grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 overflow-y-auto overflow-x-hidden w-full transition-all duration-300 ease-in-out ${selectedCompany ? "opacity-0 invisible scale-95" : "opacity-100 visible scale-100"}`}>
                    {successCompanies.map((company) => (
                        <Company company={company} key={company.id} handleClick={() => handleClick(company)} />
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Companies;