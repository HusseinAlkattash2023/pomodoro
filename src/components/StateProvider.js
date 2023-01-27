

/* this is context api for state management */

import React, { createContext, useState , useEffect } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {

  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(20 * 60);
  const [initTime, setInitTime] = useState(0);
  const [activeTag, setActiveTag] = useState(0);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(30);
  const [isActive, setIsActive] = useState(false);

  const [changeColor , setChangeColor] = useState(0)

  const [changeFont , setChangeFont] = useState(0)

  useEffect(()=> {
    switch(activeTag ){
        case 0:
            setTime(pomodoroTime);
            setInitTime(pomodoroTime);
            break;
        case 1:
            setTime(shortBreakTime);
            setInitTime(shortBreakTime);
            break;
        case 2:
            setTime(longBreakTime);
            setInitTime(longBreakTime);
            break;
        default:
            break;
    }
  } , [activeTag, longBreakTime, pomodoroTime, shortBreakTime])

  return (
    <StateContext.Provider
      value={{
        activeTag,
        setActiveTag,
        progress,
        setProgress,
        time,
        setTime,
        isActive,
        setIsActive,
        initTime,
        setInitTime,
        pomodoroTime , setPomodoroTime,
        shortBreakTime , setShortBreakTime,
        longBreakTime , setLongBreakTime,
        changeColor , setChangeColor,
        changeFont , setChangeFont
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
