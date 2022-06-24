import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
    searchValue: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
    }
})

export const selectSearch = (state: RootState) => state.search

export const { setSearchValue } = searchSlice.actions

export default searchSlice.reducer