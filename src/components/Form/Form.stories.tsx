import React, { useState } from "react";
import * as Yup from "yup";
import Form, { FormSchema } from "./";

export default {
  title: "Forms/Form",
  component: Form,
};

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

export const Default = (): React.ReactNode => {
  return (
    <>
      <Form
        schema={schema}
        validationSchema={Yup.object().shape({
          firstName: Yup.string(),
          lastName: Yup.string().required(),
        })}
        onSubmit={(values) => {
          alert("Hello there");
          console.log({ values });
        }}
      />
      <form>
        <label>First Name</label>
        <input placeholder="Example: John" />
        <label>Last Name</label>
        <input placeholder="Example: Doe" />
      </form>
    </>
  );
};
