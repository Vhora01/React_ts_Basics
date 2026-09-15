import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utility/Colors/colors";

type SeperatorProps = {
    text: string
}

const Seperator = (props: SeperatorProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.line}></View>
        </View>
    );
}

export default Seperator;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: Colors.lightgrey,
    },
    text: {
        color: Colors.blue,
        fontWeight: '500',
        marginHorizontal: 8,
    },
});
