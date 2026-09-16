

import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Settings</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings);

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})