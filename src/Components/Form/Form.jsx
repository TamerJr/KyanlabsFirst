import React, { useState } from "react";
import {AiFillCloseCircle} from "react-icons/ai"
import Types from "../../docs.json"
import "./Form.css";
const Form = ({ data, setData ,formHandler }) => {
  const date = new Date();
  const currentDate = `${date.getDay()} - ${date.getMonth()} - ${date.getFullYear()}`;
  const [eleData, setEleData] = useState({
    name: "",
    amount: null,
    type: "",
    date: currentDate,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, eleData]);
  };
  localStorage.setItem("myData",JSON.stringify(data))
  return (
    
    <form onSubmit={handleSubmit}>
      <p onClick={formHandler}><AiFillCloseCircle/></p>
      <p>
        <label> Select Type</label>
        <select required
          className="selectType"
          onChange={(e) =>
            setEleData((eleData) => ({ ...eleData, type: e.target.value }))
          }
        >
          <option disabled>{"     "}</option>
          {
            Types.map(type=>

              <option>{type?.type}</option>
            
              
              )
          }
          
        </select>
      </p>
      <p><label>
        Product Name
        </label> 
        <input  required
          type="search"
          onChange={(e) =>
            setEleData((eleData) => ({ ...eleData, name: e.target.value }))
          }
          placeholder="Enter Product Name"
        />
      </p>
      <p> <label>
        Product Amount
      </label>
        <input   required
          type="number"
          onChange={(e) =>
            setEleData((eleData) => ({ ...eleData, amount: e.target.value }))
          }
          placeholder="Amount"
        />
      </p>
      <button type="submit">ADD</button>
    </form>
  );
};

export default Form;
