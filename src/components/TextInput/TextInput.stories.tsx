import React, { useState } from "react";
import TextInput from "./TextInput";
import Text from "components/Typography/Text";
import A11yContextProvider from "components/A11yContextProvider";
import Flex from "components/Flex";

export default {
  title: "Forms/TextInput",
  component: TextInput,
};

export const Default = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <A11yContextProvider isEnabled={true}>
      <Flex flexDirection="column" alignItems="flex-start">
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
      </Flex>
    </A11yContextProvider>
  );
};

export const Required = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <A11yContextProvider isEnabled={true}>
      <Flex flexDirection="column" alignItems="flex-start">
        <TextInput
          id="WithControlledValue"
          isRequired
          label="First Name"
          placeholder="Enter your first name"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Text marginTop={15}>The current value is: {value}</Text>
      </Flex>
    </A11yContextProvider>
  );
};

export const WithNoVisualLabel = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <A11yContextProvider isEnabled={true}>
      <Flex flexDirection="column" alignItems="flex-start">
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
      </Flex>
    </A11yContextProvider>
  );
};

export const WithAriaLabel = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <A11yContextProvider isEnabled={true}>
      <Flex flexDirection="column" alignItems="flex-start">
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
      </Flex>
    </A11yContextProvider>
  );
};

export const WithLabelledBy = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <A11yContextProvider isEnabled={true}>
      <Flex flexDirection="column" alignItems="flex-start">
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
      </Flex>
    </A11yContextProvider>
  );
};

export const MissingADAFields = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <A11yContextProvider isEnabled={true}>
      <Flex flexDirection="column" alignItems="flex-start">
        <TextInput
          id="WithControlledValue"
          shouldHideLabel
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <button id="mySubmitButton" onChange={() => alert(value)}>
          Submit First Name
        </button>
      </Flex>
    </A11yContextProvider>
  );
};
