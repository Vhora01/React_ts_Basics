import { Pressable, StyleSheet, Text } from 'react-native';
import { Post } from './ListDemo';

type ListRowProps = {
    item: Post;
    onSelect: (post: Post) => void;
};

const ListRow = ({ item, onSelect }: ListRowProps) => {
    return (
        <Pressable style={styles.container} onPress={() => onSelect(item)}>
            <Text style={styles.text}>{item.title}</Text>
            <Text>{item.body}</Text>
        </Pressable>
    );
}

export default ListRow;


const styles = StyleSheet.create({
    container: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    text: { fontWeight: 'bold' }
});