import React from "react";
import { Form, FormSchema } from "ada-design";
function App() {
  const schema: FormSchema = [
    {
      id: "firstName",
      type: "string",
      labelledBy: "submitddd",
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
    <div className="App" role="main">
      <h1>This is my awesome page</h1>
      <a href="#main-content">Skip to main content</a>

      <main id="main-content">
        <button id="submitddd">hero</button>
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
      </main>
    </div>
  );
}

export default App;
