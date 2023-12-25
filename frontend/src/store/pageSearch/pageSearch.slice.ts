import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const pageSearchSlice = createSlice({
    name: 'pageSearchSlice',
    initialState: '',
    reducers: {
        updateText: (state, { payload: inputText }: PayloadAction<string>) => {
            return inputText;
        },
    },
});

export const { actions, reducer } = pageSearchSlice;
