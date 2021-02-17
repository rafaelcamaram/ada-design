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
    placeholder="Default Text Input"
    value=""
    onChange={() => {
      console.log("Updated");
    }}
  />
);

export const WithFixedValue = (): React.ReactNode => (
  <TextInput
    placeholder="Default Text Input"
    value="Fixed Value"
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
        placeholder="With Controlled Value"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Text marginTop={15}>The current value is: {value}</Text>
    </View>
  );
};
