import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import filter from './slices/filterSlice'
import search from './slices/searchSlice'
import cases from './slices/casesSlice'
import cart from './slices/cartSlice'
import catalogPage from './slices/catalogGameSlice'

export const store = configureStore({
    reducer: {
        filter,
        search,
        cases,
        cart,
        catalogPage,
    }
})

export type RootState = ReturnType<typeof store.getState>;
  
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();