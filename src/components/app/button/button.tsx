import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ButtonCore, LabelCore} from '../../core';
import {ITheme} from '../../../themes';
import Styles from './styles.ts';

interface ButtonProps extends TouchableOpacityProps {
  type: 'primary' | 'secondary' | 'default' | 'link' | 'icon';
  icon?: string;
  iconSize?: number;
  label?: string;
  children?: React.ReactNode;
  theme: ITheme;
}

export default function Button({
  type,
  label,
  theme,
  children,
  icon,
  iconSize,
  ...rest
}: ButtonProps) {
  const styles = Styles(type, theme);
  return (
    <ButtonCore style={styles.button} {...rest}>
      {children}
      {label && <LabelCore label={label} style={styles.label} />}
      {type === 'icon' && (
        <Ionicons
          name={icon ?? ''}
          size={iconSize}
          color={theme?.colors?.textLight}
        />
      )}
    </ButtonCore>
  );
}
