import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "../navigation/ProfileStackNavigator";
import { Colors } from "../../utility/Colors/colors";
import { launchImageLibrary } from 'react-native-image-picker';
import { useState } from "react";
import ImageListing from "../../components/ImageListing";
import Input from "../../components/Input";

type CreateListingProp = NativeStackScreenProps<ProfileStackParamList, 'CreateListing'>
const CreateListing = (props: CreateListingProp) => {
    const [imageURL, setImageURL] = useState('')
    const openImageGalury = async () => {
        launchImageLibrary({
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: true
        }, res => {
            if (res.didCancel) {
                console.log('User cancelled')
            } else if (res.errorCode) {
                console.log('ImagePickerError: ', res.errorMessage)
            } else {
                console.log('User res===', res.assets?.at(0)?.uri)
                res.assets?.at(0)?.uri ? setImageURL(res.assets?.at(0)?.uri as string) : null
            }
        });
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Header
                    showSearch={false}
                    showLogout={false}
                    showBack={true}
                    title='Create New Listing'
                    onBackPress={() => {
                        props.navigation.goBack()
                    }}
                    onLogout={() => { }}
                />
                <ScrollView>
                    <View style={{ padding: 20 }} />

                    <Text style={{ paddingVertical: 15, color: Colors.blue, fontSize: 16, fontWeight: '600' }}>Upload photos</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable style={styles.pressView} onPress={openImageGalury}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/iconPlus.png')} style={styles.image} />
                            </View>
                        </Pressable>
                        {
                            imageURL ? <ImageListing imageUrl={imageURL} /> : null
                        }
                    </View>

                    <View style={{ padding: 10 }} />
                    <Input label="Title" placeHolder="Listing Title" />

                </ScrollView>

            </SafeAreaView>
        </SafeAreaProvider >
    )
}



export default CreateListing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        padding: 24,
    },
    pressView: {
        padding: 20, borderWidth: 2,
        borderColor: Colors.grey,
        borderStyle: 'dotted',
        height: 100,
        width: 100,
        justifyContent: 'center', alignItems: 'center',
    },
    imageContainer: { padding: 10, backgroundColor: 'lightgrey', height: 30, width: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center', },
    image: { height: 15, width: 15 },
})

