export { default as ADADesignProvider } from "./components/ADADesignProvider";
export { default as Badge } from "./components/Badge";
export { default as BadgeList } from "./components/BadgeList";
export { default as Button } from "./components/Button";
export { default as Divisor } from "./components/Divisor";
export { default as Flex } from "./components/Flex";
export { default as Form } from "./components/Form";
export { default as Modal } from "./components/Modal";
export { default as Portal } from "./components/Portal";
export { default as ToggleSection } from "./components/ToggleSection";
export { default as TextInput } from "./components/TextInput";
export { default as SearchInput } from "./components/SearchInput";
export { default as TextArea } from "./components/TextArea";
export { default as Heading } from "./components/Typography/Heading";
export { default as Label } from "./components/Typography/Label";
export { default as Link } from "./components/Typography/Link";
export { default as Text } from "./components/Typography/Text";
export { default as View } from "./components/View";
export { default as Spacer } from "./components/Spacer";
export { default as withAccessibilityErrors } from "./hoc/withAccessibilityErrors";

// Types
// TODO: Update the docs with the correct types -- I removed some of them
// Should I export it here as well?
export type { AccessibilityProps } from "./hoc/withAccessibilityErrors";
export type { BadgeVariants } from "./components/Badge";
export type {
  ButtonVariantType,
  ButtonIntentionType,
  ButtonSizeType,
} from "./components/Button";
export type { FormSchema, Field } from "./components/Form";
export type { ModalVariantType, ModalStyle } from "./components/Modal";
