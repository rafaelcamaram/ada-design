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
  return (
    <A11yContextProvider isEnabled={true}>
      <TextInput
        id="WithControlledValue"
        label="Text input label"
        placeholder="Text input placeholder"
      />
    </A11yContextProvider>
  );
};

export const WithControlledValue = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <A11yContextProvider isEnabled={true}>
      <TextInput
        id="WithControlledValue"
        label="Text input label"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Text marginTop={15}>The current value is: {value}</Text>
    </A11yContextProvider>
  );
};

export const Disabled = (): React.ReactNode => {
  return (
    <A11yContextProvider isEnabled={true}>
      <TextInput id="Disabled" isDisabled label="Text input label" />
    </A11yContextProvider>
  );
};

export const Invalid = (): React.ReactNode => {
  return (
    <A11yContextProvider isEnabled={true}>
      <TextInput id="Invalid" isInvalid label="Text input label" />
    </A11yContextProvider>
  );
};

export const CustomHeight = (): React.ReactNode => {
  return (
    <A11yContextProvider isEnabled={true}>
      <Flex>
        <TextInput
          id="DefaultHeight"
          marginRight={12}
          label="Text input label"
        />
        <TextInput id="CustomHeight" height={50} label="Text input label" />
      </Flex>
    </A11yContextProvider>
  );
};

export const CustomWidth = (): React.ReactNode => {
  return (
    <A11yContextProvider isEnabled={true}>
      <Flex>
        <TextInput
          id="DefaultWidth"
          marginRight={12}
          label="Text input label"
        />
        <TextInput id="CustomWidth" width="500px" label="Text input label" />
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
