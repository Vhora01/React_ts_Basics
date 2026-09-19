
import { View, FlatList, StyleSheet, Text, Image, Dimensions, Pressable } from 'react-native';
import { products } from "../data/products";
import React, { useEffect, useState } from 'react';
import { Colors } from "../utility/Colors/colors";

const size = Dimensions.get('window')
const containerWidth = (size.width - 48) / 2
const imageWidth = containerWidth - 20


type ProductProps = {
    categoryId: number
    onProductPress: ({ }) => void
}

const ProductList = (props: ProductProps) => {
    const [arrProduct, setArrProduct] = useState(products);
    const [filteredProduct, setFilteredProduct] = useState(products);


    useEffect(() => {
        if (props.categoryId) {

            const updatedProducts = arrProduct.filter((product) =>
                product.category === props.categoryId
            )
            updatedProducts.length ? setFilteredProduct(updatedProducts) : setFilteredProduct([])
        } else {
            setFilteredProduct(arrProduct);
        }
    }, [props.categoryId]);


    return (
        <FlatList
            numColumns={2}
            data={filteredProduct}
            renderItem={({ item, index }) => {
                return (
                    <View style={styles.container}>
                        <Pressable onPress={() => props.onProductPress(item)}>
                            <Image source={{ uri: item.image }} style={styles.image} />

                        </Pressable>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.priceTitle}>{item.price}</Text>
                    </View>
                );
            }}
            keyExtractor={(item, index) => String(index)}
            ListFooterComponent={<View style={{ height: 200 }} />}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        width: containerWidth,
    },

    image: {
        margin: 10,
        width: imageWidth,
        height: 200,
        borderRadius: 10,
    },
    title: {
        textAlign: 'left',
        fontWeight: '400',
        fontSize: 14,
        paddingHorizontal: 15,
        color: Colors.grey,
    },
    priceTitle: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 14,
        paddingHorizontal: 15,
        color: Colors.black,
    }
});

export default ProductList;