
/* this is file for settings and change settings */

import React, { useContext, useState } from "react";

import "./Modal.css";

import Setting from "../../assets/icon-settings.svg";

import { StateContext } from "../StateProvider";

import { GiCheckMark } from "react-icons/gi";

const Modal = () => {
  const {
    pomodoroTime,
    setPomodoroTime,
    shortBreakTime,
    setShortBreakTime,
    longBreakTime,
    setLongBreakTime,
    setChangeColor,
    setChangeFont
  } = useContext(StateContext);

  const colors = ["#F87070", "#70F3F8", "#D881F8"];

  const fonts = ["Kumbh Sans" , "Roboto Slab" , "Space Mono"];

  const [activeColor, setActiveColor] = useState(0);
  const [activeFont, setActiveFont] = useState(0);


  const ActiveColor = (index) => {
    setActiveColor(index);
  };

  const ActiveFont = (index) => {
    setActiveFont(index);
  };

  /* change color */
  const ChangeColor = (value) => {
    setChangeColor(value);
    ActiveColor(value);
  };

  /* change font family */
  const ChangeFont = (value)=>{
    setChangeFont(value);
    ActiveFont(value);
  }

  return (
    /* Modal to change Settings using Bootstrap*/
    <div className="_modal">
      <button
        type="button"
        className="btn btn-none settings"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <img src={Setting} alt="" />
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="staticBackdropLabel">
                Settings
              </h1>
              <button
                type="button"
                className="btn-close me-3 text-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="time">
                <h4>time (minutes)</h4>
              </div>
              <form className="form mb-4">
                <div className="input">
                  <label>pomodoro</label>
                  <input
                    value={pomodoroTime / 60}
                    onChange={(e) => setPomodoroTime(e.target.value * 60)}
                    type="number"
                  />
                </div>
                <div className="input me-2 ms-2">
                  <label>short break</label>
                  <input
                    value={shortBreakTime / 60}
                    onChange={(e) => setShortBreakTime(e.target.value * 60)}
                    type="number"
                  />
                </div>
                <div className="input">
                  <label>long break</label>
                  <input
                    value={longBreakTime / 60}
                    onChange={(e) => setLongBreakTime(e.target.value * 60)}
                    type="number"
                  />
                </div>
              </form>
              <hr />
              <div className="fonts">
                <h4>font</h4>
                <div>
                  {fonts.map((font, i) => (
                    <button
                      key={i}
                      className={`${activeFont === i && "active"} mx-2`}
                      onClick={() => ChangeFont(i)}
                      style={{ fontFamily : font }}
                    >
                      Aa
                    </button>
                  ))}
                </div>
              </div>
              <hr/>
              <div className="color">
                <h4>color</h4>
                <div>
                  {colors.map((color, i) => (
                    <button
                      key={i}
                      className="mx-2"
                      onClick={() => ChangeColor(i)}
                      style={{ backgroundColor: color }}
                    >
                      {activeColor === i ? <GiCheckMark /> : null}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer text-center">
              <button type="button" className="" data-bs-dismiss="modal">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
