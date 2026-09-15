import { ScrollView, StyleSheet, View, Text } from "react-native";
import AuthHeader from "../../components/AuthHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import { Colors } from "../../utility/Colors/colors";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";
import GoogleLogin from "../../components/GoogleLogin";
const SignIn = () => {
    const blue = Colors.blue
    const whiteColor = Colors.white
    const onSignInPress = () => {
        console.log('Sign In')
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader title="Sign In" onBackPress={() => { }} />
                <Input label="Email" placeHolder="abcd@gmail.com" />
                <Input label="Password" placeHolder="******" isPassword />

                <Button title="Sign In" backgroundColor={blue} textColor={whiteColor} onClick={() => { }} />
                <Seperator text='Or sign in with' />
                <GoogleLogin />

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <Text onPress={onSignInPress} style={styles.text}>Don’t have an account? <Text style={[styles.text, styles.signInText]}>Sign Up</Text></Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignIn;


const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    text: {
        color: Colors.blue,
        fontSize: 14,
    },
    signInText: {
        fontWeight: 'bold'
    },
});