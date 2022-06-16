import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import search from './slices/searchSlice'
import cases from './slices/casesSlice'
import cart from './slices/cartSlice'
import catalogPage from './slices/catalogGameSlice'

export default configureStore({
    reducer: {
        filter,
        search,
        cases,
        cart,
        catalogPage,
    }
})