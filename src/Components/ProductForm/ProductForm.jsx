import React, { Fragment, useEffect, useState } from "react";
import "./ProductForms.css";
import Types from "../../docs.json"
import SearchTerm from "../FinalCut/searchTerm";

function ProductForms({ forms, setForms }) {


  return (
    <section className="formSections">
      {/* <button onClick={addForm}>Add Form</button> */}
      {forms?.map((form, index) => (
        <Fragment key={index}>

       <SearchTerm index={index} form={form} setForms={setForms} forms={forms}/>
        </Fragment>
      ))}
    </section>
  );
}

export default ProductForms;
