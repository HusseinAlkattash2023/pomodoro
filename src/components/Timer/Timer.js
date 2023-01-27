/* timer */
import React from 'react';
import './Timer.css';

/* import component */
import Progress from '../Progress/Progress';

const Timer = () => {
  return (
    <div className="circle">
        <Progress/>
    </div>
  )
}

export default Timer