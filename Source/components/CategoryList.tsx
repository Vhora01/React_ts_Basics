import { ScrollView, Text, StyleSheet, FlatList, ListRenderItem, Pressable, Image, View } from 'react-native';
import { categories } from '../data/categories.tsx';
import { Colors } from '../utility/Colors/colors.tsx';
type CategoryListProps = {
    selectedCategoryId: number,
    onCategoryPress: (title: string, id: number) => void
}

const CategoryList = (props: CategoryListProps) => {
    const renderCategaryItem: ListRenderItem<{ id: number, title: string, image: string }> = ((item) => {
        return (
            <Pressable
                style={styles.container}
                onPress={() => props.onCategoryPress(item.item.title, item.item.id)}>

                <View style={[styles.iconContainer, props.selectedCategoryId === item.item.id ? { backgroundColor: Colors.selectedCategoryBlack } : {}]}>
                    <Image style={styles.icon} source={{ uri: item.item.image }} />
                </View>

                <Text style={[styles.title, props.selectedCategoryId === item.item.id ? { fontWeight: 'bold', color: Colors.black } : {}]}>{item.item.title}</Text>

            </Pressable>
        );
    });
    return (
        <FlatList
            style={{
                paddingVertical: 10,
            }}
            data={categories}
            renderItem={renderCategaryItem}
            keyExtractor={(index) =>
                String(index.id)
            }
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default CategoryList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: Colors.grey,
    },
    icon: {
        width: 32,
        height: 32
    },
    iconContainer: {
        padding: 16,
        backgroundColor: Colors.lightgrey,
        borderRadius: 8,
        marginBottom: 8,
    },

});