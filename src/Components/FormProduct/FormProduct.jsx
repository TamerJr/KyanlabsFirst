import React, { useEffect, useState } from "react";
import "./FormProduct.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
const FormProduct = ({
  ProdNum,
  setEleData,
  FormList,
  setFormCount,
  setMainFormsList,
  formCount,
}) => {
  const handleDeleteElement = (deleteElement) => {
    console.log(deleteElement);
    FormList = FormList.filter((ele, index) => index != deleteElement);
    console.log(FormList);
    setFormCount(formCount - 1);
    setMainFormsList([...FormList]);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEle, SetSelectedEle] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 40 },
  ];

  const performSearch = () => {
    let result = [];
    if (searchTerm) {
      result = data.filter((item) =>
        item?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(result);
      setSearchResults(result);
    } else {
      result = [];
      setSearchResults(result);
    }
  };

  useEffect(() => {
    performSearch();
    const addProduct = () => {
        if(searchTerm != ""){

            setEleData((eleData) => ({
                ...eleData,
                products: { ...eleData.products, [`prod_${ProdNum + 1}`]: searchTerm },
            }));
        }
    };
    addProduct();
  }, [searchTerm]);
  const handleSelect = (e) => {
    SetSelectedEle(e);
    setSearchTerm(e);
    console.log(selectedEle);
  };
  console.log(searchTerm);

  return (
    <div className="FormRenders">
      <fieldset>
        <legend>Product {ProdNum + 1} </legend>
        <p className="deleteElement">
          <span onClick={() => handleDeleteElement(ProdNum)}>
            {" "}
            <AiOutlineCloseCircle  size={20} color="gray"/>
          </span>
        </p>
        <div className="eleInput">
          <label htmlFor={`input1-${ProdNum + 1}`}>Product Name </label>
          <input
            required
            type="search"
            id={`input1-${ProdNum + 1}`}
            name={`input1-${ProdNum + 1}`}
            value={searchTerm}
            placeholder="Product Name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {selectedEle == searchTerm ? null : (
            <div>
              {searchResults?.length > 0 && (
                <div className="searchTerm">
                  <ul>
                    {searchResults.map((ele, index) => (
                      <li key={ele.name} onClick={() => handleSelect(ele.name)}>
                        {ele.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="eleInput">
          <label htmlFor={`input2-${ProdNum + 1}`}>Product Quantity </label>
          <input
            required
            type="number"
            id={`input2-${ProdNum + 1}`}
            name={`input2-${ProdNum + 1}`}
            onChange={(e) => {
              setEleData((eleData) => ({
                ...eleData,
                products: {
                  ...eleData.products,
                  [`prod_${ProdNum + 1}_Quantity`]: e.target.value,
                },
              }));
            }}
            placeholder="Product Quantity"
          />
        </div>
      </fieldset>
    </div>
  );
};
export default FormProduct;
