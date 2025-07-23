import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "../redux/blog/blogslices";


export const store = configureStore({
    reducer :{
        blog: blogReducer,
    }
});
