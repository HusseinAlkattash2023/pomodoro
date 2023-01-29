import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./GetData.css";
// import { useSelector } from "react-redux";

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege...'
}

const GatData = () => {
  const [dataUser, setDataUser] = useState();

  // const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const handleSubmit = () => {
    Axios.get(`${process.env.REACT_APP_API_KEY}/api/test` , {
      headers:headers
    })
      .then((res) => {
        setDataUser(res.data.data);
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
