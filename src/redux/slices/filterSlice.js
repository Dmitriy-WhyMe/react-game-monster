import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    currentPage: 1,
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
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        }
    }
})

export const { setCategoryId, setSortPopular, setSortPrice, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer