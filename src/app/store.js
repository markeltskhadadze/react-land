import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../home-page/header/headerInfo'
export default configureStore({
    reducer: {
        nav: counterReducer,
    },
})