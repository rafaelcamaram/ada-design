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
};

export type ColorsType = {
  palette: Partial<PalletColors>;
};

export type ThemeType = {
  colors: Partial<ColorsType>;
  buttons: {
    intentions: Partial<IntentionsType>;
  };
};
