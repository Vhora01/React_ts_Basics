import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../utility/Colors/colors";
import { useState } from "react";
import Input from "./Input";

type HeaderProps = {
    title: string,
    onBackPress: () => void,
    onLogout: () => void,

    showLogout: boolean,
    showSearch: boolean,
    showBack: boolean,
}

const Header = (props: HeaderProps) => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const onSearchClick = () => {
        setShowSearchInput((prevState) => !prevState)
    }
    return (
        <View>
            <View style={styles.container}>
                {
                    props.showBack ? <Pressable onPress={props.onBackPress}>
                        <Image style={styles.icon} source={require('../assets/backArrow.png')} />
                    </Pressable>
                        : props.showSearch ? (<Pressable onPress={onSearchClick}>
                            <Image style={styles.icon} source={require('../assets/search.png')} />
                        </Pressable>) : <View style={styles.space} />
                }

                <Text style={styles.title}>{props.title}</Text>

                {
                    props.showLogout ? (<Pressable onPress={props.onLogout}>
                        <Image style={styles.icon} source={require('../assets/logout.png')} />
                    </Pressable>) : <View style={styles.space} />
                }
            </View>
            {
                showSearchInput ? <Input placeHolder="Type your keyword...." label="" /> : null
            }
        </View>
    );
}

export default Header;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        width: 20,
        height: 20,
    },
    space: { width: 24, },
    title: {
        color: Colors.blue,
        fontSize: 16,
        fontWeight: 'bold',
    },
});