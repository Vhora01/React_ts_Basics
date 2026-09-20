
import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Pressable, Image, TextInput, Keyboard } from 'react-native';
import Header from '../../components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '../../components/ListItem';
import { Colors } from '../../utility/Colors/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../navigation/ProfileStackNavigator';
import SettingSection from '../../components/SettingSection';
import SettingInput from '../../components/SettingInput';
import Button from '../../components/Button';

type SettingProps = NativeStackScreenProps<ProfileStackParamList, 'Setting'>

const Settings = (props: SettingProps) => {
    const [name, setName] = useState('')
    const [emai, setEmail] = useState('')
    const [isEditPersonalInfo, setIsEditPersonalInfo] = useState(true);
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView >
                    <View style={{ marginHorizontal: 24 }}>
                        <Header
                            showSearch={false}
                            showLogout={false}
                            showBack={true}
                            title='Settings'
                            onBackPress={() => {
                                props.navigation.goBack()
                            }}
                            onLogout={() => { }}
                        /></View>

                    <SettingSection title='Personal Information ' onEditPress={() => {
                        // console.log('pressed')
                        setIsEditPersonalInfo((prevValue) => !prevValue)
                    }} />

                    <SettingInput title='Name' isEditable={isEditPersonalInfo} placeHolder='Enter name' keyBoardType={'default'} inputValue={name} onInputTextChange={(text) => {
                        setName(text)
                    }}
                    />
                    <View style={{ height: 15 }} />

                    <SettingInput title='Email' isEditable={isEditPersonalInfo} placeHolder='Enter email' keyBoardType={'email-address'} inputValue={emai} onInputTextChange={(text) => {
                        setEmail(text)
                    }} />

                    {
                        isEditPersonalInfo ?
                            <View style={styles.buttonContainer}>
                                <Button title='Save' backgroundColor={Colors.blue} textColor={Colors.white} onClick={() => { }} />
                            </View> : null
                    }

                    <SettingSection title='Help Center' />



                    <ListItem title='FAQ' onListPress={() => { }} />
                    <ListItem title='Contact Us' onListPress={() => { }} />
                    <ListItem title='Privacy and Terms' onListPress={() => { }} />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default React.memo(Settings);

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionPersonalInfoHeader: {
        marginHorizontal: 24,
        marginVertical: 24,
        fontSize: 16,
        fontWeight: '600',
        color: Colors.grey,
        flexGrow: 100
    },
    buttonContainer: { marginHorizontal: 24, flex: 1, flexDirection: 'column-reverse', marginBottom: 25 },

})