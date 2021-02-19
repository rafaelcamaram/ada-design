import React, { useState } from "react";
import TextInput from "./TextInput";
import Text from "../Typography/Text";
import View from "../View";

export default {
  title: "TextInput",
  component: TextInput,
};

export const Default = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <View display="flex" flexDirection="column" alignItems="flex-start">
      <TextInput
        id="WithControlledValue"
        label="First Name"
        placeholder="Enter your first name"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Text marginTop={15}>The current value is: {value}</Text>
    </View>
  );
};

export const WithNoVisualLabel = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <View display="flex" flexDirection="column" alignItems="flex-start">
      <TextInput
        id="WithControlledValue"
        shouldVisuallyHideLabel
        label="First Name"
        placeholder="Enter your first name"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Text marginTop={15}>The current value is: {value}</Text>
    </View>
  );
};

export const WithAriaLabel = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <View display="flex" flexDirection="column" alignItems="flex-start">
      <TextInput
        id="WithControlledValue"
        shouldHideLabel
        label="First Name"
        placeholder="Enter your first name"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Text marginTop={15}>The current value is: {value}</Text>
    </View>
  );
};

export const WithLabelledBy = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <View display="flex" flexDirection="column" alignItems="flex-start">
      <TextInput
        id="WithControlledValue"
        shouldHideLabel
        labelledBy="mySubmitButton"
        placeholder="Enter your first name"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button id="mySubmitButton" onChange={() => alert(value)}>
        Submit First Name
      </button>
    </View>
  );
};

export const MissingADAFields = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <View display="flex" flexDirection="column" alignItems="flex-start">
      <TextInput
        id="WithControlledValue"
        shouldHideLabel
        placeholder="Enter your first name"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button id="mySubmitButton" onChange={() => alert(value)}>
        Submit First Name
      </button>
    </View>
  );
};
