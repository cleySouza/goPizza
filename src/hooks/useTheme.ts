import {useAtom} from 'jotai';
import {themeAtom, darkTheme, lightTheme} from '../themes';

function useTheme() {
  const [isLightTheme, setIsLightTheme] = useAtom(themeAtom);

  const currentTheme = isLightTheme ? lightTheme : darkTheme;

  const toggleTheme = () => setIsLightTheme(!isLightTheme);

  return {theme: currentTheme, toggleTheme};
}

export default useTheme;
