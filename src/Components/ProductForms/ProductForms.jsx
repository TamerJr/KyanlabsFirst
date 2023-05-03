import React, { Fragment, useEffect, useState } from "react";
import "./ProductForms.css";
import FormProduct from "../FormProduct/FormProduct";
const ProductForms = ({ formCount, eleData, setEleData ,setFormCount }) => {
  let forms = [];
  const [mainFormsList, setMainFormsList] = useState(forms);
  useEffect(() => {
    const dataLogic = () => {
      for (let i = 0; i < formCount; i++) {
        forms.push(
          <Fragment key={i}>
            <div>
              <FormProduct
                ProdNum={i}
                eleData={eleData}
                setEleData={setEleData}
                FormList={forms}
                formCount={formCount}
                setMainFormsList={setMainFormsList}
                setFormCount={setFormCount}
              />
            </div>
          </Fragment>
        );
      }
      setMainFormsList(forms)
    };
    dataLogic()
  }, [formCount]);

  return mainFormsList;
};
export default ProductForms;
