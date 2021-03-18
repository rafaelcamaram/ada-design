import { ViewElementProps } from "types/css";

export type ViewProps = {
  id?: string;
  type?: string;
  as?: any;
  onClick?: any;
  customStyle?: string | object;
};

export type Props = {} & ViewProps & ViewElementProps;
