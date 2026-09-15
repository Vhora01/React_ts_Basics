import { Pressable, StyleSheet, Text } from "react-native"

type ButtonProps = {
    title: string;
    backgroundColor: string;
    textColor: string;
    onClick: () => void;
}
const Button = ({ title, backgroundColor, textColor, onClick }: ButtonProps) => {
    return (
        <Pressable hitSlop={20} onPress={onClick} style={[styles.container, { backgroundColor: backgroundColor }]}>
            <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        </Pressable>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
        width: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

