import {StyleSheet} from 'react-native';
import {ITheme} from '../../../themes';

function Styles(type: string, theme: ITheme) {
  function backgroundType(type: string) {
    switch (type) {
      case 'primary':
        return {
          backgroundColor: theme.colors.backgroundPrimary,
          borderRadius: 12,
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.backgroundSecondary,
          borderRadius: 12,
        };
      case 'link':
        return {backgroundColor: 'transparent'};
      default:
        return {backgroundColor: theme.colors.backgroundPrimary};
    }
  }

  return StyleSheet.create({
    button: {
      ...backgroundType(type),
      padding: type === 'link' ? 0 : 20,
      width: '100%',
      alignItems: type === 'link' ? 'flex-end' : 'center',
      justifyContent: 'center',
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
