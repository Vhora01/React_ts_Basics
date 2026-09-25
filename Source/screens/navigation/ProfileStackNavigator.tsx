
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../app/Profile";
import Settings from "../app/Settings";
import CreateListing from "../app/CreateListing";

export type ProfileStackParamList = {
    Profile: undefined,
    Setting: undefined,
    CreateListing: undefined
}

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>()

const ProfileStackNavigator = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <ProfileStack.Screen name="Setting" component={Settings} options={{ headerShown: false }} />
            <ProfileStack.Screen name='CreateListing' component={CreateListing} options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    );
}

export default ProfileStackNavigator;