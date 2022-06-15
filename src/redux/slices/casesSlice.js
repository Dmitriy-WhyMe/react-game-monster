import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    slugValue: '',
    gamesArray: '',
    caseTitle: '',
}

const casesSlice = createSlice({
    name: 'cases',
    initialState,
    reducers: {
        setSlugValue(state, action) {
            state.slugValue = action.payload
        },
        setGamesArray(state, action) {
            state.gamesArray = action.payload
        },
        setCaseTitle(state, action) {
            state.caseTitle = action.payload
        },
    }
})

export const { setSlugValue, setGamesArray, setCaseTitle } = casesSlice.actions

export default casesSlice.reducer