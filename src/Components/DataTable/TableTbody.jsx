import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { BsTrashFill } from "react-icons/bs";
import Types from "../../docs.json";
const TableTbody = ({ data, setData, ele, indx }) => {
  // delete ele functionality
  const handleDelete = (indx) => {
    console.log(indx);
    let filteredData = data.filter((ele, index) => index != indx);
    setData([...filteredData]);
  };
  //End
  //   const date = new Date();
  //   const currentDate = `${date.getDay()} - ${date.getMonth()} - ${date.getFullYear()}`;
  const [updatedObject, setUpdatedObject] = useState(ele);

  // Update Ele Functionality
  const [isUpdate, setIsUpdate] = useState(false);

  const handleSaveChanges = (indx) => {
    let tempArr = data;
    tempArr[indx] = updatedObject;
    setData([...tempArr]);
    setIsUpdate(!isUpdate);
  };

  return (
    <>
      <tr>
        <td>
          {isUpdate ? (
            <input
              type="text"
              required
              placeholder="Name"
              onChange={(e) =>
                setUpdatedObject((updatedObject) => ({
                  ...updatedObject,
                  name: e.target.value,
                }))
              }
            />
          ) : (
            `${ele.name}`
          )}
        </td>
        <td>
          {isUpdate ? (
            <input
              type="number"
              required
              placeholder="Amount"
              onChange={(e) =>
                setUpdatedObject((updatedObject) => ({
                  ...updatedObject,
                  amount: e.target.value,
                }))
              }
            />
          ) : (
            `${ele.amount}`
          )}
        </td>
        <td>
          {isUpdate ? (
            <select
              required
              className="selectType"
              onChange={(e) =>
                setUpdatedObject((eleData) => ({
                  ...updatedObject,
                  type: e.target.value,
                }))
              }
            >
              <option value="" disabled>
                ------
              </option>
              {Types.map((type) => (
                <option>{type?.type}</option>
              ))}
            </select>
          ) : (
            `${ele.type}`
          )}
        </td>
        <td>{ele.date}</td>
        <td className="buttons">
          {isUpdate ? (
            <button
              className="SavingUpdates"
              onClick={() => handleSaveChanges(indx)}
            >
              Save Edits
            </button>
          ) : (
            <>
              <button onClick={() => setIsUpdate(!isUpdate)} name="update">
                <FiEdit2 size={20} color="Green" />
              </button>
              <button onClick={() => handleDelete(indx)} name="delete">
                <BsTrashFill size={20} color="Red" />
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableTbody;
