import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

import {ITheme} from '../../../themes';
import {InputCore} from '../../core';
import Styles from './styles.ts';

interface IInputProps extends TextInputProps {
  theme: ITheme;
  style?: TextStyle & ViewStyle;
}

export default function InputLogin({theme, style, ...rest}: IInputProps) {
  const styles = Styles(theme, style);
  return (
    <InputCore
      placeholderTextColor={theme.colors.textLight}
      style={styles.input}
      {...rest}
    />
  );
}
