import React from "react";
import withAccessibilityErrors from "../../hoc/withAccessibilityErrors";
import TextInput from "../TextInput";

type Field = {
  id: string;
  label?: string;
  isRequired?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shouldHideLabel?: boolean;
  shouldVisuallyHideLabel?: boolean;
  labelledBy?: string;
};

type Props = {
  schema: FormSchema;
};

export type FormSchema = Field[];

const Form: React.FC<Props> = ({ schema }) => {
  if (!schema || schema.length === 0) return;

  return (
    <>
      {schema.map((field: Field, index) => {
        return <TextInput key={index} {...field} />;
      })}
    </>
  );
};

export default withAccessibilityErrors<Props>(Form, "Form");
