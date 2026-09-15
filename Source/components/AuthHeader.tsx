import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../utility/Colors/colors";

type AuthHeaderProps = {
    title: string,
    onBackPress: () => void
}

const AuthHeader = (props: AuthHeaderProps) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <Pressable onPress={props.onBackPress}>
                <Image source={require('../assets/backArrow.png')} style={styles.image} />
            </Pressable>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )

}
export default AuthHeader;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 54,
    },
    image: {
        width: 18,
        height: 18,
    },
    title: {
        color: Colors.blue,
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 16
    }
})