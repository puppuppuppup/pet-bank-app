import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as bankPageOpenedReducer } from './slices/bankPageOpened.slice';
import { reducer as pageSearchReducer } from './slices/pageSearch.slice';
import { reducer as cardsReducer } from './slices/cards.slice';

const reducer = combineReducers({
    bankPageOpenedReducer,
    pageSearchReducer,
    cardsReducer,
});

export const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
