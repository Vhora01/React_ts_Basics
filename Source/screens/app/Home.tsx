import React, { useState } from 'react';
import { ScrollView, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header.tsx';
import CategoryList from '../../components/CategoryList.tsx';
import ProductList from '../../components/ProductList.tsx';


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(1);

    const onCategoryPress = (title: string, id: number): void => {
        setSelectedCategory(id);
    }
    return (
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

                <ProductList categoryId={selectedCategory} />
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