import { useState, useEffect } from 'react';
import type { CountdownValues } from '@/types';

const TARGET_DATE = new Date('2026-11-01T00:00:00+07:00').getTime();

export function useCountdown(): CountdownValues {
  const [timeLeft, setTimeLeft] = useState<CountdownValues>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

function calculateTimeLeft(): CountdownValues {
  const now = Date.now();
  const difference = TARGET_DATE - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
