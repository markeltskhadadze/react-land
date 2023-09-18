import { createSlice } from '@reduxjs/toolkit'

export const partnersInfo = createSlice({
    name: 'partners',
    initialState: {
        partnersList: [
            {
                id: 1,
                name: 'Iron Human',
                img: 'partners.png'
            },
            {
                id: 2,
                name: 'Iron Human',
                img: 'partners.png'
            },
            {
                id: 3,
                name: 'Iron Human',
                img: 'partners.png'
            },
            {
                id: 4,
                name: 'Iron Human',
                img: 'partners.png'
            }
        ]
    }
})
export default partnersInfo.reducer