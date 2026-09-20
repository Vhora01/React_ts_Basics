import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../app/Home.tsx';
// import Profile from '../app/Profile.tsx';
// import Favorites from '../app/Favorites.tsx';
// import Settings from '../app/Settings.tsx';
import { Image } from 'react-native';
import HomeStackNavigator from './HomeStackNavigator.tsx';
import FavouriteStackNavigator from './FavouriteStackNavigator.tsx';
import ProfileStackNavigator from './ProfileStackNavigator.tsx';

export type BottomTabParamList = {
    Home: undefined,
    Profile: undefined,
    Favorites: undefined,
}

const TabNav = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
    return (
        <TabNav.Navigator screenOptions={{ headerShown: false }} >
            <TabNav.Screen name='Home' component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon = focused ? require('../../assets/home_selected.png') : require('../../assets/home_unselected.png');
                        return <Image style={{ height: size, width: size }} source={icon} />
                    }
                }}
            />
            <TabNav.Screen name='Profile' component={ProfileStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon = focused ? require('../../assets/profile_selected.png') : require('../../assets/profile_unselected.png');
                        return <Image style={{ height: size, width: size }} source={icon} />
                    }
                }}
            />
            <TabNav.Screen name='Favorites' component={FavouriteStackNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon = focused ? require('../../assets/favorites_selected.png') : require('../../assets/favorites_unselected.png');
                        return <Image style={{ height: size, width: size }} source={icon} />
                    }
                }}
            />
        </TabNav.Navigator>
    );
}

export default BottomTab;