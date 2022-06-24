import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
    slugValue: '',
    gamesArray: [],
    caseTitle: '',
}

const casesSlice = createSlice({
    name: 'cases',
    initialState,
    reducers: {
        setSlugValue(state, action: PayloadAction<string>) {
            state.slugValue = action.payload
        },
        setGamesArray(state, action: PayloadAction<[]>) {
            state.gamesArray = action.payload
        },
        setCaseTitle(state, action: PayloadAction<string>) {
            state.caseTitle = action.payload
        },
    }
})

export const selectCases = (state: RootState) => state.cases

export const { setSlugValue, setGamesArray, setCaseTitle } = casesSlice.actions

export default casesSlice.reducer