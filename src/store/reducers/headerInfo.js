import { createSlice } from '@reduxjs/toolkit'

const headerInfo = createSlice({
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