import React from "react";
import { Form, FormSchema, A11yContextProvider } from "ada-design";

function App() {
  const schema: FormSchema = [
    {
      type: "string",
      label: "First Name",
      placeholder: "Example: John",
      isRequired: true,
    },
    {
      id: "lastName",
      label: "Last Name",
      isRequired: false,
      placeholder: "Example: Doe",
    },
  ];

  return (
    <A11yContextProvider isEnabled={true}>
      <div className="App" role="main">
        <h1>This is my awesome page</h1>
        <a href="#main-content">Skip to main content</a>

        <main id="main-content">
          <Form
            schema={schema}
            onSubmit={(values: any) => {
              alert("Done");
            }}
          />
        </main>
      </div>
    </A11yContextProvider>
  );
}

export default App;
