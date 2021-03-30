// import original module declarations
import "styled-components";
import COLORS from "theme/colors";
import { ColorType, UnitValue } from "types/css";
declare module "styled-components" {
  export type IntentionsType = {
    textDefault: string;
    textSuccess: string;
    textWarning: string;
    textDanger: string;
    backgroundDefault: string;
    backgroundSuccess: string;
    backgroundWarning: string;
    backgroundDanger: string;
  };

  export type PalletColors = {
    white: string;
    darkWhite: string;
    black: string;
    red: string;
  };

  export type ColorsType = {
    all: ColorType;
    palette: Partial<PalletColors>;
    text: {
      textDefault: string;
    };
    buttons: {
      intentions: Partial<IntentionsType>;
    };
  };

  export type FontSizeType = {
    xsmall: UnitValue;
    small: UnitValue;
    regular: UnitValue;
    medium: UnitValue;
    large: UnitValue;
    xlarge: UnitValue;
    xxlarge: UnitValue;
    xxxlarge: UnitValue;
  };
  export interface DefaultTheme {
    fontSize?: FontSizeType;
    colors?: Partial<ColorsType>;
  }
}
