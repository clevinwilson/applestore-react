import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    admin:false
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminLogin: (state, action) => {
            state.admin = action.payload.admin;
        },
        setSignoutState: (state) => {
            state.admin = false;
        }
    }
})

export const { setAdminLogin, setSignoutState } = adminSlice.actions;

export const selectAdmin = (state) => state.admin.admin

export default adminSlice.reducer;

