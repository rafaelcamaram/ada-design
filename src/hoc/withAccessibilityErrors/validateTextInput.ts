import { Props } from "../../components/TextInput/TextInput";

const validateTextInput = (props: Props): any => {
  const shouldDisplayError = !props.labelledBy && !props.label;

  if (!shouldDisplayError) {
    return {
      hasError: false,
    };
  }

  return {
    hasError: true,
    error:
      "Property 'labelledBy' or 'label' are missing in the TextInput component",
  };
};

export default validateTextInput;
