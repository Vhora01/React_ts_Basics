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
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CourseGoal from './Components/CourseGoal';
import StackDemo from './Components/StackDemo';
import ListDemo from './Components/ListDemo';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import SplashScreen from './Source/screens/auth/SplashScreen.tsx';
import Signup from './Source/screens/auth/Signup.tsx';
import SignIn from './Source/screens/auth/SignIn.tsx';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/* <CourseGoal title="Learn React Native" description="Master the fundamentals of React Native development" /> */}
        {/* <CourseGoal title="Learn React Native" key={'1'}>
        <Text>Master the fundamentals of React Native development</Text>

      </CourseGoal> */}
        {/* <StackDemo /> */}
        {/* <ListDemo /> */}
        {/* <SplashScreen /> */}
        {/* <Signup /> */}
        <SignIn />
      </SafeAreaProvider>
    </Provider>
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
