import React from 'react';
import {View} from 'react-native';
import {Styles} from './stylesSignIn';
import Brand from '../../assets/brand.svg';

import {useTheme} from '../../hooks';
import {Button, Input, Title} from '../../components/app';

function ScreenSignIn() {
  const {theme} = useTheme();

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
      <Button type="link" theme={theme} label="Esqueci minha senha" />
      <Button type="primary" theme={theme} label="Entrar" />
    </View>
  );
}

export default ScreenSignIn;
