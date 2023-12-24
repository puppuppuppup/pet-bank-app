import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as bankPageOpened } from './currentBankPage/bankPageOpened';

const reducer = combineReducers({
    bankPageOpened,
});

export const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
