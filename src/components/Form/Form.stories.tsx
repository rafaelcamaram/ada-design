import React from "react";
import * as Yup from "yup";
import Form, { FormSchema } from "./";
import ADADesignProvider from "components/ADADesignProvider";
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
    <ADADesignProvider isEnabled={true}>
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
    </ADADesignProvider>
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
    <ADADesignProvider isEnabled={true}>
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
    </ADADesignProvider>
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
    <ADADesignProvider isEnabled={true}>
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
    </ADADesignProvider>
  );
};
