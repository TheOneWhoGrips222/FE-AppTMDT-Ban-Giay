import {createSlice} from '@reduxjs/toolkit';
const bannerSlice = createSlice({
    initialState : [],
    name:'BannerList',
    reducers:{
        loadBanner: (state, action) => {
            return action.payload;
        }
    }
});
export const {loadBanner} = bannerSlice.actions;
export default bannerSlice.reducer;