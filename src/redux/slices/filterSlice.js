import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sortPopular: {
        name: 'Desk',
        sortProperty: 'rating'
    },
    sortPrice: {
        name: 'Desk',
        sortProperty: 'priceMain'
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setSortPopular(state, action) {
            state.sortPopular = action.payload
        },
        setSortPrice(state, action) {
            state.sortPrice = action.payload
        }
    }
})

export const { setCategoryId, setSortPopular, setSortPrice } = filterSlice.actions

export default filterSlice.reducer