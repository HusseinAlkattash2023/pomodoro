import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./GetData.css";

const GatData = () => {
  const [dataUser, setDataUser] = useState();

  // useEffect(()=>{
  //     handleSubmit()
  // } , [])
  const handleSubmit = () => {
    Axios.get(`https://24fc-212-237-120-128.eu.ngrok.io/api/test`)
      .then((res) => {
        console.log(res.data.data);
        setDataUser(res.data.data);
        console.log(dataUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="data">
      <button onClick={handleSubmit} className="btn btn-danger mb-4">
        get data
      </button>
      <div >
        <table className="table text-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {dataUser &&
              dataUser.map((user) => (
                <tr key={user}>
                  <th scope="row">{user.id}</th>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>
                    <img style={{width:"100px" , height:"100px"}} src={`https://24fc-212-237-120-128.eu.ngrok.io/storage/users/${user.image}`} alt=""/>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GatData;
