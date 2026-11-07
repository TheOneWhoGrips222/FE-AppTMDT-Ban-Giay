import {createSlice} from '@reduxjs/toolkit';
const brandSlice = createSlice({
    initialState : [],
    name:'BrandList',
    reducers:{
        loadBrand: (state, action) => {
            return action.payload;
        }
    }
});
export const {loadBrand} = brandSlice.actions;
export default brandSlice.reducer;