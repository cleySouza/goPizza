import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenSignIn} from './src/screens';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ScreenSignIn />
    </NavigationContainer>
  );
}

export default App;
