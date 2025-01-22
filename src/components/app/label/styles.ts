import {StyleSheet, TextStyle} from 'react-native';
import {ITheme} from '../../../themes';

function LabelStyles(type: string, theme: ITheme, style?: TextStyle) {
  return StyleSheet.create({
    label: {
      color: style?.color ? style.color : theme.colors.textLight,
      fontSize: style?.fontSize ? style.fontSize : 14,
      fontFamily: theme?.fonts?.dmSans,
      fontWeight: type === 'secondary' ? 500 : style?.fontWeight,
      width: style?.width ? style.width : '100%',
      textAlign:
        type === 'default' ? 'left' : type === 'secondary' ? 'center' : 'right',
      marginTop: type === 'helpPassword' ? 10 : style?.marginTop,
      marginBottom: type === 'helpPassword' ? 20 : style?.marginBottom,
      ...style,
    },
  });
}

export default LabelStyles;
