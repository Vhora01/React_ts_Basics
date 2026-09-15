import { Image, StyleSheet, Text, View } from "react-native"
import Button from "../../components/Button";
import { Colors } from "../../utility/Colors/colors";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.image} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>You will find</Text>
                <Text style={[styles.innerText, styles.title]}>All you need.</Text>
            </View>
            <Button title={'SignUp'} backgroundColor={Colors.blue} textColor={Colors.white} onClick={() => console.log('SignUp clicked')} />
            <Button title={'SignIn'} backgroundColor={Colors.white} textColor={Colors.blue} onClick={() => console.log('SignIn clicked')} />

        </View>
    )
}

export default SplashScreen;


const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    image: {
        width: '100%',
        height: '200',
        resizeMode: 'contain'
    },
    titleContainer: {
        marginVertical: 54,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    innerText: {
        color: Colors.orange,
        textDecorationLine: 'underline',
    },
});