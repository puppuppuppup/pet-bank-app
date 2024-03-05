import { IBankPages } from '@/types/store.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IBankPages = {
    prev: 'home',
    current: 'home',
};

const bankPageOpened = createSlice({
    name: 'bankPageOpened',
    initialState,
    reducers: {
        changePage: (state, { payload: pages }: PayloadAction<IBankPages>) => {
            return pages;
        },
    },
});

export const { actions, reducer } = bankPageOpened;
