import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Types from "../../docs.json";
import "./Form.css";
import ProductForms from "../ProductForms/ProductForms";
const Form = ({ data, setData, formHandler }) => {
  const date = new Date();
  const currentDate = `${date.getDay()} - ${date.getMonth()} - ${date.getFullYear()}`;
  const [eleData, setEleData] = useState({
    name: "",
    amount: null,
    type: "",
    date: currentDate,
    products: [],
  });
  const [formCount, setFormCount] = useState(0);

  const addForm = () => {
    setFormCount(formCount + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, eleData]);
  };
  localStorage.setItem("myData", JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit} className="ServiceForm">
      <p onClick={formHandler}>
        <AiFillCloseCircle size={25} color="gray" />
      </p>
      <p>
        <label> Select Type</label>
        <select
          required
          className="selectType"
          onChange={(e) =>
            setEleData((eleData) => ({ ...eleData, type: e.target.value }))
          }
        >
          <option> ----</option>
          {Types[0]?.types?.map((types) => (
            <option key={types?.type}>{types?.type}</option>
          ))}
        </select>
      </p>
      <p>
        <label>Product Name</label>
        <input
          required
          type="search"
          onChange={(e) =>
            setEleData((eleData) => ({ ...eleData, name: e.target.value }))
          }
          placeholder="Enter Product Name"
        />
      </p>
      <p>
        {" "}
        <label>Product Amount</label>
        <input
          required
          type="number"
          onChange={(e) =>
            setEleData((eleData) => ({ ...eleData, amount: e.target.value }))
          }
          placeholder="Amount"
        />
      </p>
      {/* Product form and form of it */}
      <div>
        <ProductForms
          formCount={formCount}
          setFormCount={setFormCount}
          eleData={eleData}
          setEleData={setEleData}
        />
        <button type="button" onClick={addForm} className="ProdFormButton">
          Add Product
        </button>
      </div>
      {/* End */}

      <button type="submit" className="SaveServices">
        ADD
      </button>
    </form>
  );
};

export default Form;
