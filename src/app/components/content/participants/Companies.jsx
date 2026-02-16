import React from "react";
import { Company, SelectedCompany } from "./SingleCompany";
import participants from "@/app/json/companies.json";
import { useState, useEffect } from "react";

/**
 * Companies component, used to display a list of all participating companies and the selected company. Contains the logic for selecting a company and displaying its details.
 * @returns JSX element including all companies
 */

const Companies = () => {
    const allCompanies = participants.companies;
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedCompanyDelay, setSelectedCompanyDelay] = useState(true);
    const [selectedCompanyHidden, setSelectedCompanyHidden] = useState(true);


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

    return (
        <div className="relative w-full flex flex-col">
            {/* Maintain height with a wrapping div */}
            <div className="grid grid-rows-[auto,1fr] max-h-[34rem] lg:max-h-[32rem] w-full">
                
                {/* Selected company div (Initially hidden but takes space) */}
                <div className={`absolute top-0 left-0 right-0 bottom-0 w-full transition-all overflow-auto duration-700 ease-in-out ${selectedCompanyHidden ? "scale-y-100 origin-top" : "scale-y-0 origin-top"}`}>
                    {selectedCompany && <SelectedCompany company={selectedCompany} id={selectedCompany.id} />}
                </div>
                {/* Back Button (Only visible when a company is selected) */}
                {selectedCompany && (
                    <button onClick={handleBack} className="absolute top-3 right-3 border border-blue-500/60 z-10 px-3 py-2 rounded-full transition-all delay-150 hover:bg-red-600/70 text-xs uppercase">
                        x
                    </button>
                )}

                {/* List of companies (Hides smoothly but retains space) */}
                <div className={`relative grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 overflow-y-auto overflow-x-hidden w-full transition-all duration-700 ease-in-out ${selectedCompany ? "scale-y-0 origin-bottom overflow-hidden" : "opacity-100 visible scale-100"}`}>
                    {allCompanies.map((company) => (
                        <Company company={company} key={company.id} handleClick={() => handleClick(company)} />
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Companies;