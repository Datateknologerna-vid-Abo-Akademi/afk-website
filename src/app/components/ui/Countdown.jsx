"use client"

import React, { useEffect, useState } from "react";

/**
 * Countdown component, used to display the time left until the event starts. Takes a target date as a prop and updates every second until it reaches 0.
 * @param {*} param0 - targetDate: the date and time of the event in a format that can be parsed by the Date constructor (e.g. "2026-09-15T09:00:00")
 * @returns a component that displays the time left until the event starts in the format "Xd Xh Xm Xs"
 */

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference =
            new Date(targetDate).getTime() - new Date().getTime();
        return Math.max(0, difference);
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = calculateTimeLeft();
            setTimeLeft(remaining);

            if (remaining === 0) {
                clearInterval(timer); // Stop when it reaches 0
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Convert milliseconds to readable time
    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    return (
        <div className="tracking-[0.12em]">
                {days}d 
                <span className="font-semibold text-blue-500"> - </span> 
                {hours}h
                <span className="font-semibold text-blue-500"> - </span> 
                {minutes}m
                <span className="font-semibold text-blue-500"> - </span> 
                {seconds}s
        </div>
    );
};

export default Countdown;
