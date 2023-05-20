import React from 'react';
import useCountDown from './useCountDown';

const CountDown = ({ dayTime }: { dayTime: string }) => {
  const cur = new Date().getTime();
  const target = new Date(dayTime).getTime();
  const extra = target - cur;
  const [time] = useCountDown(extra);
  console.log(time);
  if (extra < 0) {
    return <div>已到</div>;
  }
  const obj = formatTxt(time);
  const str = `${obj.day}天${obj.hour}:${obj.min}:${obj.second}`;
  return (
    <div>
      <div>{str}</div>
    </div>
  );
};

const formatTxt = (v: number) => {
  const day = Math.floor(v / (1000 * 60 * 60 * 24));
  const dayExt = v % (1000 * 60 * 60 * 24);
  const hour = Math.floor(dayExt / (1000 * 60 * 60));
  const hourExt = dayExt % (1000 * 60 * 60);
  const min = Math.floor(hourExt / (1000 * 60));
  const minExt = hourExt % (1000 * 60);
  const second = Math.floor(minExt / 1000);
  return { day, hour, min, second };
};

export default CountDown;
