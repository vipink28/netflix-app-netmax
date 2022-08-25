import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
        state.login = action.payload
    },
    logout: (state)=>{
        state.login = null
    }   
  }
});

export const { login, logout } = userSlice.actions;

export const userData = (state) => state.user.login;



export default userSlice.reducer;
