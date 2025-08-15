// src/app/components/Stats.js
'use client';

import React, { useEffect, useState } from 'react';

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

  return React.createElement(
    'div',
    { className: 'text-center w-36 sm:w-40' },
    React.createElement('div', { className: 'text-2xl font-bold' }, `${count}+`),
    React.createElement('div', { className: 'text-sm text-blue-200' }, label)
  );
};

export default function Stats() {
  return React.createElement(
    'div',
    { className: 'mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8' },
    React.createElement(CounterItem, { end: 500, label: 'Partner Universities' }),
    React.createElement(CounterItem, { end: 2500, label: 'Successful Doctors' }),
    React.createElement(CounterItem, { end: 6500, label: 'Students' }),
    React.createElement(CounterItem, { end: 25, label: 'Recruiting Countries' })
  );
}
