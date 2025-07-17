
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex space-x-2 ${className}`}>
      <div className="bg-red text-white px-2 py-1 rounded text-sm font-bold">
        {String(timeLeft.days).padStart(2, '0')}d
      </div>
      <div className="bg-red text-white px-2 py-1 rounded text-sm font-bold">
        {String(timeLeft.hours).padStart(2, '0')}h
      </div>
      <div className="bg-red text-white px-2 py-1 rounded text-sm font-bold">
        {String(timeLeft.minutes).padStart(2, '0')}m
      </div>
      <div className="bg-red text-white px-2 py-1 rounded text-sm font-bold">
        {String(timeLeft.seconds).padStart(2, '0')}s
      </div>
    </div>
  );
};

export default CountdownTimer;
