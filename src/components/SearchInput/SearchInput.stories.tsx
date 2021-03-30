import React, { useState } from "react";
import SearchInput from "./SearchInput";
import Text from "components/Typography/Text";
import ADADesignProvider from "components/ADADesignProvider";
import Flex from "components/Flex";

export default {
  title: "Forms/SearchInput",
  component: SearchInput,
};

export const Default = (): React.ReactNode => {
  return (
    <ADADesignProvider isEnabled={true}>
      <SearchInput
        id="WithControlledValue"
        label="Search input label"
        placeholder="Search input placehol22der"
      />
    </ADADesignProvider>
  );
};

export const WithControlledValue = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <ADADesignProvider isEnabled={true}>
      <SearchInput
        id="WithControlledValue"
        label="Search input label"
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
      <SearchInput id="Disabled" isDisabled label="Search input label" />
    </ADADesignProvider>
  );
};

export const Invalid = (): React.ReactNode => {
  return (
    <ADADesignProvider isEnabled={true}>
      <SearchInput id="Invalid" isInvalid label="Search input label" />
    </ADADesignProvider>
  );
};

export const CustomHeight = (): React.ReactNode => {
  return (
    <ADADesignProvider isEnabled={true}>
      <Flex>
        <SearchInput
          id="DefaultHeight"
          marginRight={12}
          label="Search input label"
        />
        <SearchInput id="CustomHeight" height={50} label="Search input label" />
      </Flex>
    </ADADesignProvider>
  );
};

export const CustomWidth = (): React.ReactNode => {
  return (
    <ADADesignProvider isEnabled={true}>
      <Flex>
        <SearchInput
          id="DefaultWidth"
          marginRight={12}
          label="Search input label"
        />
        <SearchInput
          id="CustomWidth"
          width="500px"
          label="Search input label"
        />
      </Flex>
    </ADADesignProvider>
  );
};

export const WithAriaLabel = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <ADADesignProvider isEnabled={true}>
      <Flex flexDirection="column" alignItems="flex-start">
        <SearchInput
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
        <SearchInput
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
        <SearchInput
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
