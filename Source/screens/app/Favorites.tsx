
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const Favorites = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Favorites</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Favorites);

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})