// src/app/components/Stats.js
'use client';

import { useEffect, useState } from 'react';

const CounterItem = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center w-36 sm:w-40">
      <div className="text-2xl font-bold">{count}+</div>
      <div className="text-sm text-blue-200">{label}</div>
    </div>
  );
};

export default function Stats() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
      <CounterItem end={500} label="Partner Universities" />
      <CounterItem end={2500} label="Successful Doctors" />
      <CounterItem end={6500} label="Students" />
      <CounterItem end={25} label="Recruiting Countries" />
    </div>
  );
}
