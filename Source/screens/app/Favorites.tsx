
import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, FlatList, Image, Pressable } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { products } from '../../data/products';
import { Colors } from '../../utility/Colors/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FavouriteStackParamList } from '../navigation/FavouriteStackNavigator';


type FavouriteProps = NativeStackScreenProps<FavouriteStackParamList, 'Favourite'>

const Favorites = (props: FavouriteProps) => {
    const navigation = props.navigation
    const [product, setProducts] = useState(products)
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                    <Header
                        showSearch={false}
                        showLogout={false}
                        showBack={false}
                        title='Favourite'
                        onBackPress={() => { }}
                        onLogout={() => { }}
                    />

                    <FlatList
                        data={product}
                        renderItem={({ item, index }) =>
                            <View style={styles.row}>
                                <Pressable style={{ flexDirection: 'row' }} onPress={() => {
                                    navigation.navigate('ProductDetail', item)
                                }}>
                                    <Image style={styles.image} source={{ uri: item.image }} />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.priceTitle}>{item.price}</Text>
                                    </View>
                                </Pressable>
                                <View style={styles.iconContainer}>
                                    <Pressable >
                                        <Image style={styles.closeimage} source={require('../../assets/close.png')} />
                                    </Pressable>
                                </View>
                            </View>
                        }
                        keyExtractor={(item, index) => String(index)}
                        ListHeaderComponent={<View style={{ height: 25 }} />}
                        ListFooterComponent={<View style={{ height: 100 }} />}
                        showsVerticalScrollIndicator={false}
                    />

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default React.memo(Favorites);

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.blurgrey,
    },
    textContainer: {
        flexDirection: 'column',
        marginVertical: 10,
    },
    title: {
        fontWeight: '600',
        fontSize: 14,
        color: Colors.black3,

    },
    priceTitle: {
        fontWeight: '700',
        fontSize: 16,
        color: Colors.black,
        marginTop: 10,
    },
    image: {
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 10,
    },
    iconContainer: {
        flex: 1,
        marginVertical: 10,
        flexDirection: 'row-reverse'
    },
    closeimage: {
        height: 24,
        width: 24,
    }
})