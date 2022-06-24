import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export enum sortPropertyEnum {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price'
}

export type Sort = {
    name: string,
    sortProperty: sortPropertyEnum
}

export interface FilterSliceState {
    categoryId: number,
    currentPage: number,
    sort: Sort
}

const initialState: FilterSliceState = {
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'Популярность Desk',
        sortProperty: sortPropertyEnum.RATING_DESC
    },
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        }
    }
})

export const selectFilter = (state: RootState) => state.filter

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer