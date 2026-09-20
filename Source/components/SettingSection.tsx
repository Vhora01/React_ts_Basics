import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { Colors } from "../utility/Colors/colors";

type SettingSectionProps = {
    title: string,
    onEditPress?: () => void
}

const SettingSection = (props: SettingSectionProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>{props.title}</Text>
            {
                props.onEditPress ? <Pressable style={{ justifyContent: 'center', marginHorizontal: 24, }} onPress={props.onEditPress}>
                    <Image source={require('../assets/btnEdit.png')} style={{ height: 24, width: 24 }} />
                </Pressable> : null
            }
        </View>
    );
}

export default SettingSection;

const styles = StyleSheet.create(
    {
        container: { flex: 1, flexDirection: 'row' },
        sectionHeader: {
            marginHorizontal: 24,
            marginVertical: 16,
            fontSize: 16,
            fontWeight: '600',
            color: Colors.grey,
            flexGrow: 100,
        },
    }
);
