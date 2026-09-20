import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from "react-native";
import { Colors } from "../utility/Colors/colors";

type SettingInputProps = {
    title: string,
    inputValue: string
    placeHolder: string
    isEditable: boolean
    keyBoardType: KeyboardTypeOptions
    onInputTextChange: (text: string) => void
}
const SettingInput = (props: SettingInputProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <TextInput
                value={props.inputValue}
                editable={props.isEditable}
                onChangeText={(text) => { props.onInputTextChange(text) }}
                placeholder={props.placeHolder}
                style={styles.texInput}
                placeholderTextColor={Colors.blue}
                keyboardType={props.keyBoardType} />
        </View>
    );
}

export default SettingInput;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderColor: Colors.blurgrey,
        borderWidth: 1,
        borderRadius: 4,
    },
    title: { marginHorizontal: 24, marginTop: 15, color: Colors.grey, fontSize: 12 },
    texInput: { marginHorizontal: 24, paddingVertical: 10, color: Colors.blue, fontSize: 14 },

});