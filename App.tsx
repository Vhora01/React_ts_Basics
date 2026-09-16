/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import { Image, StyleSheet, useColorScheme } from 'react-native';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Source/screens/app/Home.tsx';
import Profile from './Source/screens/app/Profile.tsx';
import Favorites from './Source/screens/app/Favorites.tsx';
import Settings from './Source/screens/app/Settings.tsx';


// import FontAwesome from 'react-native-vector-icons/FontAwesome';

export type StackWithoutLoginParamList = {
  SplashScreen: undefined,
  SignIn: undefined,
  Signup: undefined,
  MyTab: undefined,
}

export type BottomTabParamList = {
  Home: undefined,
  Profile: undefined,
  Favorites: undefined,
  Settings: undefined,
}

const Stack = createNativeStackNavigator<StackWithoutLoginParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};


const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const isSignIn = true;
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            {
              isSignIn ?
                (
                  <>
                    <Stack.Screen name='MyTab' component={MyTab} options={{ headerShown: false }} />
                  </>
                )
                :
                (
                  <>
                    <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
                    <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
                  </>
                )
            }
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



const MyTab = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }} >
      <BottomTab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image style={{ height: size, width: size }} source={require('./Source/assets/eye.png')} />
          ),
        }}
      />
      <BottomTab.Screen name='Profile' component={Profile} />
      <BottomTab.Screen name='Favorites' component={Favorites} />
      <BottomTab.Screen name='Settings' component={Settings} />
    </BottomTab.Navigator>
  );
}