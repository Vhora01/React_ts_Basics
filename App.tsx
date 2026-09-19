/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { StackNavigator } from './Source/screens/navigation/StackNavigator.tsx';



const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}



export default App;





