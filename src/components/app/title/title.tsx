import {TextStyle} from 'react-native';

import {LabelCore} from '../../core';
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
  return <LabelCore label={label} style={styles.title} />;
}
