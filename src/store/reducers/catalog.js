import { createSlice } from '@reduxjs/toolkit'

const catalogInfo = createSlice({
    name: 'nav',
    initialState: {
        catalogName: [
            'Awnings',
            'Gates',
            'Swing',
            'Fencing',
            'Stairs'
        ],
        categoryList: [
            {
                id: 1,
                type: 'Awnings',
                name: 'test 1'
            },
            {
                id: 2,
                type: 'Awnings',
                name: 'test 2'
            },
            {
                id: 3,
                type: 'Gates',
                name: 'test 3'
            },
            {
                id: 4,
                type: 'Stairs',
                name: 'test 4'
            },
            {
                id: 5,
                type: 'Swing',
                name: 'test 5'
            },
            {
                id: 6,
                type: 'Fencing',
                name: 'test 6'
            },
            {
                id: 7,
                type: 'Fencing',
                name: 'test 7'
            }
        ],
        filteredCategoryList: []
    },
    reducers: {
        filterByType: (state, action) => {
            state.filteredCategoryList = state.categoryList.filter(item => item.type === action.payload)
        },
        getAllCategory: (state, action) => {
            state.filteredCategoryList = state.categoryList
        }
    }
})
export default catalogInfo.reducer
export const { filterByType, getAllCategory } = catalogInfo.actions