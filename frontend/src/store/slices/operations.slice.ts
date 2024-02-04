import { createSlice } from '@reduxjs/toolkit';

export interface OperationsState {
    type: '';
}

const initialState: OperationsState = {
    type: '',
};

const operationsSlice = createSlice({
    name: 'operationsSlice',
    initialState,
    reducers: {},
});
