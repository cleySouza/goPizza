import {TextStyle} from 'react-native';

import {Label} from '../../atoms';
import Styles from './styles.ts';
import {ITheme} from '../../../themes';

interface ITitleProps {
  type: 'default' | 'secondary';
  label: string;
  style?: TextStyle;
  theme: ITheme;
}

export default function Title({type, style, label, theme}: ITitleProps) {
  const styles = Styles({type, style, theme});
  return <Label label={label} theme={theme} style={styles.title} />;
}
