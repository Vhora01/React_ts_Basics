import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, RefreshControl } from 'react-native';
import ListRow from './ListRow';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from '../Redux/PostSlice.tsx';

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
const ListDemo = () => {

    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const posts = useSelector((state: any) => { return state.postReducer });
    const dispatch = useDispatch();

    useEffect(() => {
        onRefresh();
        console.log("Posts from Redux Store:", posts);
    }, []);

    const onRefresh = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            });
        setLoading(false);
    }
    const onSelectPost = (post: Post) => {
        dispatch(addPost(post));
    }
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ListRow item={item} onSelect={onSelectPost} />}
        />
    );
};

export default ListDemo;
