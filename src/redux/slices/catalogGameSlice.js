import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGames = createAsyncThunk(
    'catalogPage/fetchGamesStatus',
    async (params) => {
        const {category, search, sortBy, order, currentPage} = params
        const { data } = await axios.get(`https://6297004814e756fe3b26c094.mockapi.io/Games?${currentPage}&limit=8${category}${search}${sortBy}${order}`)
        return data
    }
)

const initialState = {
    games: [],
    status: 'loading'
}

const catalogGameSlice = createSlice({
    name: 'catalogPage',
    initialState,
    reducers: {
        setGames(state, action) {
            state.games = action.payload
        },
    },
    extraReducers: {
        [fetchGames.pending] : (state) => {
            state.status = 'loading'
            state.games = []
        },
        [fetchGames.fulfilled] : (state, action) => {
            state.games = action.payload
            state.status = 'success'
        },
        [fetchGames.rejected] : (state) => {
            state.status = 'error'
            state.games = []
        }
    }
})

export const { setGames } = catalogGameSlice.actions

export default catalogGameSlice.reducer