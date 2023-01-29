import React , {useState} from "react";
import "./Form.css";
import Axios from 'axios';


const Form = () => {

    const [firstName , setFirstName ] = useState("");
    const [lastName , setLastName ] = useState("");
    const [file , setFile ] = useState("");

    const dataUser = [
        {
            key:"firstname",
            value:firstName
        },
        {
            key:"lastname",
            value:lastName
        },
        {
            key:"image",
            value:file
        }
    ]


  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
  }

    const handleSubmit = (e)=>{

        e.preventDefault()
        const formData = new FormData();
        dataUser.map((item) => formData.append(item.key, item.value));
        
        Axios.post(`${process.env.REACT_APP_API_KEY}/api/test` , formData , {
          headers:headers
        })
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>{
            console.error(err);
        })
    }


  return (
    <div className="form my-3 p-4">
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          First Name
        </label>
        <input value={firstName} onChange={(e)=> setFirstName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">
          Last Name
        </label>
        <input value={lastName} onChange={(e)=> setLastName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput2" />
      </div>
      <div className="mb-3">
        <label htmlFor="formFileMultiple" className="form-label">
            Select an image
        </label>
        <input
          onChange={(e)=> setFile(e.target.files[0])}
          className="form-control"
          type="file"
          id="formFileMultiple"
          multiple
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      </form>
    </div>
  );
};

export default Form;
