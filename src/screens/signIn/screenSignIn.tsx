import React from 'react';
import {TouchableOpacity, Text, TextInput, View, Platform} from 'react-native';
import {Styles} from './stylesSignIn';
import Brand from '../../assets/brand.svg';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../../hooks';

function ScreenSignIn() {
  const {theme, toggleTheme} = useTheme();

  const render =
    Platform.OS === 'android'
      ? 'DMSerifDisplay Regular'
      : 'DMSerifDisplay-Regular';

  return (
    <View
      style={[Styles.Container, {backgroundColor: theme.backgroundPrimary}]}>
      <Brand width={311} height={364} />
      <Text
        style={{
          color: theme.textLight,
          width: '100%',
          fontSize: 32,
          lineHeight: 38,
          marginBottom: 20,
          marginTop: 10,
          fontFamily: render,
        }}>
        Login
      </Text>
      <TextInput
        placeholder="E-mail"
        placeholderTextColor={theme.textLight}
        style={{
          width: '100%',
          padding: 20,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: theme.hover,
          borderRadius: 12,
          fontSize: 14,
          marginBottom: 10,
          fontFamily: 'DMSans',
        }}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor={theme.textLight}
        style={{
          width: '100%',
          padding: 20,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: theme.hover,
          borderRadius: 12,
          fontSize: 14,
          fontFamily: 'DMSans',
        }}
      />
      <Text
        style={{
          textAlign: 'right',
          width: '100%',
          color: theme.textLight,
          fontSize: 14,
          marginTop: 20,
          marginBottom: 20,
          fontFamily: 'DMSans',
        }}>
        Esqueci minha senha
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: theme.backgroundSecondary,
          borderRadius: 12,
          padding: 20,
          width: '100%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: theme.textLight,
            fontSize: 14,
            fontWeight: 500,
            fontFamily: 'DMSans',
          }}>
          Entrar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleTheme}
        style={{
          position: 'absolute',
          bottom: 35,
        }}>
        <Icon name="settings-outline" size={30} color={theme.hover} />
      </TouchableOpacity>
    </View>
  );
}

export default ScreenSignIn;
