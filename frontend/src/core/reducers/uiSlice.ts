import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollIcon: false,
  openMenu: false,
};

const UI = createSlice({
  name: 'UI_SLICE',
  initialState,
  reducers: {
    notification(state, action) {},

    setScrollIcon: (state, action) => {
      state.scrollIcon = action.payload;
    },
    setOpenMenu: (state, action) => {
      state.openMenu = action.payload;
    },
  },
});

export const { setScrollIcon, setOpenMenu } = UI.actions;
export const uIReducer = UI.reducer;
