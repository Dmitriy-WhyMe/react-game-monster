import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import search from './slices/searchSlice'

export default configureStore({
    reducer: {
        filter,
        search
    }
})