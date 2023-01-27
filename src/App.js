import React , {useContext}  from 'react'

/* import file css */
import './App.css';

/* import components */
import Tags from './components/Tags/Tags';
import Timer from './components/Timer/Timer';
import Modal from './components/Modal/Modal';

/* import logo  pomodoro*/
import logo from './assets/logo.svg'

/* context Api state management */
import { StateContext } from "./components/StateProvider";



function App(){

  /* context api state management */
  const {changeFont} = useContext(StateContext);

  /* array fonts to change font family */
  const fonts = ["Kumbh Sans" , "Roboto Slab" , "Space Mono"];

  
  const styles={
    font:{
      fontFamily:fonts[changeFont]
    }
  }

  return(
    <div className="app" style={styles.font}>
        {/* Title */}
        <div>
            <img src={logo} alt=""/>
        </div>
        {/* Tags */}
        <Tags/>
        {/* Timer */}
        <Timer/>

        {/* Modal */}
        <Modal/>
    </div>
  )
}

export default App;
