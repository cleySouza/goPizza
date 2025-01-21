import {Text, TextProps, TextStyle} from 'react-native';
import Styles from './styles.ts';
import {ITheme} from '../../../themes';

interface LabelProps extends TextProps {
  label: string;
  style?: TextStyle;
  theme: ITheme;
}

export default function Label({label, style, theme, ...rest}: LabelProps) {
  const labelStyle = Styles(theme, style);
  return (
    <Text style={labelStyle.label} {...rest}>
      {label}
    </Text>
  );
}
