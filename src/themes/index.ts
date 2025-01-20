import {atom} from 'jotai';
import lightTheme from './themeLight.ts';
import darkTheme from './themeDark.ts';

const themeAtom = atom(true);

export {lightTheme, darkTheme, themeAtom};
