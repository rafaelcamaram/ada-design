import React, { useMemo } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "components/Button";
import TextInput from "components/TextInput";

export type Field = {
  id: string;
  label?: string;
  type?: string;
  isRequired?: boolean;
  placeholder?: string;
  shouldHideLabel?: boolean;
  shouldVisuallyHideLabel?: boolean;
  labelledBy?: string;
};

export type Props = {
  schema: FormSchema;
  onSubmit: any;
  validationSchema?: Yup.AnySchema;
};

export type FormSchema = Field[];

type InitialPropertiesType = {
  initialValues: { [prop: string]: any };
  computedValidationSchema: { [prop: string]: any };
};

const Form: React.FC<Props> = ({ schema, onSubmit, validationSchema }) => {
  const {
    initialValues,
    computedValidationSchema,
  } = useMemo<InitialPropertiesType>(() => {
    return schema.reduce(
      (acc, field) => {
        const strType = field.type || "mixed";
        const fieldType = (Yup[strType] || Yup.mixed())();

        return {
          initialValues: {
            ...acc.initialValues,
            [field.id]: "",
          },
          computedValidationSchema: {
            ...acc.computedValidationSchema,
            [field.id]: field.isRequired ? fieldType.required() : fieldType,
          },
        };
      },
      { initialValues: {}, computedValidationSchema: {} },
    );
  }, [schema]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema:
      validationSchema || Yup.object().shape(computedValidationSchema),
    onSubmit,
  });

  if (!schema || schema.length === 0) return;

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {schema.map((field: Field, index) => {
          return (
            <TextInput
              key={index}
              {...field}
              value={formik.values[field.id]}
              onChange={formik.handleChange}
            />
          );
        })}
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
      {/* <form id="myfORM">
        <label>dsds</label>
        <input value="123" />
        <input value="456" />
      </form>
      <button style={{ backgroundColor: "white", color: "black" }}>
        Herloooo
      </button> */}
    </>
  );
};

export default Form;
