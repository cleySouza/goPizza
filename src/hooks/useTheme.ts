import {useAtom} from 'jotai';
import {themeAtom, DarkTheme, LightTheme} from '../themes';

function useTheme() {
  const [isLightTheme, setIsLightTheme] = useAtom(themeAtom);

  const currentTheme = isLightTheme ? LightTheme : DarkTheme;

  const toggleTheme = () => setIsLightTheme(!isLightTheme);

  return {theme: currentTheme, toggleTheme};
}

export default useTheme;
