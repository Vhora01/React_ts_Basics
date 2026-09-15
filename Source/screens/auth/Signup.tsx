import { Text, View, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import { useState } from "react";
import { Colors } from "../../utility/Colors/colors";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";
import GoogleLogin from "../../components/GoogleLogin";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false)
    const onBakButtonPress = () => {
        navigation.goBack();
    }
    const onCheckedPress = () => {
        setChecked(!checked)
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    const blue = Colors.blue
    const whiteColor = Colors.white
    const darkgrey = Colors.darkgrey
    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign up" onBackPress={onBakButtonPress} />

            <Input label="Name" placeHolder="Prakash" />
            <Input label="Email" placeHolder="abcd@gmail.com" />
            <Input label="Password" placeHolder="******" isPassword />

            <View style={styles.agreeRow}>
                <Checkbox isCheched={checked} onCheckedPress={onCheckedPress} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>

            <Button title="Sign Up" backgroundColor={blue} textColor={whiteColor} onClick={() => { }} />
            <Seperator text='Or signup with' />
            <GoogleLogin />

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                <Text onPress={onSignInPress} style={styles.text}>Already have an account? <Text style={[styles.text, styles.signInText]}>Sign In</Text></Text>
            </View>

        </ScrollView>
    );
}

export default Signup;


const styles = StyleSheet.create({
    container: {
        padding: 24,
        // paddingBottom: 200,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText: {
        color: Colors.blue,
        marginHorizontal: 13,
    },
    agreeTextBold: {
        fontWeight: 'bold',
    },
    text: {
        color: Colors.blue,
        fontSize: 14,
    },
    signInText: {
        fontWeight: 'bold'
    },

});