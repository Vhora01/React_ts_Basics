import React, { useState } from 'react';
import { ScrollView, StyleSheet, } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../../components/Header.tsx';
import CategoryList from '../../components/CategoryList.tsx';
import ProductList from '../../components/ProductList.tsx';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/HomeStackNavigator.tsx';


type HomeProps = NativeStackScreenProps<HomeStackParamList, "HomeScreen">
const Home = (props: HomeProps) => {

    const [selectedCategory, setSelectedCategory] = useState<number>(1);
    const { navigation } = props;
    const onCategoryPress = (title: string, id: number): void => {
        setSelectedCategory(id);
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView style={styles.container}>
                    <Header
                        showSearch
                        showLogout={false}
                        showBack={false}
                        title='Find All You Need'
                        onBackPress={() => { }}
                        onLogout={() => { }}
                    />
                    <CategoryList selectedCategoryId={selectedCategory} onCategoryPress={onCategoryPress} />

                    <ProductList categoryId={selectedCategory} onProductPress={(product) => {
                        console.log('Home. product ======= ', product)
                        navigation.navigate('ProductDetail', { product })
                    }} />
                </ScrollView>
            </SafeAreaView >
        </SafeAreaProvider>
    )
}

export default React.memo(Home);

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})