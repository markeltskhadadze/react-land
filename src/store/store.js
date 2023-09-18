import { configureStore } from '@reduxjs/toolkit'
import headerInfo from './reducers/headerInfo'
import partnersInfo from './reducers/our-partners'
import catalogInfo from './reducers/catalog'
export default configureStore({
    reducer: {
        header: headerInfo,
        partners: partnersInfo,
        catalog: catalogInfo
    },
})