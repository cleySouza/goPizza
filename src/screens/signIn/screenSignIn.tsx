import React from 'react';
import {Styles} from './stylesSignIn';
import Brand from '../../assets/brand.svg';

import {useTheme} from '../../hooks';
import {Button, Input, Title} from '../../components/app';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';

function ScreenSignIn() {
  const {theme} = useTheme();

  return (
    <LinearGradient
      colors={[
        theme.colors.backgroundSecondary,
        theme.colors.backgroundPrimary,
      ]}
      style={Styles.Container}>
      <View style={Styles.Content}>
        <Brand width={311} height={364} />
        <Title type="secondary" label="Login" theme={theme} />
        <Input theme={theme} placeholder="E-mail" />
        <Input theme={theme} placeholder="Password" />
        <Button type="link" theme={theme} label="Esqueci minha senha" />
        <Button type="secondary" theme={theme} label="Entrar" />
      </View>
    </LinearGradient>
  );
}

export default ScreenSignIn;
