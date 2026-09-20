import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/HomeStackNavigator.tsx';
import { Colors } from "../../utility/Colors/colors.tsx";
import Button from "../../components/Button";

const { width, height } = Dimensions.get('window')
type ProductDetailProps = NativeStackScreenProps<HomeStackParamList, 'ProductDetail'>

const ProductDetail = (props: ProductDetailProps) => {
    const product = props.route.params as Readonly<{}>
    console.log('product. ========', product)
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                    <Text style={styles.description}>{product.desciption}</Text>
                </ScrollView>

                <View style={styles.buttonContainer}>
                    <View style={styles.favouriteButtonView}>
                        <Image style={{ width: 24, height: 24 }} source={require('../../assets/favorites_selected.png')} />
                    </View>
                    <Pressable style={styles.contactButton}>
                        <Text style={styles.contactButtonTitle}>Contact Seller</Text>
                    </Pressable>
                </View>

            </View>


            <Pressable onPress={() => {
                props.navigation.goBack()
            }} style={[styles.favouriteButtonView, { position: 'absolute', marginTop: 50, marginLeft: 24, height: 50, width: 50 }]}>
                <Image style={{ width: 24, height: 24 }} source={require('../../assets/backButton.png')} />
            </Pressable>
        </View>
    )
}
export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: height * 0.45,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -40,
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '500',
        marginHorizontal: 24,
        marginBottom: 10,
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 24,
        marginBottom: 10,
    },
    description: {
        color: Colors.grey,
        fontWeight: '300',
        marginHorizontal: 24,
    },
    buttonContainer: { marginTop: 10, height: 60, margin: 24, flexDirection: 'row' },
    favouriteButtonView: { backgroundColor: Colors.lightgrey, width: 60, height: 60, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    contactButton: { backgroundColor: Colors.blue, flex: 1, marginLeft: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
    contactButtonTitle: { fontSize: 20, fontWeight: '500', color: Colors.white, fontFamily: 'Nunito Sans' },
});