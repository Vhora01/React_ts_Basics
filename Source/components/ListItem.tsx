import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Colors } from "../utility/Colors/colors";

type ListItemProps = {
    title: string,
    subtitle?: string,
    onListPress?: () => void
}

const ListItem = (props: ListItemProps) => {
    return (
        <Pressable onPress={props.onListPress}>
            <View style={styles.container}>
                <View>
                    <Text style={[styles.title, props.subtitle && props.subtitle.length ? null : { marginBottom: 18 },]}>{props.title}</Text>
                    {
                        props.subtitle && props.subtitle.length ? <Text style={styles.subtitle}>{props.subtitle}</Text> : null
                    }
                </View>

                <View style={styles.imageContainer}>
                    <Image source={require('../assets/btnNext.png')} style={styles.image} />
                </View>

            </View>
        </Pressable>

    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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
        marginHorizontal: 24,
        marginVertical: 10,
        // backgroundColor: 'red'
    },
    title: { marginHorizontal: 20, marginTop: 18, fontSize: 18, fontWeight: '700', color: Colors.blue, },
    subtitle: { marginHorizontal: 20, marginTop: 5, marginBottom: 12, fontSize: 12, fontWeight: '400', color: Colors.grey, },
    imageContainer: { flex: 1, alignItems: 'center', flexDirection: 'row-reverse', paddingHorizontal: 10 },
    image: { height: 24, width: 24 },
});