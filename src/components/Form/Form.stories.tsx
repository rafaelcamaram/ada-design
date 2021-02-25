import React from "react";
import Form, { FormSchema } from "./";

export default {
  title: "Forms/Form",
  component: Form,
};

const schema: FormSchema = [
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
];

export const Default = (): React.ReactNode => <Form schema={schema} />;
