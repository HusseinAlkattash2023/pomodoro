/* this is file for progress */

import React , {useContext , useEffect} from 'react';

import './Progress.css';

import Clock from  "../Clock/Clock";

/* import StateContext  to state management */
import {StateContext} from '../StateProvider';

const Progress = () => {

  
  const {progress , setProgress , time , initTime , changeColor} = useContext(StateContext);

  const colors = ["#F87070" , "#70F3F8" , "#D881F8"];

  useEffect(()=> {
    setProgress(time / (initTime/100))
  } , [initTime, setProgress, time]);

  const styles = {
    color:{
      background:`conic-gradient(${colors[changeColor]} ${progress}%, #161932 ${progress}%)`
    }
  }

  return (
    <div className="progress" style={styles.color} progress={progress}>
        <div className="inside-circle">
          <Clock/>
        </div>
    </div>
  )
}

export default Progress