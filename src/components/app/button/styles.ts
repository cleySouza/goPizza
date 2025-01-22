import {StyleSheet} from 'react-native';
import {ITheme} from '../../../themes';

function Styles(type: string, theme: ITheme) {
  return StyleSheet.create({
    button: {
      backgroundColor:
        type === 'default'
          ? 'none'
          : type === 'primary'
          ? theme.colors.backgroundSecondary
          : theme.colors.backgroundPrimary,
      padding: type === 'link' ? 0 : 20,
      width: '100%',
      alignItems: type === 'link' ? 'flex-end' : 'center',
      justifyContent: 'center',
      borderRadius: type === 'primary' ? 12 : 0,
      marginBottom: type === 'link' ? 20 : 0,
      marginTop: type === 'link' ? 5 : 0,
    },
    label: {
      color: theme.colors.textLight,
      fontSize: 14,
      fontWeight: type === 'link' ? 'normal' : 'bold',
      fontFamily: theme.fonts.dmSans,
    },
  });
}

export default Styles;
