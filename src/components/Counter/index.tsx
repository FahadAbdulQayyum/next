import React, { useEffect, useState } from 'react';

interface CounterProps {
    targetDate: Date;  // Expecting a Date object as a prop
}

const Counter: React.FC<CounterProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = targetDate.getTime() - now.getTime();  // Convert Date objects to timestamps (milliseconds)

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(interval);  // Cleanup on unmount
    }, [targetDate]);

    return (
        <div className="flex items-center space-x-4">
            <span className="flex flex-col"><small className="font-semibold">Days</small><h1 className="text-5xl font-bold font-sans">{timeLeft.days}</h1></span>
            <span className="text-tertiary text-4xl font-semibold mt-2">:</span>
            <span className="flex flex-col"><small className="font-semibold">Hours</small><h1 className="text-5xl font-bold font-sans">{timeLeft.hours}</h1></span>
            <span className="text-tertiary text-4xl font-semibold mt-2">:</span>
            <span className="flex flex-col"><small className="font-semibold">Minutes</small><h1 className="text-5xl font-bold font-sans">{timeLeft.minutes}</h1></span>
            <span className="text-tertiary text-4xl font-semibold mt-2">:</span>
            <span className="flex flex-col"><small className="font-semibold">Seconds</small><h1 className="text-5xl font-bold font-sans">{timeLeft.seconds}</h1></span>
        </div>
    );
};

export default Counter;
