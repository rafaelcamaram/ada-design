import { ViewElementProps } from "types/css";

export type ViewProps = {
  id?: string;
  type?: string;
  as?: string;
  href?: string;
  target?: string;
  onClick?: (param: any) => any;
  customStyle?: string | Record<string, unknown>;
  children?: React.ReactNode;
};

export type Props = ViewProps & ViewElementProps;
