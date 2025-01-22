import {TextInput, TextInputProps, TextStyle, ViewStyle} from 'react-native';
import Styles from './styles.ts';

interface PropsInput extends TextInputProps {
  style?: TextStyle & ViewStyle;
}

export default function InputCore({style, ...rest}: PropsInput) {
  const inputStyles = Styles(style);
  return <TextInput style={inputStyles.input} {...rest} />;
}
