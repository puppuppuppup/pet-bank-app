import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface CardsState {
    type: 'debit' | 'credit';
    number: string;
    balance: number;
    currency: string;
    expire: {
        month: string;
        year: string;
    };
    bank: 'visa' | 'mastercard';
}

const initialState: CardsState[] = [
    {
        type: 'debit',
        number: '1234 5678 9876 5432',
        balance: 1500.96,
        currency: 'RUB',
        expire: {
            month: '09',
            year: '2023',
        },
        bank: 'visa',
    },
];

const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState,
    reducers: {
        addCard(state, { payload: card }: PayloadAction<CardsState>) {
            return [...state, card];
        },
    },
});

export const { reducer, actions } = cardsSlice;
