/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import SplashScreen from './Source/screens/auth/SplashScreen.tsx';
import Signup from './Source/screens/auth/Signup.tsx';
import SignIn from './Source/screens/auth/SignIn.tsx';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './Source/utility/Colors/colors.tsx';


const Stack = createNativeStackNavigator()
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='Signup' component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
