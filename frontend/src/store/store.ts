import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as bankPageOpenedReducer } from './bankPageOpened/bankPageOpened.slice';
import { reducer as pageSearchReducer } from './pageSearch/pageSearch.slice';

const reducer = combineReducers({
    bankPageOpenedReducer,
    pageSearchReducer,
});

export const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
