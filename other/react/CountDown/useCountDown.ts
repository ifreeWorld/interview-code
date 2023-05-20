import { useState, useRef, useEffect } from 'react';

const useCountDown = (value: number) => {
  const [time, setTime] = useState(value);
  const timer = useRef<NodeJS.Timer>();
  useEffect(() => {
    if (time > 1000) {
      timer.current = setTimeout(
        (t) => {
          setTime(t - 1000);
        },
        1000,
        time
      );
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, [time]);
  return [time];
};

export default useCountDown;
