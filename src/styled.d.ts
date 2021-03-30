// import original module declarations
import "styled-components";
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
    black: string;
    red: string;
  };

  export type ColorsType = {
    palette: Partial<PalletColors>;
    text: {
      textDefault: string;
    };
    buttons: {
      intentions: Partial<IntentionsType>;
    };
  };

  export interface DefaultTheme {
    colors: Partial<ColorsType>;
  }
}
