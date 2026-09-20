import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../auth/SplashScreen.tsx';
import Signup from '../auth/Signup.tsx';
import SignIn from '../auth/SignIn.tsx';
import { Colors } from '../../utility/Colors/colors.tsx';
import BottomTab from '../navigation/BottomTab.tsx';
import Home from '../app/Home.tsx';
import Profile from '../app/Profile.tsx';

export type StackWithoutLoginParamList = {
    SplashScreen: undefined,
    SignIn: undefined,
    Signup: undefined,
}


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.white,
    },
};


export const StackNavigator = () => {
    const isSignIn = false;

    return (
        isSignIn ? <AuthStackNavigation /> : <TabNavigation />
    )
}


const AuthStack = createNativeStackNavigator<StackWithoutLoginParamList>();


const AuthStackNavigation = () => {
    return (
        <NavigationContainer theme={theme}>
            <AuthStack.Navigator>
                <AuthStack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
                <AuthStack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
                <AuthStack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}

// const TabStack = createNativeStackNavigator<StackWithoutLoginParamList>();

const TabNavigation = () => {
    return (
        <NavigationContainer theme={theme}>
            <BottomTab />
        </NavigationContainer>
    );
}