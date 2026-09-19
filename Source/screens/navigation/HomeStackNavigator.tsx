import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../app/Home";
import ProductDetail from "../app/ProductDetail";

export type HomeStackParamList = {
    HomeScreen: undefined,
    ProductDetail: {},
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>()
const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
            <HomeStack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}

export default HomeStackNavigator;