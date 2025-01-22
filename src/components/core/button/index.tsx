import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
}

export default function ButtonCore({children, ...rest}: ButtonProps) {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
}
