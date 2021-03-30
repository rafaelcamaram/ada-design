import React, { useState } from "react";
import TextArea from "./TextArea";
import Text from "components/Typography/Text";
import ADADesignProvider from "components/ADADesignProvider";
import Flex from "components/Flex";

export default {
  title: "Forms/TextArea",
  component: TextArea,
};

export const Default = (): React.ReactNode => {
  return (
    <ADADesignProvider isEnabled={true}>
      <TextArea
        id="WithControlledValue"
        label="Text Area label"
        placeholder="Text Area placeholder"
      />
    </ADADesignProvider>
  );
};

export const WithControlledValue = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <ADADesignProvider isEnabled={true}>
      <TextArea
        id="WithControlledValue"
        label="Text Area label"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Text marginTop={15}>The current value is: {value}</Text>
    </ADADesignProvider>
  );
};

export const Disabled = (): React.ReactNode => {
  return (
    <ADADesignProvider isEnabled={true}>
      <TextArea id="Disabled" isDisabled label="Text Area label" />
    </ADADesignProvider>
  );
};

export const Invalid = (): React.ReactNode => {
  return (
    <ADADesignProvider isEnabled={true}>
      <TextArea id="Invalid" isInvalid label="Text Area label" />
    </ADADesignProvider>
  );
};

export const CustomHeight = (): React.ReactNode => {
  return (
    <ADADesignProvider isEnabled={true}>
      <Flex>
        <TextArea id="DefaultHeight" marginRight={12} label="Text Area label" />
        <TextArea id="CustomHeight" height={50} label="Text Area label" />
      </Flex>
    </ADADesignProvider>
  );
};

export const CustomWidth = (): React.ReactNode => {
  return (
    <ADADesignProvider isEnabled={true}>
      <Flex>
        <TextArea id="DefaultWidth" marginRight={12} label="Text Area label" />
        <TextArea id="CustomWidth" width="500px" label="Text Area label" />
      </Flex>
    </ADADesignProvider>
  );
};

export const WithAriaLabel = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <ADADesignProvider isEnabled={true}>
      <Flex flexDirection="column" alignItems="flex-start">
        <TextArea
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
    </ADADesignProvider>
  );
};

export const WithLabelledBy = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <ADADesignProvider isEnabled={true}>
      <Flex flexDirection="column" alignItems="flex-start">
        <TextArea
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
    </ADADesignProvider>
  );
};

export const MissingADAFields = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <ADADesignProvider isEnabled={true}>
      <Flex flexDirection="column" alignItems="flex-start">
        <TextArea
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
    </ADADesignProvider>
  );
};
