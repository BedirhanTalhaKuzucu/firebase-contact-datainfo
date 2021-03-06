import "./App.css";
import { useState } from "react";
import FormComponent from "./components/form/FormComponent";
import Contacts from "./components/contacts/Contacts";
import { AddUser, EditUser } from "./utils/functions";

const initialValues = { username: "", phoneNumber: "", gender: "NO INFO" };

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      EditUser(info);
      setInfo(initialValues);
    } else {
      AddUser(info);
      setInfo(initialValues);
    }
  };

  const editHandler = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts editHandler={editHandler} />
    </div>
  );
}

export default App;
