import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface InputStyles {
  input: TextStyle & ViewStyle;
}

function Styles(style?: TextStyle): InputStyles {
  return StyleSheet.create({
    input: {
      ...style,
    },
  });
}

export default Styles;
