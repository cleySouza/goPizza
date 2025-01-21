import {atom} from 'jotai';
import lightTheme from './themeLight.ts';
import darkTheme from './themeDark.ts';
import {Platform} from 'react-native';

export interface IColors {
  backgroundPrimary: string;
  backgroundSecondary: string;
  textLight: string;
  brand: string;
  green: string;
  textPrimary: string;
  textSecondary: string;
  delivered: string;
  preparing: string;
  hover: string;
}

export interface IFonts {
  dmSerifDisplay: string;
  dmSans: string;
}

export interface ITheme {
  colors: IColors;
  fonts: IFonts;
}

const dmSerifiDisplay =
  Platform.OS === 'android'
    ? 'DMSerifDisplay Regular'
    : 'DMSerifDisplay-Regular';

const Fonts: IFonts = {
  dmSerifDisplay: dmSerifiDisplay,
  dmSans: 'DMSans',
};

const DarkTheme = {
  colors: darkTheme,
  fonts: Fonts,
};

const LightTheme = {
  colors: lightTheme,
  fonts: Fonts,
};

const themeAtom = atom(true);

export {LightTheme, DarkTheme, themeAtom, Fonts};
