import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import burgerReducer from '../features/burger/burgerSlice'
import userReducer from '../features/user/userSlice'
import inputReducer from '../features/searchValue/searchSlice'

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        burger: burgerReducer,
        user: userReducer,
        search: inputReducer,
    },
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware.concat(logger)
    // }
})

export default store