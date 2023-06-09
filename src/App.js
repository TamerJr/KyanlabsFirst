import { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./Components/DataTable/DataTable";
import Form from "./Components/Form/Form";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("myData")) || []
  );

  const [form, setForm] = useState(false);
  const [forms, setForms] = useState([]);
  const FormHandler = () => {
    setForm(!form);
  };
  const addForm = () => {
    setForms([...forms, { ProductName: "", ProductName: "" }]);
  };
  localStorage.setItem("myData", JSON.stringify(data));
  return (
    <div className="App">
      <DataTable formHandler={FormHandler} data={data} setData={setData} />
      {form && (
        <Form
          addForm={addForm}
          forms={forms}
          setForms={setForms}
          data={data}
          formHandler={FormHandler}
          setData={setData}
        />
      )}
    </div>
  );
}

export default App;
