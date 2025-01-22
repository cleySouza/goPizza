import {StyleSheet, TextStyle} from 'react-native';

function Styles(styleProps?: TextStyle) {
  return StyleSheet.create({
    label: {
      ...styleProps,
    },
  });
}

export default Styles;
