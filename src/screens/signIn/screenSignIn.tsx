import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Styles} from './stylesSignIn';
import Brand from '../../assets/brand.svg';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../../hooks';
import {Input, Title} from '../../components/app';
import {Label} from '../../components/app/label/label.tsx';

function ScreenSignIn() {
  const {theme, toggleTheme} = useTheme();

  return (
    <View
      style={[
        Styles.Container,
        {backgroundColor: theme.colors.backgroundPrimary},
      ]}>
      <Brand width={311} height={364} />
      <Title type="secondary" label="Login" theme={theme} />
      <Input theme={theme} placeholder="E-mail" />
      <Input theme={theme} placeholder="Password" />
      <Label type="helpPassword" label="Esqueci minha senha" theme={theme} />
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.backgroundSecondary,
          borderRadius: 12,
          padding: 20,
          width: '100%',
          alignItems: 'center',
        }}>
        <Label type="secondary" label="Entrar" theme={theme} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleTheme}
        style={{
          position: 'absolute',
          bottom: 35,
        }}>
        <Icon name="settings-outline" size={30} color={theme.colors.hover} />
      </TouchableOpacity>
    </View>
  );
}

export default ScreenSignIn;
