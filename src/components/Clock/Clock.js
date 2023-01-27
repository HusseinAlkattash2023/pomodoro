import React, { useContext, useEffect } from "react";
import "./Clock.css";
import {StateContext} from '../StateProvider';

const Clock = () => {
  const { time, setTime , isActive , setIsActive , initTime } = useContext(StateContext);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, isActive, setTime]);

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const restartTime = ()=> {
    setTime(initTime);
    setIsActive(false)
  }
  
  return (
    <div className="clock">
      <h3>{getTime(time)}</h3>
      {time !== 0 && <button onClick={toggleActive}>{isActive ? "pause" : "start"}</button>}
      {time === 0 && <button onClick={restartTime}>restart</button> }
    </div>
  );
};

export default Clock;
