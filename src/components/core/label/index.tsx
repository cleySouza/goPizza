import {Text, TextProps, TextStyle} from 'react-native';
import Styles from './styles.ts';

interface LabelProps extends TextProps {
  label: string;
  style?: TextStyle;
}

export default function LabelCore({label, style, ...rest}: LabelProps) {
  const labelStyle = Styles(style);
  return (
    <Text style={labelStyle.label} {...rest}>
      {label}
    </Text>
  );
}
