import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

const StackDemo = () => {
    return (
        <View style={styles.container}>
            {/* extra view to display background color of Parent A */}
            <View style={[styles.boxView, styles.backgroundView]} />
            <ParentA />
            <ElementB />
        </View>
    )
}

export default StackDemo;


const ElementB = () => (
    <Pressable
        style={[styles.elementView, styles.elementB]}
        onPress={() => Alert.alert('on click B')}>
        <Text>B</Text>
    </Pressable>
);

//Clickable Element A
const ElementA = () => (
    <Pressable
        style={[styles.elementView, styles.elementA]}
        onPress={() => Alert.alert('on click A')}>
        <Text>A</Text>
    </Pressable>
);

//Parent A with absolute position & transparent background
const ParentA = () => (
    <View style={[styles.boxView, styles.parentA]} pointerEvents={'box-none'}>
        <ElementA />
        <ElementA />
        <ElementA />
    </View>
);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    boxView: {
        width: 230,
        height: 350,
        left: 25,
        position: 'absolute',
    },
    backgroundView: {
        borderWidth: 10,
        borderColor: '#385717',
        backgroundColor: '#cbe8b5',
        zIndex: -1, 	//low priority
    },
    parentA: {
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'transparent',
        zIndex: 2,	//highest priority
    },
    elementView: {
        borderWidth: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    elementB: {
        position: 'absolute',
        height: 100,
        width: 140,
        top: '50%',
        left: 160,
        backgroundColor: '#fbe3d8',
        borderColor: '#ed2400',
        zIndex: 1,	//mid-level above green background and below element A
    },
    elementA: {
        height: '25%',
        width: '90%',
        borderColor: '#649d34',
        backgroundColor: '#cbe8b5',
    },
});


