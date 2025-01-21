import {StyleSheet, TextStyle} from 'react-native';
import {ITheme} from '../../../themes';

function Styles(theme: ITheme, styleProps?: TextStyle) {
  return StyleSheet.create({
    label: {
      color: styleProps?.color ? styleProps.color : theme.colors.textLight,
      fontSize: styleProps?.fontSize ? styleProps.fontSize : 14,
      fontFamily: styleProps?.fontFamily
        ? styleProps.fontFamily
        : theme.fonts.dmSans,
      width: styleProps?.width ? styleProps.width : '100%',
      textAlign: styleProps?.textAlign ? styleProps.textAlign : 'left',
      ...styleProps,
    },
  });
}

export default Styles;
