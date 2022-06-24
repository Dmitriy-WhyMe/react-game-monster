import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type Game = {
    id: string, title: string, price: number, imageUrl: string 
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERORR = 'error'
}

interface CatalogGameSliceState {
    games: Game[],
    status: 'loading' | 'success' | 'error'
}

export type SearchGameParams = {
    category: string, search: string, sortBy: string, order: string, currentPage: string
}

export const fetchGames = createAsyncThunk(
    'catalogPage/fetchGamesStatus',
    async (params: SearchGameParams) => {
        const {category, search, sortBy, order, currentPage} = params
        const { data } = await axios.get(`https://6297004814e756fe3b26c094.mockapi.io/Games?${currentPage}&limit=8${category}${search}${sortBy}${order}`)
        return data
    }
)

const initialState: CatalogGameSliceState = {
    games: [],
    status: Status.LOADING
}

const catalogGameSlice = createSlice({
    name: 'catalogPage',
    initialState,
    reducers: {
        setGames(state, action: PayloadAction<Game[]>) {
            state.games = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = Status.LOADING
                state.games = []
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.games = action.payload
                state.status = Status.SUCCESS
            })
            .addCase(fetchGames.rejected, (state) => {
                state.status = Status.ERORR
                state.games = []
            })
    }
})

export const selectCatalogPage = (state: RootState) => state.catalogPage

export const { setGames } = catalogGameSlice.actions

export default catalogGameSlice.reducer