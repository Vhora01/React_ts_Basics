import { ScrollView, StyleSheet, View, Text } from "react-native";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import { Colors } from "../../utility/Colors/colors";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";
import GoogleLogin from "../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
// import { StackWithoutLoginParamList } from "../../../App";
import { StackWithoutLoginParamList } from "../navigation/StackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SignInProps = NativeStackScreenProps<StackWithoutLoginParamList, "SignIn">

const SignIn = (props: SignInProps) => {
    const { navigation } = props;
    const blue = Colors.blue
    const whiteColor = Colors.white

    const onSignInPress = () => {
        navigation.navigate('Signup')
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader title="Sign In" onBackPress={() => {
                    navigation.goBack();
                }} />
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
        paddingHorizontal: 24,
        // marginTop: 20,
    },
    text: {
        color: Colors.blue,
        fontSize: 14,
    },
    signInText: {
        fontWeight: 'bold'
    },
});