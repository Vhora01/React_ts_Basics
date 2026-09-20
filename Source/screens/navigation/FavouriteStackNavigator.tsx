import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../app/Home";
import ProductDetail from "../app/ProductDetail";
import Favorites from "../app/Favorites";

export type FavouriteStackParamList = {
    Favourite: undefined,
    ProductDetail: {},
}

const FavouriteStack = createNativeStackNavigator<FavouriteStackParamList>()

const FavouriteStackNavigator = () => {
    return (
        <FavouriteStack.Navigator>
            <FavouriteStack.Screen name="Favourite" component={Favorites} options={{ headerShown: false }} />
            <FavouriteStack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
        </FavouriteStack.Navigator>
    );
}

export default FavouriteStackNavigator;