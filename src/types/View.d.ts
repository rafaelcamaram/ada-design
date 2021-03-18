import { ViewElementProps } from "types/css";

export type ViewProps = {
  id?: string;
  type?: string;
  as?: any;
  href?: string;
  target?: string;
  onClick?: any;
  customStyle?: string | object;
};

export type Props = {} & ViewProps & ViewElementProps;
