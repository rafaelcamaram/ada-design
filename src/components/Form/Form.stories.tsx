import React from "react";
import * as Yup from "yup";
import Form, { FormSchema } from "./";
import A11yContextProvider from "components/A11yContextProvider";
import Button from "components/Button";

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
    <A11yContextProvider isEnabled={true}>
      <Form
        schema={schema}
        validationSchema={Yup.object().shape({
          firstName: Yup.string(),
          lastName: Yup.string().required(),
        })}
        onSubmit={(values) => {
          alert("Hello there");
        }}
      />
    </A11yContextProvider>
  );
};

export const WithMoreFields = (): React.ReactNode => {
  const schemass: FormSchema = [
    {
      id: "firstName",
      type: "string",
      isRequired: true,
    },
    {
      id: "bla",
      type: "string",

      isRequired: true,
    },
    {
      id: "address",
      type: "string",
      label: "Address",
      placeholder: "Enter your address",
      isRequired: true,
    },
    {
      id: "lastName",
      type: "string",
      label: "Last Name",
      placeholder: "Enter your last name",
      isRequired: true,
    },
  ];

  return (
    <A11yContextProvider isEnabled={true}>
      <Form
        schema={schemass}
        validationSchema={Yup.object().shape({
          firstName: Yup.string(),
          lastName: Yup.string().required(),
        })}
        onSubmit={(values) => {
          alert("Hello there");
        }}
      />
      <Button variant="default">Button</Button>
    </A11yContextProvider>
  );
};

export const WithHugeNumberOfFields = (): React.ReactNode => {
  const schemass: FormSchema = [
    {
      id: "firstName",
      type: "string",
      isRequired: true,
    },
    {
      id: "bla",
      type: "string",

      isRequired: true,
    },
    {
      id: "address",
      type: "string",
      label: "Address",
      placeholder: "Enter your address",
      isRequired: true,
    },
    {
      id: "lastName",
      type: "string",
      label: "Last Name",
      placeholder: "Enter your last name",
      isRequired: true,
    },
    {
      id: "firstName",
      type: "string",
      isRequired: true,
    },
    {
      id: "bla",
      type: "string",

      isRequired: true,
    },
    {
      id: "address",
      type: "string",
      label: "Address",
      placeholder: "Enter your address",
      isRequired: true,
    },
    {
      id: "lastName",
      type: "string",
      label: "Last Name",
      placeholder: "Enter your last name",
      isRequired: true,
    },
    {
      id: "firstName",
      type: "string",
      isRequired: true,
    },
    {
      id: "bla",
      type: "string",

      isRequired: true,
    },
    {
      id: "address",
      type: "string",
      label: "Address",
      placeholder: "Enter your address",
      isRequired: true,
    },
    {
      id: "lastName",
      type: "string",
      label: "Last Name",
      placeholder: "Enter your last name",
      isRequired: true,
    },
    {
      id: "firstName",
      type: "string",
      isRequired: true,
    },
    {
      id: "bla",
      type: "string",

      isRequired: true,
    },
    {
      id: "address",
      type: "string",
      label: "Address",
      placeholder: "Enter your address",
      isRequired: true,
    },
    {
      id: "lastName",
      type: "string",
      label: "Last Name",
      placeholder: "Enter your last name",
      isRequired: true,
    },
    {
      id: "firstName",
      type: "string",
      isRequired: true,
    },
    {
      id: "bla",
      type: "string",

      isRequired: true,
    },
    {
      id: "address",
      type: "string",
      label: "Address",
      placeholder: "Enter your address",
      isRequired: true,
    },
    {
      id: "lastName",
      type: "string",
      label: "Last Name",
      placeholder: "Enter your last name",
      isRequired: true,
    },
    {
      id: "firstName",
      type: "string",
      isRequired: true,
    },
    {
      id: "bla",
      type: "string",

      isRequired: true,
    },
    {
      id: "address",
      type: "string",
      label: "Address",
      placeholder: "Enter your address",
      isRequired: true,
    },
    {
      id: "lastName",
      type: "string",
      label: "Last Name",
      placeholder: "Enter your last name",
      isRequired: true,
    },
    {
      id: "firstName",
      type: "string",
      isRequired: true,
    },
    {
      id: "bla",
      type: "string",

      isRequired: true,
    },
    {
      id: "address",
      type: "string",
      label: "Address",
      placeholder: "Enter your address",
      isRequired: true,
    },
    {
      id: "lastName",
      type: "string",
      label: "Last Name",
      placeholder: "Enter your last name",
      isRequired: true,
    },
    {
      id: "firstName",
      type: "string",
      isRequired: true,
    },
    {
      id: "bla",
      type: "string",

      isRequired: true,
    },
    {
      id: "address",
      type: "string",
      label: "Address",
      placeholder: "Enter your address",
      isRequired: true,
    },
    {
      id: "lastName",
      type: "string",
      label: "Last Name",
      placeholder: "Enter your last name",
      isRequired: true,
    },
    {
      id: "firstName",
      type: "string",
      isRequired: true,
    },
    {
      id: "bla",
      type: "string",

      isRequired: true,
    },
    {
      id: "address",
      type: "string",
      label: "Address",
      placeholder: "Enter your address",
      isRequired: true,
    },
    {
      id: "lastName",
      type: "string",
      label: "Last Name",
      placeholder: "Enter your last name",
      isRequired: true,
    },
  ];

  return (
    <A11yContextProvider isEnabled={true}>
      <Form
        schema={schemass}
        validationSchema={Yup.object().shape({
          firstName: Yup.string(),
          lastName: Yup.string().required(),
        })}
        onSubmit={(values) => {
          alert("Hello there");
        }}
      />
    </A11yContextProvider>
  );
};
