import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header.tsx';
const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header showSearch showLogout={false} showBack={false} title='Find All You Need' onBackPress={() => { }} onLogout={() => { }} />
            </ScrollView>
        </SafeAreaView >
    )
}

export default React.memo(Home);

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})