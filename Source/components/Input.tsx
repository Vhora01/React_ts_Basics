import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../utility/Colors/colors";
import { useState } from "react";

type InputProps = {
    label: string,
    placeHolder: string
    isPassword?: boolean,
}
const Input = (props: InputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={props.isPassword && !isPasswordVisible}
                    style={styles.input}
                    placeholder={props.placeHolder}
                />

                {
                    props.isPassword ? <Pressable onPress={onEyePress}>
                        <Image source={isPasswordVisible ? require('../assets/eye.png') : require('../assets/eye_closed.png')} style={styles.eyeImage} />
                    </Pressable> : null
                }

            </View>
        </View>
    );
}
export default Input


const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginBottom: 8,
        color: Colors.blue,
        fontSize: 14,
        fontWeight: '500',
    },
    input: {
        // borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
    eyeImage: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
    },
})