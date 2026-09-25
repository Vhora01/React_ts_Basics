
import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import Header from '../../components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../utility/Colors/colors';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../navigation/ProfileStackNavigator';

type ProfileProps = NativeStackScreenProps<ProfileStackParamList, 'Profile'>

const Profile = (props: ProfileProps) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Header
                        showSearch={false}
                        showLogout={true}
                        showBack={false}
                        title='Profile'
                        onBackPress={() => { }}
                        onLogout={() => { }}
                    />
                </View>

                <Text style={styles.userText}>Elina Hovakimyan</Text>
                <Text style={styles.emailText}>user@gmail.com</Text>

                <ListItem title='My Listings' subtitle='Already have 10 listing' onListPress={() => { }} />
                <ListItem title='Settings' subtitle='Account, FAQ, Contact' onListPress={() => {
                    props.navigation.navigate('Setting');
                }} />


                <View style={styles.buttonContainer}>
                    <Button title='Add New Listing' backgroundColor={Colors.blue} textColor={Colors.white} onClick={() => {
                        props.navigation.navigate('CreateListing')
                    }} />
                </View>


            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default React.memo(Profile);

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    userText: { marginHorizontal: 24, fontSize: 20, fontWeight: '700', color: Colors.black, marginBottom: 8 },
    emailText: { marginHorizontal: 24, fontSize: 14, fontWeight: '400', color: Colors.grey, marginBottom: 8 },
    buttonContainer: { marginHorizontal: 24, flex: 1, flexDirection: 'column-reverse', marginBottom: 25 },
})