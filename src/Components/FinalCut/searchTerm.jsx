import React, { useEffect, useState } from "react";
import Types from "../../docs.json";

const SearchTerm = ({ index, forms, setForms, form }) => {
  let products = Types[1]?.products;
  const [searchField, setSearchField] = useState( []);
  const [searchTerm,setSearchTerm]=useState("")
  const deleteForm = (index) => {
    setForms(forms.filter((_, i) => i !== index));
  };
  const handleInputChange = (index, field, value) => {
    setForms(
      forms.map((form, i) => {
        if (i === index) {
          if (field === "ProductName" ) {
            if(value===""){
              setSearchTerm("")
            }
             setSearchTerm(value)
            // let dataFilter = products.filter((ele) =>
            //   ele.product.toLowerCase().includes(searchTerm.toLowerCase())
            // );
            // setSearchField(dataFilter);
            return { ...form, [field]: value };
          } else {
            return { ...form, [field]: value };
          }
        }
        return form;
      })
    );
  };
  const performSearch = () => {
    let result = [];
    if (searchTerm != "") {
      result = products.filter((item) =>
        item?.product?.toLowerCase().includes(searchTerm.toLowerCase())
        ); 
      } else {
        result = [];
      }
      console.log(result)
      setSearchField(result);
  };
  useEffect(()=>{
   
    performSearch()
    console.log(searchTerm)
  },[searchTerm])
  const handleData=(e)=>{
    console.log(e)
    forms[index].ProductName=e
    setSearchField([])
  }

  return (
    <div>
      {" "}
      <div key={index}>
        <fieldset className="FieldSetNestedForm">
          <legend> Product {index + 1}</legend>
          <p
            type="button"
            onClick={() => deleteForm(index)}
            className="Deleter"
          >
            X
          </p>
          <p>
            <label htmlFor={`Prod Name${index + 1}`}>Prod Name</label>
            <input
              id={`Prod Name${index + 1}`}
              type="text"
              placeholder="Prod Name"
              value={form.ProductName || ""}
              onChange={(e) =>
                handleInputChange(index, "ProductName", e.target.value)
              }
            />
          </p>
          { searchField.length >0&&

              <div className="SearchTermDataList">
                <ul>
                    { searchField.map(searchResult=><li onClick={()=>handleData(searchResult.product)} key={searchResult.product}>{searchResult.product}</li>)}
                </ul>
              </div>
            }
          <p>
            <label htmlFor={`Prod Quantity${index + 1}`}> Prod Quantity</label>
            <input
              id={`Prod Quantity${index + 1}`}
              type="number"
              placeholder="Prod Quantity"
              value={form.ProductQuantity || ""}
              onChange={(e) =>
                handleInputChange(index, "ProductQuantity", e.target.value)
              }
            />
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default SearchTerm;
