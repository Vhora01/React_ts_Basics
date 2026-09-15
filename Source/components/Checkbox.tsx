import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../utility/Colors/colors";

type CheckboxProp = {
    isCheched: boolean
    onCheckedPress: () => void
}

const Checkbox = (props: CheckboxProp) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onCheckedPress}>
            {
                props.isCheched ?
                    <View style={styles.innerContainer}>
                        <Image source={require('../assets/check.png')} style={styles.checkIcon} />
                    </View> : null
            }
        </TouchableOpacity>
    );
}

export default Checkbox;


const styles = StyleSheet.create({
    container: {
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 4,
        width: 22,
        height: 22,
    },
    innerContainer: {
        backgroundColor: Colors.grey,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        width: 12,
        height: 9,
    },
});