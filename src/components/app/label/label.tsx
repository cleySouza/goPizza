import React from 'react';
import {TextProps, TextStyle} from 'react-native';

import {LabelCore} from '../../core';
import LabelStyles from './styles.ts';
import {ITheme} from '../../../themes';

interface LabelProps extends TextProps {
  type: 'default' | 'secondary' | 'helpPassword';
  label: string;
  theme: ITheme;
  style?: TextStyle;
}

export function Label({label, type, theme, style, ...rest}: LabelProps) {
  const styles = LabelStyles(type, theme, style);
  return <LabelCore label={label} style={styles.label} {...rest} />;
}
