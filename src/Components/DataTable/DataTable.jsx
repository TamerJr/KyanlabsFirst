import React, { Fragment, useState } from "react";

import "./DataTable.css";
import TableTbody from "./TableTbody";

const DataTable = ({ formHandler ,data,setData }) => {


  return (
    <section className="Form-Section">
      <button onClick={formHandler} className="AddNew">Add New</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, indx) => (
            <Fragment key={indx}>
              <TableTbody data={data} setData={setData} ele={ele} indx={indx} />
            </Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DataTable;
