import React from "react";
import { Form, FormSchema } from "ada-design";
function App() {
  const schema: FormSchema = [
    {
      id: "firstName",
      label: "First Name",
      type: "string",
      isRequired: true,
      placeholder: "Example: John",
    },
    {
      id: "lastName",
      label: "Last Name",
      isRequired: false,
      placeholder: "Example: Doe",
    },
  ];

  return (
    <div className="App">
      <Form
        schema={schema}
        onSubmit={(values: any) => {
          alert("Done");
          console.log({ values });
        }}
      />
      {/* <form>
        <label>First Name</label>
        <input placeholder="Example: John" />
        <label>Last Name</label>
        <input placeholder="Example: Doe" />
        <button>Submit</button>
      </form> */}
    </div>
  );
}

export default App;
