import React, { useEffect, useState } from "react";
import "./FormProduct.css";
import Types from "../../docs.json";
import { AiOutlineCloseCircle } from "react-icons/ai";
const FormProduct = ({
  ProdNum,
  setEleData,
  FormList,
  setFormCount,
  setMainFormsList,
  formCount,
  eleData,
}) => {
  let tempProducts = eleData.products;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEle, SetSelectedEle] = useState("");
  const [prodQuantity, setProdQuantity] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const data = Types[1]?.products;
  const handleDeleteElement = (deleteElement) => {
    let tempArr = eleData.products.filter(
      (ele, index) => index != deleteElement
    );
    setEleData((eleData) => ({ ...eleData, products: [...tempArr] }));
    FormList = FormList.filter((ele, index) => index != deleteElement);
    setFormCount(formCount - 1);
    setMainFormsList([...FormList]);
  };

  const performSearch = () => {
    let result = [];
    if (searchTerm) {
      result = data.filter((item) =>
        item?.product?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(result);
    } else {
      result = [];
      setSearchResults(result);
    }
  };
  useEffect(() => {
    performSearch();
    const addProduct = () => {
      if (searchTerm != "") {
        setEleData((eleData) => ({
          ...eleData,
          products: [
            ...tempProducts,
            {
              [`prod_${ProdNum + 1}`]: searchTerm,
              [`prod_${ProdNum + 1}_Quantity`]: prodQuantity,
            },
          ],
        }));
      }
    };
    addProduct();
  }, [searchTerm, prodQuantity]);
  const handleSelect = (e) => {
    SetSelectedEle(e);
    setSearchTerm(e);
  };

  return (
    <div className="FormRenders">
      <fieldset>
        <legend>Product {ProdNum + 1} </legend>
        <p className="deleteElement">
          <span onClick={() => handleDeleteElement(ProdNum)}>
            {" "}
            <AiOutlineCloseCircle size={20} color="gray" />
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
                      <li
                        key={ele.product}
                        onClick={() => handleSelect(ele.product)}
                      >
                        {ele.product}
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
            onChange={(e) => setProdQuantity(e.target.value)}
            placeholder="Product Quantity"
          />
        </div>
      </fieldset>
    </div>
  );
};
export default FormProduct;
