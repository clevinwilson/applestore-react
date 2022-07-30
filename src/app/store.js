import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import adminReducer from '../features/admin/adminSlice';
import userReducer from '../features/user/userSlice';
export default configureStore({
    reducer: {
        user: userReducer,
        admin:adminReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})