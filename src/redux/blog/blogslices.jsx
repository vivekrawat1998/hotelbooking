import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogService from "../blog/Blogservices";


export const getBlogThunk = createAsyncThunk(
    "blog/get-all",
    async (thunkAPI) => {
      try {
        return await blogService.allBlog();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const getSingleBlog = createAsyncThunk(
    "blog/single-blog",
    async (id, thunkApi) => {
      try {
        return await blogService.singleBlog(id);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
);




export const resetState = createAction("Reset_all");

const initialState = {
    blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const blogSlice = createSlice({
    name: "blogs",
    initialState: initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getBlogThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getBlogThunk.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.blog = action.payload;
        })
        .addCase(getBlogThunk.rejected,(state, action) => {
            state.message = action.error;
            state.isError = true;
        })
        .addCase(getSingleBlog.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getSingleBlog.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.blogImages = action.payload.images;
            state.blogHeading = action.payload.heading;
            state.blogContent = action.payload.content;
            state.blogDate = action.payload.date;
            state.blogAuthor = action.payload.author;
        })
        .addCase(getSingleBlog.rejected, (state, action) => {
            state.isError = true;
            state.message = action.error;
        })
        .addCase(resetState, () => initialState);
    }
})

export default blogSlice.reducer;