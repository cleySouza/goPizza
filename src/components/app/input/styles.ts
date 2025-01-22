import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ITheme} from '../../../themes';

interface InputStyles {
  input: TextStyle & ViewStyle;
}

function Styles(theme: ITheme, style?: TextStyle): InputStyles {
  return StyleSheet.create({
    input: {
      color: style?.color ? style.color : theme.colors.textLight,
      fontFamily: style?.fontFamily ? style?.fontFamily : theme.fonts.dmSans,
      fontSize: typeof style?.fontSize === 'number' ? style.fontSize : 14,
      borderWidth:
        typeof style?.borderWidth === 'number' ? style.borderWidth : 1,
      borderColor: style?.borderColor ? style?.borderColor : theme.colors.hover,
      borderRadius:
        typeof style?.borderRadius === 'number' ? style.borderRadius : 12,
      padding: typeof style?.padding === 'number' ? style.padding : 20,
      width: typeof style?.width === 'number' ? style?.width : '100%',
      marginBottom:
        typeof style?.marginBottom === 'number' ? style.marginBottom : 10,
      ...style,
    },
  });
}

export default Styles;
