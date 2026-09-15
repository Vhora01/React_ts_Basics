import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../Components/ListDemo";

const PostSlice = createSlice({
    name: 'Post',
    initialState: [] as Post[],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload)
        }
    }
});


export const { addPost } = PostSlice.actions;
export default PostSlice.reducer;