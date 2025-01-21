import React from 'react';
import {Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Styles} from './stylesSignIn';
import Brand from '../../assets/brand.svg';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../../hooks';
import {Title} from '../../components/molecules';

function ScreenSignIn() {
  const {theme, toggleTheme} = useTheme();

  const render =
    Platform.OS === 'android'
      ? 'DMSerifDisplay Regular'
      : 'DMSerifDisplay-Regular';

  return (
    <View
      style={[
        Styles.Container,
        {backgroundColor: theme.colors.backgroundPrimary},
      ]}>
      <Brand width={311} height={364} />
      <Title type="secondary" label="Login" theme={theme} />
      <TextInput
        placeholder="E-mail"
        placeholderTextColor={theme.colors.textLight}
        style={{
          width: '100%',
          padding: 20,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: theme.colors.hover,
          borderRadius: 12,
          fontSize: 14,
          marginBottom: 10,
          fontFamily: theme.fonts.dmSans,
        }}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor={theme.colors.textLight}
        style={{
          width: '100%',
          padding: 20,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: theme.colors.hover,
          borderRadius: 12,
          fontSize: 14,
          fontFamily: theme.fonts.dmSans,
        }}
      />
      <Text
        style={{
          textAlign: 'right',
          width: '100%',
          color: theme.colors.textLight,
          fontSize: 14,
          marginTop: 20,
          marginBottom: 20,
          fontFamily: theme.fonts.dmSans,
        }}>
        Esqueci minha senha
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.backgroundSecondary,
          borderRadius: 12,
          padding: 20,
          width: '100%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: theme.colors.textLight,
            fontSize: 14,
            fontWeight: 500,
            fontFamily: theme.fonts.dmSans,
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
        <Icon name="settings-outline" size={30} color={theme.colors.hover} />
      </TouchableOpacity>
    </View>
  );
}

export default ScreenSignIn;
