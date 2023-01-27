import React , {useContext} from 'react'
import './Tags.css';
import {StateContext} from '../StateProvider';

const Tags = () => {

    /* context api */
    const { activeTag , setActiveTag , changeColor } = useContext(StateContext);

    /* this is array contain type of break and contain time work */
    const list = ["pomodoro" , "short break" , "long break"];

    /* this is array contain colors type */
    const colors = ["#F87070" , "#70F3F8" , "#D881F8"];

    /* function for change colors */
    const handleTagClick = (index)=> {
        setActiveTag(index)
    }

    const styles = {
        color1:{
            backgroundColor: `${colors[changeColor]}`
        }
    }

  return (
    <div className="tags">
        {
            list.map((tag , i)=>(
                <div onClick={()=> handleTagClick(i)} key={i} style={activeTag === i ? styles.color1 : null}  className={`${activeTag === i && "active"} tag`} activeTag={activeTag === i}>
                    <p>{tag}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Tags