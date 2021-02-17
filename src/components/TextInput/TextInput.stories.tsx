import React, { useState } from "react";
import TextInput from "./TextInput";
import Text from "../Typography/Text";
import View from "../View";

export default {
  title: "TextInput",
  component: TextInput,
};

export const Default = (): React.ReactNode => (
  <TextInput
    id="DefaultInput"
    label="First Name"
    placeholder="Enter your first name"
    value=""
    onChange={() => {
      console.log("Updated");
    }}
  />
);

export const WithFixedValue = (): React.ReactNode => (
  <TextInput
    id="DefaultTextInput"
    label="First Name"
    placeholder="First Name Fixed Value"
    value="First Name Fixed Value"
    onChange={() => {
      console.log("Updated");
    }}
  />
);

export const WithControlledValue = (): React.ReactNode => {
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

export const WithoutVisualLabel = (): React.ReactNode => {
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

export const WithoutLabel = (): React.ReactNode => {
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
