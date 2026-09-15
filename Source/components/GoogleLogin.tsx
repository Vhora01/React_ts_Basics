import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { Colors } from "../utility/Colors/colors";

const GoogleLogin = () => {
    const googleLoginPress = () => {
        console.log('google login')
    }
    return (
        <View style={styles.googleButtonContainer}>
            <Pressable style={styles.googleButton} onPress={googleLoginPress}>
                <Image source={require('../assets/googleIcon.png')} style={styles.googleIcon} />
            </Pressable>
        </View>
    );
}

export default GoogleLogin;

const styles = StyleSheet.create({

    googleButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleButton: {
        backgroundColor: Colors.darkgrey,
        width: 142,
        height: 60,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleIcon: {
        width: 29,
        height: 29,
    },
});