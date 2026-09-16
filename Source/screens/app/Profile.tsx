

import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Profile);

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})