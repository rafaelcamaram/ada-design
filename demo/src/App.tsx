import React from "react";
import { Form, Button } from "ada-design";
function App() {
  const schema = [
    {
      id: "firstName",
      label: "First Name",
      isRequired: false,
      placeholder: "Enter your name",
      value: "",
      onChange: () => {
        console.log("Hello there");
      },
    },
    {
      id: "lastName",
      label: "Last Name",
      isRequired: false,
      placeholder: "Enter your last name",
      value: "",
      onChange: () => {
        console.log("Hello there");
      },
    },
    {
      id: "lastName",
      label: "Last Name",
      isRequired: false,
      placeholder: "Enter your last name",
      value: "",
      onChange: () => {
        console.log("Hello there");
      },
    },
  ];

  return (
    <div className="App">
      <Button onClick={() => {}} text="Hero"></Button>
      <Form schema={schema} />
    </div>
  );
}

export default App;
