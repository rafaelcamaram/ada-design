import { ViewElementProps } from "types/css";

export type ViewProps = {
  id?: string;
  type?: string;
  as?: any;
  href?: string;
  target?: string;
  onClick?: (param: any) => any;
  children?: React.ReactNode;
};

export type Props = ViewProps & ViewElementProps;
