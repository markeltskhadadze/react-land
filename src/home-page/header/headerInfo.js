import { createSlice } from '@reduxjs/toolkit'

export const headerInfo = createSlice({
    name: 'nav',
    initialState: {
        headerNav: [
            'About Us',
            'Our Partners',
            'Catalog',
            'Contacts'
        ]
    }
})
export default headerInfo.reducer