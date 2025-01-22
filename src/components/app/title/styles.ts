import {StyleSheet, TextStyle} from 'react-native';
import {ITheme} from '../../../themes';

interface TitleProps {
  type?: string;
  theme: ITheme;
  style?: TextStyle;
}

function Styles({type, style, theme}: TitleProps) {
  return StyleSheet.create({
    title: {
      color: style?.color ? style.color : theme.colors.textLight,
      fontSize: style?.fontSize ? style.fontSize : 32,
      lineHeight: style?.lineHeight ? style.lineHeight : 36,
      fontFamily:
        type === 'default' ? theme?.fonts?.dmSans : theme.fonts.dmSerifDisplay,
      width: style?.width ? style.width : '100%',
      textAlign: style?.textAlign ? style.textAlign : 'left',
      marginTop: type === 'default' ? style?.marginTop : 20,
      marginBottom: type === 'default' ? style?.marginBottom : 20,
      ...style,
    },
  });
}

export default Styles;
